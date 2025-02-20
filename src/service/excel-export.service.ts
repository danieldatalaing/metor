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
    padding : number
  ) {
    try {
      // Verifica la URL de la imagen antes de hacer la solicitud
      console.log('Fetching image from:', url);

      const response = await fetch(url); // Usa la URL directamente
      console.log('Response status:', response.status); // Verifica el estado de la respuesta

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status} for ${url}`);
      }

      const imageBuffer = await response.arrayBuffer();
      const buffer = new Uint8Array(imageBuffer); // Usa Uint8Array en lugar de Buffer

      const imageId = workbook.addImage({
        buffer: buffer,
        extension: 'png', // Asegúrate de que la extensión sea correcta
      });

      worksheet.addImage(imageId, posicion);
      console.log('Image added successfully at position:', posicion); // Confirma que la imagen se agregó
    } catch (error) {
      console.error(`Error adding image ${url}:`, error);
      // Manejo de errores: podrías agregar una imagen de marcador de posición aquí
    }
  }

  getExcelColumnName(colNumber: number): string {
    let columnName = '';
    while (colNumber > 0) {
      const modulo = (colNumber - 1) % 26;
      columnName = String.fromCharCode(65 + modulo) + columnName;
      colNumber = Math.floor((colNumber - 1) / 26);
    }
    return columnName;
  }

  async exportToExcel(
    data: any[],
    headers: string[],
    title: string,
    logos: string[]
  ) {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Datos');

    // 1. Configuración inicial de las filas 1, 2 y 3
    worksheet.getRow(1).height = 100; // Altura de la fila 1 para los logos y el título
    worksheet.getRow(2).height = 20; // Altura de la fila 2 (opcional)
    worksheet.getRow(3).height = 20; // Altura de la fila 3 (opcional)

    // 2. Forzar la creación de celdas en las filas 1, 2 y 3
    for (let rowNumber = 1; rowNumber <= 3; rowNumber++) {
      for (let colNumber = 1; colNumber <= headers.length + 10; colNumber++) {
        worksheet.getCell(rowNumber, colNumber).value = ''; // Asignar un valor vacío para crear la celda
      }
    }

    // 3. Aplicar fondo blanco y quitar bordes en las filas 1, 2 y 3
    for (let rowNumber = 1; rowNumber <= 3; rowNumber++) {
      worksheet.getRow(rowNumber).eachCell((cell, colNumber) => {
        console.log(
          `Aplicando fondo blanco a la celda en la fila ${rowNumber}, columna ${colNumber}`
        );
        cell.fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: 'FFFFFFFF' }, // Fondo blanco
        };
        // cell.border = {
        //   top: { style: 'none' },
        //   left: { style: 'none' },
        //   bottom: { style: 'none' },
        //   right: { style: 'none' },
        // };
      });
    }

    // 4. Agregar el logo izquierdo con "padding"
    const logoLeftUrl = logos[0]; // URL del primer logo
    const logoLeftPosition = 'A1:B2'; // Posición del logo izquierdo
    await this.agregarImagen(
      worksheet,
      workbook,
      logoLeftUrl,
      logoLeftPosition,
      1
    ); // Padding de 0.5

    // 5. Agregar el título en el centro
    const titleColumnStart = 3; // Columna donde comienza el título
    const titleColumnEnd = 9; // Columnas restantes para el título
    const titleCell = worksheet.getCell(1, titleColumnStart);
    titleCell.value = title;
    titleCell.font = { size: 28, bold: true, color: { argb: '00000000' } }; // Estilo del título
    titleCell.alignment = { vertical: 'middle', horizontal: 'center' };

    // Combinar celdas para el título
    worksheet.mergeCells(1, titleColumnStart, 1, titleColumnEnd);

    // 6. Agregar el logo derecho con "padding"
    const logoRightUrl = logos[1]; // URL del segundo logo
    const logoRightColumnStart = 9 + 1; // Columna donde comienza el logo derecho
    const logoRightPosition = `${this.getExcelColumnName(
      logoRightColumnStart
    )}1:${this.getExcelColumnName(logoRightColumnStart + 3)}2`; // Posición del logo derecho
    await this.agregarImagen(
      worksheet,
      workbook,
      logoRightUrl,
      logoRightPosition,
      1
    ); // Padding de 0.5

    // 7. Agregar los encabezados de las columnas
    const headerRow = worksheet.addRow(headers);
    headerRow.eachCell((cell) => {
      cell.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'FF4F81BD' }, // Color de fondo de los encabezados
      };
      cell.font = {
        bold: true,
        size: 12,
        color: { argb: 'FFFFFFFF' }, // Color de texto blanco
      };
      cell.border = {
        top: { style: 'thin', color: { argb: 'FF0000FF' } },
        left: { style: 'thin', color: { argb: 'FF0000FF' } },
        bottom: { style: 'thin', color: { argb: 'FF0000FF' } },
        right: { style: 'thin', color: { argb: 'FF0000FF' } },
      };
      cell.alignment = { vertical: 'middle', horizontal: 'center' };
    });

    // 8. Agregar los datos
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

    // 9. Ajustar el ancho de las columnas
    headers.forEach((_header, index) => {
      worksheet.getColumn(index + 1).width = 20; // Ancho inicial
    });

    // 10. Proteger la hoja para evitar ediciones en el banner
    worksheet.protect('password', {
      selectLockedCells: false, // No permitir seleccionar celdas bloqueadas
      selectUnlockedCells: true, // Permitir seleccionar celdas desbloqueadas
      formatCells: false, // No permitir formatear celdas
      formatColumns: false, // No permitir formatear columnas
      formatRows: false, // No permitir formatear filas
      insertColumns: false, // No permitir insertar columnas
      insertRows: false, // No permitir insertar filas
      insertHyperlinks: false, // No permitir insertar hipervínculos
      deleteColumns: false, // No permitir eliminar columnas
      deleteRows: false, // No permitir eliminar filas
      sort: false, // No permitir ordenar
      autoFilter: false, // No permitir filtros automáticos
      pivotTables: false, // No permitir tablas dinámicas
    });

    // 11. Desbloquear celdas de datos para permitir edición
    for (let rowNumber = 4; rowNumber <= data.length + 4; rowNumber++) {
      for (let colNumber = 1; colNumber <= headers.length; colNumber++) {
        worksheet.getCell(rowNumber, colNumber).protection = {
          locked: false, // Desbloquear celdas de datos
        };
      }
    }

    // 12. Descargar el archivo Excel
    workbook.xlsx.writeBuffer().then((buffer) => {
      const blob = new Blob([buffer], {
        type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      });
      saveAs(blob, 'reporte.xlsx');
    });
  }
}
