import { Injectable } from '@angular/core';
import * as ExcelJS from 'exceljs';
import { saveAs } from 'file-saver';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root',
})
export class ExcelExportService {
  constructor() {}

  private async agregarImagen(
    worksheet: ExcelJS.Worksheet,
    workbook: ExcelJS.Workbook,
    url: string,
    posicion: string,
    padding: number,
    imageWidthPx: number, // Nuevo parámetro: ancho de la imagen en píxeles
    imageHeightPx: number // Nuevo parámetro: alto de la imagen en píxeles
  ) {
    try {
      console.log('Fetching image from:', url);
      const response = await fetch(url);
      console.log('Response status:', response.status);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status} for ${url}`);
      }

      const imageBuffer = await response.arrayBuffer();
      const buffer = new Uint8Array(imageBuffer);

      const imageId = workbook.addImage({
        buffer: buffer,
        extension: 'png',
      });

      const [startCell, endCell] = posicion.split(':');
      const startCol = startCell.match(/[A-Z]+/)![0];
      const startRow = parseInt(startCell.match(/\d+/)![0]);
      const endCol = endCell.match(/[A-Z]+/)![0];
      const endRow = parseInt(endCell.match(/\d+/)![0]);

      // Ajuste: No sumar el padding a la columna y fila iniciales
      const startColIndex = this.getColumnIndex(startCol); // Sin padding
      const startRowIndex = startRow - 1; // Sin padding

      // Ajuste: No restar el padding a la columna y fila finales
      const endColIndex = this.getColumnIndex(endCol) + 1; // Sin padding
      const endRowIndex = endRow; // Sin padding

      const colWidth = worksheet.getColumn(startColIndex + 1).width || 10;
      const rowHeight = worksheet.getRow(startRowIndex + 1).height || 10;

       const cellWidthEMU = colWidth * 9525;

      // Ajuste: Restar el padding del ancho y alto de la imagen
      // Convertir el tamaño de la imagen de píxeles a EMU
      const widthEMU = imageWidthPx * 9525; // 1 píxel = 9525 EMU
      const heightEMU = imageHeightPx * 9525; // 1 píxel = 9525 EMU

      worksheet.addImage(imageId, {
        tl: { col: startColIndex, row: startRowIndex },
        ext: { width: widthEMU, height: heightEMU },
      });

      console.log(
        'Image added successfully at position:',
        posicion,
        'with padding:',
        padding
      );
    } catch (error) {
      console.error(`Error adding image ${url}:`, error);
    }
  }

  private getColumnIndex(colName: string): number {
    let index = 0;
    for (let i = 0; i < colName.length; i++) {
      index = index * 26 + (colName.charCodeAt(i) - 64);
    }
    return index - 1;
  }

  async exportToExcel(
    data: any[],
    headers: string[],
    title: string,
    logos: string[]
  ) {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Datos');

    worksheet.getRow(1).height = 40;
    worksheet.getColumn(1).width = 50;

    for (let rowNumber = 1; rowNumber <= 2; rowNumber++) {
      for (let colNumber = 1; colNumber <= headers.length + 10; colNumber++) {
        worksheet.getCell(rowNumber, colNumber).value = '';
      }
    }

    for (let rowNumber = 1; rowNumber <= 2; rowNumber++) {
      worksheet.getRow(rowNumber).eachCell((cell, colNumber) => {
        console.log(
          `Aplicando fondo blanco a la celda en la fila ${rowNumber}, columna ${colNumber}`
        );
        cell.fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: 'FFFFFFFF' },
        };
      });
    }

    const logoUrl = logos[0];
    await this.agregarImagen(worksheet, workbook, logoUrl, 'A1:A1', 1, 0.007, 0.006);

    const titleColumnStart = 1;
    const titleColumnEnd = 3;
    const titleCell = worksheet.getCell(1, titleColumnStart);
    titleCell.value = title;
    titleCell.font = { size: 22, bold: true, };
    titleCell.alignment = { vertical: 'middle', horizontal: 'center' };

    worksheet.mergeCells(1, titleColumnStart, 1, titleColumnEnd);

    const logoRightUrl = logos[1];
    const logoRightPosition = `C1:C1`; // Cambiado a H1:I1
    await this.agregarImagen(
      worksheet,
      workbook,
      logoRightUrl,
      logoRightPosition,
      1, // Ajustado el padding a 2 para que se vea mejor
      0.015, //ancho
      0.005 //alto
    );

    const headerRow = worksheet.addRow(headers);
    headerRow.eachCell((cell) => {
      cell.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'FF4F81BD' },
      };
      cell.font = {
        bold: true,
        size: 12,
        color: { argb: 'FFFFFFFF' },
      };
      cell.border = {
        top: { style: 'thin', color: { argb: 'FF0000FF' } },
        left: { style: 'thin', color: { argb: 'FF0000FF' } },
        bottom: { style: 'thin', color: { argb: 'FF0000FF' } },
        right: { style: 'thin', color: { argb: 'FF0000FF' } },
      };
      cell.alignment = { vertical: 'middle', horizontal: 'center' };
    });

    data.forEach((item) => {
      const values = headers.map((header) => item[header] || '');
      const row = worksheet.addRow(values);

      row.eachCell((cell) => {
        cell.border = {
          top: { style: 'thin', color: { argb: 'FF0000FF' } },
          left: { style: 'thin', color: { argb: 'FF0000FF' } },
          bottom: { style: 'thin', color: { argb: 'FF0000FF' } },
          right: { style: 'thin', color: { argb: 'FF0000FF' } },
        };
      });
    });

    headers.forEach((_header, index) => {
      worksheet.getColumn(index + 1).width = 40;
    });

    worksheet.protect('password', {
      selectLockedCells: false,
      selectUnlockedCells: true,
      formatCells: false,
      formatColumns: false,
      formatRows: false,
      insertColumns: false,
      insertRows: false,
      insertHyperlinks: false,
      deleteColumns: false,
      deleteRows: false,
      sort: false,
      autoFilter: false,
      pivotTables: false,
    });

    for (let rowNumber = 4; rowNumber <= data.length + 4; rowNumber++) {
      for (let colNumber = 1; colNumber <= headers.length; colNumber++) {
        worksheet.getCell(rowNumber, colNumber).protection = {
          locked: false,
        };
      }
    }

    workbook.xlsx.writeBuffer().then((buffer) => {
      const blob = new Blob([buffer], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      });
      saveAs(blob, 'reporte.xlsx');
    });
  }
}
