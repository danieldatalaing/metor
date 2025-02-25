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

      const startColIndex = this.getColumnIndex(startCol);
      const startRowIndex = startRow - 1;

      const endColIndex = this.getColumnIndex(endCol) + 1;
      const endRowIndex = endRow;

      const colWidth = worksheet.getColumn(startColIndex + 1).width || 10;
      const rowHeight = worksheet.getRow(startRowIndex + 1).height || 10;

      // Convertir el ancho de la celda a EMU
      const cellWidthEMU = colWidth * 9525;

      // Convertir el tamaño de la imagen de píxeles a EMU
      const widthEMU = imageWidthPx * 9525; // 1 píxel = 9525 EMU
      const heightEMU = imageHeightPx * 9525; // 1 píxel = 9525 EMU

      // Calcular la posición de la imagen para alinearla a la derecha
      const offsetX = cellWidthEMU - widthEMU;

      worksheet.addImage(imageId, {
        tl: {
          col: startColIndex,
          row: startRowIndex,
          offsetX: offsetX,
          offsetY: 0,
        } as { col: number; row: number; offsetX: number; offsetY: number }, // Forzar el tipo
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
    logos: string[],
    encabezado: string[]
  ) {
    console.log(data, headers, title, logos);

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Datos');

    worksheet.getRow(1).height = 80;
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
    await this.agregarImagen(
      worksheet,
      workbook,
      logoUrl,
      'A1:A1',
      1,
      0.05,
      0.01
    );

    const titleColumnStart = 2;
    const titleColumnEnd = 3;
    const titleCell = worksheet.getCell(1, titleColumnStart);
    titleCell.value = title;
    titleCell.font = { size: 22, bold: true };
    titleCell.alignment = {
      vertical: 'middle',
      horizontal: 'center',
      wrapText: true,
    };

    worksheet.mergeCells(1, titleColumnStart, 1, titleColumnEnd);

    const logoRightUrl = logos[1];
    const logoRightPosition = `a1`; // Cambiado a H1:I1
    await this.agregarImagen(
      worksheet,
      workbook,
      logoRightUrl,
      logoRightPosition,
      1, // Ajustado el padding a 2 para que se vea mejor
      0.026, //ancho
      0.01 //alto
    );
    // cell.alignment = { vertical: 'middle', horizontal: 'center' }; //ajuste de texto a la celda
    //imprimiendo encabezados de la hoja de excel
    const headerRow = worksheet.addRow(encabezado);
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
      cell.alignment = { vertical: 'middle', horizontal: 'center' }; //ajuste de texto a la celda
    });

    //aca recorre la data
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

        // Definir los arreglos de columnas para cada alineación
        const columnsToAlignRight = [5, 6, 8, 12,13,14,15,16,17,18,19, 20 ,21,22,23,24,25,26,27]; // Columnas a alinear a la derecha
        const columnsToAlignCenter = [1,2,3,4,7,8,9,10,11,28,29,20,31,32,33,34,35,36,37]; // Columnas a alinear al centro
        // const columnsToAlignLeft = [20]; // Columnas a alinear a la izquierda

        const headerRowIndex = 3; // Suponiendo que el encabezado está en la fila 3

        worksheet.eachRow((row, rowIndex) => {
          // Aplicar alineación a la derecha para las columnas correspondientes
          columnsToAlignRight.forEach((colNumber) => {
            const cell = row.getCell(colNumber);

            if (rowIndex !== headerRowIndex) {
              cell.alignment = {
                vertical: 'middle',
                horizontal: 'right', // Alineación a la derecha
                wrapText: true,
              };
            } else {
              // Estilo para el encabezado (centrado)
              cell.alignment = {
                vertical: 'middle',
                horizontal: 'center',
                wrapText: true,
              };
            }
          });

          // Aplicar alineación al centro para las columnas correspondientes
          columnsToAlignCenter.forEach((colNumber) => {
            const cell = row.getCell(colNumber);

            if (rowIndex !== headerRowIndex) {
              cell.alignment = {
                vertical: 'middle',
                horizontal: 'center', // Alineación al centro
                wrapText: true,
              };
            } else {
              // Estilo para el encabezado (centrado)
              cell.alignment = {
                vertical: 'middle',
                horizontal: 'center',
                wrapText: true,
              };
            }
          });

          function formatCellAsInteger(row: ExcelJS.Row, columnNumber: number) {
            const cell = row.getCell(columnNumber); // Obtener la celda de la columna especificada

            // Verificar si el valor existe, no es nulo, no es undefined y no es una cadena vacía
            if (
              cell.value !== null &&
              cell.value !== undefined &&
              cell.value !== ''
            ) {
              const numericValue = Number(cell.value);

              if (!isNaN(numericValue)) {
                // Verifica si el valor es un número válido
                cell.numFmt = '#,##0'; // Formato numérico con separador de miles y sin decimales
                cell.value = Math.floor(numericValue); // Asegurarse de que el valor sea un número entero
              } else {
                // Si el valor no es un número, puedes manejarlo de otra manera (opcional)
                console.warn(
                  `El valor en la columna ${columnNumber} no es un número válido: ${cell.value}`
                );
              }
            } else {
              // Si el valor es nulo, undefined o una cadena vacía, no hacer nada
              console.warn(
                `La celda de la columna ${columnNumber} está vacía o tiene un valor no válido.`
              );
            }
          }

          formatCellAsInteger(row, 3); // Formatear la columna 3
          formatCellAsInteger(row, 6); // Formatear la columna 6
          formatCellAsInteger(row, 8); // Formatear la columna 8

          // Aplicar alineación a la izquierda para las columnas correspondientes
          // columnsToAlignLeft.forEach((colNumber) => {
          //   const cell = row.getCell(colNumber);

          //   if (rowIndex !== headerRowIndex) {
          //     cell.alignment = {
          //       vertical: 'middle',
          //       horizontal: 'left', // Alineación a la izquierda
          //       wrapText: true,
          //     };
          //   } else {
          //     // Estilo para el encabezado (centrado)
          //     cell.alignment = {
          //       vertical: 'middle',
          //       horizontal: 'center',
          //       wrapText: true,
          //     };
          //   }
          // });
        });

        // cell.alignment = {
        //   vertical: 'middle',
        //   horizontal: 'center',
        //   wrapText: true,
        // }; //ajuste de texto a la celda
      });
    });

    headers.forEach((_header, index) => {
      worksheet.getColumn(index + 1).width = 60;
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
