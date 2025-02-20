import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { variable64 } from '../../assets/img';
import { variable128 } from '../../assets/metor';
import { Product } from '../../service/product.service';
(<any>pdfMake).addVirtualFileSystem(pdfFonts);

// type Product = {
//   cuota: number;
//   proceso: string;
//   desc: string;
//   result: number;
// };



const generatePDF = (products: Product [], reciboNo: string, fecha: string) => {
  // Definir el cuerpo de la tabla
  const tableBody = [
    [
      { text: '#', style: 'tableHeader' },
      { text: 'Proceso de Contratación', style: 'tableHeader' },
      { text: 'Descripción', style: 'tableHeader' },
      { text: 'Total Partidas', style: 'tableHeader' },
    ],
    ...products.map((product) => [
      {
        text: product.id?.toString(),
        style: 'tableCell',
        alignment: 'center',
      },
      { text: product.proceso_contratacion, style: 'tableCell' },
      { text: product.descripcion_corta_nombre_contrato, style: 'tableCell' },
      {
        text: product.partidas_totales?.toString(),
        style: 'tableCell',
        alignment: 'center',
      },
    ]),
  ];

  // Calcular el total general
const totalGeneral = products.reduce((sum, product) => {
  const totalPartida = parseInt(product.partidas_totales || '', 10); // Convierte a entero (base 10)
  return sum + totalPartida;
}, 0);

  // Definir el contenido del PDF
  const content: any[] = [];

  // Encabezado del PDF
  content.push({
    columns: [
      // Columna 1: Imagen de DataLaing
      { image: variable64.miVar, width: 125 },

      //Columna 1.1: Imagen de Metor
      {
        image: variable128.miVar,
        width: 50,
        alignment: 'center',
      },

      // Columna 2: Texto (centrado)
      {
        stack: [
          { text: `Reporte de los Procesos`, style: 'header', fontSize: 12 },
          { text: `Fecha: ${fecha}`, style: 'subheader', fontSize: 10 },
        ],
        alignment: 'center',
        width: '*', // Ocupa el espacio restante
      },

      // Columna 3: Código QR (alineado a la derecha)
      {
        qr: 'https://datalaing.com/site/contacto/',
        fit: 70,
        alignment: 'right',
        width: 'auto', // Ancho automático según el contenido
      },
    ],
    columnGap: 10, // Espacio entre columnas (opcional)
  });

  // Espacio en blanco
  //content.push({ text: '\n' });

  // Tabla de productos
  content.push({
    table: {
      headerRows: 1,
      widths: [20, '*', '*', '*'], // Ajustar el ancho de las columnas
      heights: 20, // Tamaño fijo para todas las filas
      body: tableBody,
      dontBreakRows: true,
    },
    layout: {
      hLineWidth: (i: number, node: any) =>
        i === 0 || i === node.table.body.length ? 1 : 1, // Líneas horizontales
      vLineWidth: () => 1, // Líneas verticales
      hLineColor: () => '#000', // Color de las líneas horizontales
      vLineColor: () => '#000', // Color de las líneas verticales
      paddingTop: () => 5, // Espaciado superior
      paddingBottom: () => 5, // Espaciado inferior
    },
    margin: [0, 10, 0, 10],
  });

  // Total general
  content.push({
    columns: [
      { text: '', width: '*' },
      {
        text: `Total: ${totalGeneral}`,
        style: 'total',
        alignment: 'right',
        margin: [0, 10, 0, 10],
      },
    ],
  });

  // Estilos del PDF
  const styles = {
    header: {
      fontSize: 14,
      bold: true,
    },
    subheader: {
      fontSize: 12,
      margin: [0, 5, 0, 5],
      color: 'black',
    },
    tableHeader: {
      bold: true,
      fontSize: 12,
      color: 'black',
      fillColor: '#fff',
      alignment: 'center', // Fondo de la cabecera
    },
    tableCell: {
      fontSize: 8,
      margin: [0, 5, 0, 5], // Espaciado en las celdas
    },
    total: {
      fontSize: 12,
      bold: true,
      color: 'black',
    },
    footer: {
      fontSize: 6, // Tamaño de la letra del footer
      color: 'black',
      alignment: 'center',
    },
  };

  // Definición del documento con footer
  const docDefinition: any = {
    content,
    styles,
    footer: function (currentPage: number, pageCount: number) {
      return {
        columns: [
          {
            text: 'Innovación Tecnologica por DataLaing',
            alignment: 'right',
            fontSize: 9,
            bold: true,
          },
          {
            text: `Página ${currentPage} de ${pageCount}`,
            alignment: 'right',
            fontSize: 9,
          },
        ],
        margin: [40, 10], // Ajustar márgenes del footer
      };
    },
    watermark: {
      text: 'DataLaing', // Texto de la marca de agua
      color: 'gray', // Color del texto
      opacity: 0.3, // Opacidad del texto
      bold: true, // Texto en negrita
      italics: false, // Texto en cursiva (opcional)
      fontSize: 60, // Tamaño de la fuente
      angle: 45, // Ángulo de inclinación del texto
    },
  };

  // Generar y abrir el PDF
  pdfMake.createPdf(docDefinition).open();
};

export default generatePDF;
