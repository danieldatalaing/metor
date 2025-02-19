import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
import { variable64 } from '../../assets/img';
import { variable128 } from '../../assets/metor';

(<any>pdfMake).addVirtualFileSystem(pdfFonts);

type Product = {
  cuota: number;
  proceso: string;
  desc: string;
  result: number;
};

const generatePDF = (products: Product[], reciboNo: string, fecha: string) => {
  // Definir el cuerpo de la tabla
  const tableBody = [
    [
      { text: '#', style: 'tableHeader' },
      { text: 'Proceso de Contratación', style: 'tableHeader' },
      { text: 'Descripción', style: 'tableHeader' },
      { text: 'Total Partidas', style: 'tableHeader' },
    ],
    ...products.map((product) => [
      { text: product.cuota.toString(), style: 'tableCell' },
      { text: product.proceso, style: 'tableCell' },
      { text: product.desc, style: 'tableCell' },
      { text: product.result.toString(), style: 'tableCell' },
    ]),
  ];

  // Calcular el total general
  const totalGeneral = products.reduce(
    (sum, product) => sum + product.result,
    0
  );

  // Definir el contenido del PDF
  const content: any[] = [];

  // Encabezado del PDF
  content.push({
    columns: [
      { image: variable64.miVar, width: 150 },
      {
        stack: [
          { text: `Reporte de los Procesos`, style: 'header' },
          { text: `Fecha: ${fecha}`, style: 'subheader' },
        ],
        alignment: 'right',
      },
    ],
  });

  // Código QR
  content.push({
    qr: 'https://datalaing.com/site/contacto/',
    fit: 100,
    alignment: 'right',
    margin: [0, 10, 0, 10],
  });

  // Espacio en blanco
  content.push({ text: '\n' });

  // Tabla de productos
  content.push({
    table: {
      headerRows: 1,
      widths: ['*', '*', '*', '*'], // Ajustar el ancho de las columnas
      heights: 20, // Tamaño fijo para todas las filas
      body: tableBody,
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
  };

  // Definición del documento
  const docDefinition: any = {
    content,
    styles,
  };

  // Generar y abrir el PDF
  pdfMake.createPdf(docDefinition).open();
};

export default generatePDF;
