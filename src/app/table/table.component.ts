import { Component, OnInit, ViewChild, SecurityContext } from '@angular/core';
import { TableModule, Table } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { Product, ProductService } from '../../service/product.service';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { TableRowCollapseEvent, TableRowExpandEvent } from 'primeng/table';
import { MultiSelectModule } from 'primeng/multiselect';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { AppTopbar } from '../layout/component/app.topbar';
import { FormsModule } from '@angular/forms';
import { Dialog } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { CarouselModule } from 'primeng/carousel';
import { DomSanitizer, SafeResourceUrl, SafeUrl, } from '@angular/platform-browser';
import { CardModule } from 'primeng/card';
import { TooltipModule } from 'primeng/tooltip';
import { environment } from '../../environment/environment';
import generatePDF from '../lib/pdf';
import { ExcelExportService } from '../../service/excel-export.service';

interface Archivo {
  id: number;
  nombre: string;
  tipo: string;
}

interface Carpeta {
  id: number;
  nombre: string;
  archivos: Archivo[];
}

interface Column {
  field: string;
  header: string;
  customExportHeader?: string;
  width : string;
}

@Component({
  selector: 'app-table',
  imports: [
    TableModule,
    ToastModule,
    ButtonModule,
    CommonModule,
    MultiSelectModule,
    InputIconModule,
    IconFieldModule,
    AppTopbar,
    FormsModule,
    Dialog,
    IconFieldModule,
    InputTextModule,
    InputIconModule,
    CarouselModule,
    CardModule,
    TooltipModule,
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
  providers: [ProductService, MessageService],
})
export class TableComponent implements OnInit {
  getFileExtension(url: string): string {
    if (url) {
      const extension = url.substring(url.lastIndexOf('.') + 1);
      return extension.toLowerCase();
    }
    return '';
  }

  generatePdf(products: any,frase : string) {
    // const products = [
    //   {
    //     cuota: 1,
    //     proceso: 'GM-C-2024-14',
    //     desc: 'CERTIF. CALDERA A-B-C',
    //     result: 35,
    //   },
    //   {
    //     cuota: 2,
    //     proceso: 'GPP-C-2023-14',
    //     desc: 'ADECUACION FRANJA',
    //     result: 25,
    //   },
    //   {
    //     cuota: 3,
    //     proceso: 'GM-C-2023-57',
    //     desc: 'REEMPL. CAT. AZUFRE',
    //     result: 7,
    //   },
    //   {
    //     cuota: 4,
    //     proceso: 'GM-C-2023-55',
    //     desc: 'FABRICACION TANQU T-830',
    //     result: 13,
    //   },
    //   {
    //     cuota: 5,
    //     proceso: 'GM-C-2024-11',
    //     desc: 'MTTO EQUIPOS PESADOS',
    //     result: 14,
    //   },
    //   {
    //     cuota: 6,
    //     proceso: 'GM-C-2023-48',
    //     desc: 'AIRES ACONDICIONADOS',
    //     result: 13,
    //   },
    //   { cuota: 7, proceso: 'GF-C-2024-01', desc: 'AREAS VERDES', result: 6 },
    //   {
    //     cuota: 8,
    //     proceso: 'GM-C-2023-59',
    //     desc: 'CARBONO ACTIVADO',
    //     result: 12,
    //   },
    //   {
    //     cuota: 9,
    //     proceso: 'GM-C-2024-08',
    //     desc: 'CABLES DE POTENCIA',
    //     result: 35,
    //   },
    //   {
    //     cuota: 10,
    //     proceso: 'GPP-C-2024-04',
    //     desc: 'URGENCIA VIALIDAD',
    //     result: 28,
    //   },
    //   {
    //     cuota: 11,
    //     proceso: 'GM-C-2024-16',
    //     desc: 'CONF. DE ROTATIVOS',
    //     result: 22,
    //   },
    //   {
    //     cuota: 12,
    //     proceso: 'GM-C-2024-19',
    //     desc: 'URGENCIA AEROENFRIADORES',
    //     result: 9,
    //   },
    //   {
    //     cuota: 13,
    //     proceso: 'GM-C-2024-23',
    //     desc: 'URGENCIA CHAQUETA',
    //     result: 1,
    //   },
    //   {
    //     cuota: 14,
    //     proceso: 'GO-C-2023-03',
    //     desc: 'SUMINISTRO DE QUIMICOS Y SERVICIO TECNICO',
    //     result: 8,
    //   },
    //   {
    //     cuota: 15,
    //     proceso: 'GPP-C-2023-16',
    //     desc: 'IPC YPUESTA EN MARCHA SWITCHGEAR BAJA TENSION',
    //     result: 12,
    //   },
    //   {
    //     cuota: 16,
    //     proceso: 'GPP-C-2023-17',
    //     desc: 'REP PIPE RACK',
    //     result: 13,
    //   },
    //   {
    //     cuota: 17,
    //     proceso: 'GPP-C-2024-01',
    //     desc: 'ELAB GIGANTOGRAFIAS INFORMATIVAS',
    //     result: 3,
    //   },
    //   {
    //     cuota: 18,
    //     proceso: 'GPP-STAP1-2024-01',
    //     desc: 'FIBRA VIDRIO',
    //     result: 8,
    //   },
    //   {
    //     cuota: 19,
    //     proceso: 'GPP-STAP1-2024-23',
    //     desc: 'MTTO VALV CONTROL TALLER EXT',
    //     result: 15,
    //   },
    //   {
    //     cuota: 20,
    //     proceso: 'GPP-STAP1-2024-02',
    //     desc: 'EQUIPOS PESADOS',
    //     result: 6,
    //   },
    //   {
    //     cuota: 21,
    //     proceso: 'GPP-STAP1-2024-35',
    //     desc: 'TALLER METALMECANICO',
    //     result: 4,
    //   },
    //   {
    //     cuota: 22,
    //     proceso: 'GPP-STAP1-2024-31',
    //     desc: 'INSP INTERCAMBIADORES',
    //     result: 90,
    //   },
    //   {
    //     cuota: 23,
    //     proceso: 'GPP-STAP1-2024-24',
    //     desc: 'ALQUILER RADIOS PORTATILES',
    //     result: 4,
    //   },
    //   {
    //     cuota: 24,
    //     proceso: 'GPP-STAP1-2024-29',
    //     desc: 'INSP EQ EST Y ROT',
    //     result: 23,
    //   },
    //   { cuota: 25, proceso: 'GPP-STAP1-2024-33', desc: 'LABORES', result: 195 },
    //   {
    //     cuota: 26,
    //     proceso: 'GPP-STAP1-2024-18',
    //     desc: 'EVAL METALURGICAS',
    //     result: 8,
    //   },
    //   {
    //     cuota: 27,
    //     proceso: 'GPP-STAP1-2024-03',
    //     desc: 'MTTO VALV SEG TALLER EXT',
    //     result: 42,
    //   },
    //   {
    //     cuota: 28,
    //     proceso: 'GPP-STAP1-2024-13',
    //     desc: 'REEMPLAZO STMA IGNIC FLARE M-721',
    //     result: 25,
    //   },
    //   {
    //     cuota: 29,
    //     proceso: 'GPP-STAP1-2024-14',
    //     desc: 'DISP FINAL DESECHOS',
    //     result: 9,
    //   },
    //   {
    //     cuota: 30,
    //     proceso: 'GPP-STAP1-2024-17',
    //     desc: 'FLOOR SCANNER',
    //     result: 2,
    //   },
    //   {
    //     cuota: 31,
    //     proceso: 'GPP-STAP1-2024-16',
    //     desc: 'AISLAMIENTO TERM PETROPARADA',
    //     result: 6,
    //   },
    //   {
    //     cuota: 32,
    //     proceso: 'GPP-STAP1-2024-19',
    //     desc: 'MTTO GENERAL ELECTRICIDAD',
    //     result: 32,
    //   },
    //   {
    //     cuota: 33,
    //     proceso: 'GPP-STAP1-2024-20',
    //     desc: 'REEMPLAZO E-205 STA-P1',
    //     result: 59,
    //   },
    //   {
    //     cuota: 34,
    //     proceso: 'GPP-STAP1-2024-21',
    //     desc: 'FLOWSERVE',
    //     result: 4,
    //   },
    //   {
    //     cuota: 35,
    //     proceso: 'GPP-STAP1-2024-45',
    //     desc: 'ANDAMIOS CUPLOCK',
    //     result: 6,
    //   },
    //   {
    //     cuota: 36,
    //     proceso: 'GPP-STAP1-2024-48',
    //     desc: 'SERV Y SUMIN TOLDOS Y MAT UTILERIA',
    //     result: 6,
    //   },
    //   {
    //     cuota: 37,
    //     proceso: 'GPP-STAP1-2024-47',
    //     desc: 'ASIST TEC SERV AUX SALA CONTROL Y SUB ELEC PPAL',
    //     result: 8,
    //   },
    //   {
    //     cuota: 38,
    //     proceso: 'GPP-STAP1-2024-32',
    //     desc: 'MTTO GRAL INSTRUMENT',
    //     result: 74,
    //   },
    //   {
    //     cuota: 39,
    //     proceso: 'GPP-STAP1-2024-34',
    //     desc: 'INST Y RET CIEGOS',
    //     result: 6,
    //   },
    //   {
    //     cuota: 40,
    //     proceso: 'GPP-STAP1-2024-36',
    //     desc: 'MTTO TALLER EXT MOTORES ELECT MEDIA Y BAJA TENSIÓN',
    //     result: 13,
    //   },
    //   {
    //     cuota: 41,
    //     proceso: 'GPP-STAP1-2024-41',
    //     desc: 'AVISOS M5',
    //     result: 48,
    //   },
    //   {
    //     cuota: 42,
    //     proceso: 'GPP-STAP1-2024-42',
    //     desc: 'MTTO. GRAL ROTATIVOS',
    //     result: 63,
    //   },
    //   {
    //     cuota: 43,
    //     proceso: 'GPP-STAP1-2024-44',
    //     desc: 'ALQUILER FACILIDADES',
    //     result: 6,
    //   },
    //   {
    //     cuota: 44,
    //     proceso: 'GT-C-2024-02',
    //     desc: 'ACTUALIZACION DE PLC',
    //     result: 9,
    //   },
    //   {
    //     cuota: 45,
    //     proceso: 'GPP-STAP2-2024-43',
    //     desc: 'CATALIZADOR DEL HIDROGENADOR R-1101 Y HORNO F-1201',
    //     result: 9,
    //   },
    //   {
    //     cuota: 46,
    //     proceso: 'GPP-STAP1-2024-49',
    //     desc: 'TRANSPORTE MATERIALES',
    //     result: 4,
    //   },
    //   {
    //     cuota: 47,
    //     proceso: 'GPP-STAP1-2024-40',
    //     desc: 'MTTO ESTR REEM VENT Y HACES TUB',
    //     result: 22,
    //   },
    //   {
    //     cuota: 48,
    //     proceso: 'GPP-STAP1-2024-39',
    //     desc: 'HORNO REFORMADOR',
    //     result: 50,
    //   },
    //   {
    //     cuota: 49,
    //     proceso: 'GPP-STAP1-2024-37',
    //     desc: 'MTTO GENERAL ESTÁTICO',
    //     result: 262,
    //   },
    // ];

    const reciboNo = '12345678';

    const fecha = new Date().toLocaleDateString('es-ES', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });

    generatePDF(products, reciboNo, fecha);
  }

  getBackgroundColor(url: string): string {
    const extension = this.getFileExtension(url);
    switch (extension) {
      case 'pptx':
        return '##B63519'; // Rojo
      case 'docx':
      case 'doc':
        return '#1F5EBC'; // Azul
      case 'xlsx':
      case 'xls':
        return '##1DA061'; // Verde
      default:
        return '#808080'; // Gris (color por defecto)
    }
  }
  urlsSeguras: SafeUrl[] = [];
  products!: Product[];
  pdfs: { nombre: string; url: SafeResourceUrl }[] = []; // Para PDFs
  imagenes: { nombre: string; url: string }[] = []; // Para PDFs
  archivosDescargables: { nombre: string; url: string }[] = []; // Para Excel y Word

  informacion?: Product;

  filteredProducts: any[] = []; // O el tipo específico de tus orders

  productosFiltrados: Product[] = [];

  responsiveOptions: any[] | undefined;

  expandedRows = {};

  @ViewChild('dt') dt!: Table;

  cols!: Column[];

  product!: Product;

  productDialog: boolean = false;

  selectedColumns!: Column[];

  constructor(
    private productService: ProductService,
    private messageService: MessageService,
    private sanitizer: DomSanitizer,
    private excelExportService: ExcelExportService
  ) {}

  visible: boolean = false;

  visible2: boolean = false;

  visible3: boolean = false;

  showDialog(product: Product) {
    this.visible = true;
    this.product = { ...product };
    this.productDialog = true;
  }

  headers = [
    'proceso_contratacion', // Nombres corregidos
    'fecha_presupuesto',
    'descripcion_corta_nombre_contrato',
    'nombre_contrato',
    'monto_total_cd',
    'partidas_totales',
    'capitulo',
    'no_partida',
    'clasificacion_dificulta_apu',
    'descripcion_partida',
    'unidad',
    'cant', // Corregido
    'precio_unitario_apu',
    'total_partida',
    'rendimiento_diario',
    'no_personas_apu',
    'horas_trabajadas_dia_apu',
    'porcentaje_fcas',
    'porcentaje_adm',
    'porcentaje_utilidad',
    'duracion_partida_dias',
    'hh_dia_real',
    'hh_lapso_8hrs',
    'relacion_htd_8hrs',
    'hh_lapso_horas_trabajadas',
    'hh_unidad',
    'hh_unidad_x_cant',
    'reserva',
    'costo_unitario_hh_r_r',
    'productividad',
    'nivel_apu_evaluacion',
    'observacion_sugerencia',
    'comentarios',
    'ubicacion',
    'horario',
    'tiempo_ejecucion_dias',
    'fecha_contratacion',
    'antes_de_inicio_mas',
  ];

  headers2 = [
    'proceso_contratacion', // Nombres corregidos
    'descripcion_corta_nombre_contrato',
    'partidas_totales',
  ];
  title2 = 'PROCESOS';
  title = 'REPORTE DE LOS PROCESOS DE CONTRATACIÓN POR PARTIDAS';
  logos = [
    environment.apiUrl + '/Metor.png',
    environment.apiUrl + '/DATALAING-1.png',
  ];

  ordenarJson(jsonArray: Product[], headers: string[]): Product[] {
    return jsonArray.map((json) => {
      // Itera sobre el array de objetos
      const nuevoJson: Product = {};
      headers.forEach((header) => {
        if (json.hasOwnProperty(header)) {
          nuevoJson[header] = json[header];
        } else {
          console.warn(
            `La clave '${header}' no se encontró en el objeto JSON.`
          );
        }
      });

      // Agregar propiedades que no están en headers (opcional)
      for (const key in json) {
        if (!headers.includes(key)) {
          nuevoJson[key] = json[key];
        }
      }

      return nuevoJson; // Retorna el objeto ordenado
    });
  }

  exportToExcel(data: any, tipo: string) {

    if (tipo == 'unico') {

      const dataOrdenada = this.ordenarJson(data, this.headers2);
      this.excelExportService.exportToExcel(
        dataOrdenada, //Ahora dataOrdenada es un array de Product
        this.headers2,
        this.title2,
        this.logos
      );

    } else {
//es filtrada

      let producto = this.productService.getProductsData() as Product[];

      let procesosinespacio = data.proceso_contratacion?.trim();

      const filteredProducts = producto.filter(
        (product) => product.proceso_contratacion?.trim() === procesosinespacio
      );

      this.filteredProducts = filteredProducts.sort(
        (a, b) => Number(a.no_partida) - Number(b.no_partida)
      );

      const dataOrdenada = this.ordenarJson(
        this.filteredProducts,
        this.headers
      );
      this.excelExportService.exportToExcel(
        dataOrdenada, //Ahora dataOrdenada es un array de Product
        this.headers,
        this.title,
        this.logos
      );
    }

    // Asegúrate de que excelExportService.exportToExcel acepte un array de objetos
  }

  calculateRowIndex(table: any, product: any): number {
    // Obtén la lista de elementos que se están mostrando actualmente en la tabla
    const visibleItems = table.filteredValue || table.value;

    // Encuentra el índice del producto en la lista visible
    const index = visibleItems.indexOf(product);

    // Si el producto no está en la lista visible, retorna 0 o maneja el caso según sea necesario
    if (index === -1) {
      return 0;
    }

    // Retorna el índice + 1 para que comience desde 1
    return index + 1;
  }
  public procesosUnicos: { [key: string]: any } = {};
  public procesosUnicosArray: any[] = [];

  async ngOnInit() {
    try {
      // Cargar los datos
      const data = await this.productService.getProductsData();
      this.products = data;

      // Crear el objeto para almacenar los procesos únicos

      // Recorrer los productos y procesarlos
      this.products.forEach((item) => {
        // Asignar un valor por defecto si proceso_contratacion es undefined o null
        item.proceso_contratacion = item.proceso_contratacion || 'Sin proceso';

        // Almacenar el proceso en el objeto si no existe
        if (!this.procesosUnicos[item.proceso_contratacion]) {
          this.procesosUnicos[item.proceso_contratacion] = item;
        }
      });

      this.procesosUnicosArray = Object.values(this.procesosUnicos);

      // Aquí puedes usar this.procesosUnicos
    } catch (error) {
      console.error('Error al cargar los productos:', error);
    }

    // Definir las columnas de la tabla
    this.cols = [
      {
        field: 'proceso_contratacion',
        header: 'Proceso de Contratación',
        width: '200px',
      }, //2
      {
        field: 'fecha_presupuesto',
        header: 'Fecha Presupuesto',
        width: '200px',
      }, //3
      {
        field: 'descripcion_corta_nombre_contrato',
        header: 'Descripción Corta del Nombre del Contrato',
        width: '200px',
      }, //4
      {
        field: 'nombre_contrato',
        header: 'Nombre del Contrato',
        width: '200px',
      }, //5
      { field: 'monto_total_cd', header: 'Monto Total CD', width: '10px' }, //6
      { field: 'partidas_totales', header: 'Partidas Totales', width: '10px' }, //7
      { field: 'capitulo', header: 'Capítulo', width: '10px' }, //8
      { field: 'no_partida', header: 'No. de Partida', width: '10px' }, //9

      {
        field: 'clasificacion_dificulta_apu',
        header: 'Clasificación Dificultad APU', //ESTE NO DEBERIA IR AQUI SEGUN EL ORDEN DEL EXCEL
        width: '200px',
      },

      {
        field: 'descripcion_partida',
        header: 'Descripción de la Partida',
        width: '200px',
      }, //10
      { field: 'unidad', header: 'Unidad', width: '10px' }, //11
      { field: 'cant', header: 'Cantidad', width: '10px' }, //12
      {
        field: 'precio_unitario_apu',
        header: 'Precio Unitario APU',
        width: '200px',
      }, //13
      { field: 'total_partida', header: 'Total Partida', width: '10px' }, //14
      {
        field: 'rendimiento_diario',
        header: 'Rendimiento Diario',
        width: '200px',
      }, //15
      {
        field: 'no_personas_apu',
        header: 'No. de Personas APU',
        width: '200px',
      }, //16
      {
        field: 'horas_trabajadas_dia_apu',
        header: 'Horas Trabajadas al Día APU',
        width: '200px',
      }, //17
      { field: 'porcentaje_fcas', header: '% FCAS', width: '10px' }, //18
      { field: 'porcentaje_adm', header: '% ADM', width: '10px' }, //19
      { field: 'porcentaje_utilidad', header: '% Utilidad', width: '10px' }, //20
      {
        field: 'duracion_partida_dias',
        header: 'Duración de Partida (Días)',
        width: '200px',
      }, //21
      { field: 'hh_dia_real', header: 'HH/Día Real', width: '10px' }, //22
      { field: 'hh_lapso_8hrs', header: 'HH/Lapso 8hrs', width: '10px' }, //23
      {
        field: 'relacion_htd_8hrs',
        header: 'Relación HTD/8hrs',
        width: '200px',
      }, //24
      {
        field: 'hh_lapso_horas_trabajadas',
        header: 'HH/Lapso Horas Trabajadas',
        width: '200px',
      }, //25
      { field: 'hh_unidad', header: 'HH/Unidad', width: '10px' }, //26
      {
        field: 'hh_unidad_x_cant',
        header: 'HH/Unidad x Cantidad',
        width: '200px',
      }, //27
      { field: 'reserva', header: 'Reserva', width: '10px' }, //28
      {
        field: 'costo_unitario_hh_r_r',
        header: 'Costo Unitario HH R/R',
        width: '200px',
      }, //29
      { field: 'productividad', header: 'Productividad', width: '10px' }, //30
      {
        field: 'nivel_apu_evaluacion',
        header: 'Nivel APU Evaluación',
        width: '200px',
      }, //31
      {
        field: 'observacion_sugerencia',
        header: 'Observación/Sugerencia',
        width: '200px',
      }, //32
      { field: 'comentarios', header: 'Comentarios', width: '10px' }, //33
      //34
      { field: 'ubicacion', header: 'Ubicación', width: '300px' }, //35
      { field: 'horario', header: 'Horario', width: '10px' }, //36
      {
        field: 'tiempo_ejecucion_dias',
        header: 'Tiempo de Ejecución (Días)',
        width: '200px',
      }, //37
      {
        field: 'fecha_contratacion',
        header: 'Fecha de Contratación',
        width: '200px',
      }, //38
      {
        field: 'antes_de_inicio_mas',
        header: 'Antes de Inicio Más',
        width: '200px',
      }, //39
      // { field: 'revisor_interno', header: 'Revisor Interno', width: '10px' }, //40
      // { field: 'revisor_externo', header: 'Revisor Externo', width: '10px' }, //41
      // {
      //   field: 'nombre_empresa',
      //   header: 'Nombre de la Empresa',
      //   width: '200px',
      // }, //42
      // { field: 'rif', header: 'RIF', width: '10px' }, //43
      // {
      //   field: 'representante_director',
      //   header: 'Representante/Director',
      //   width: '200px',
      // }, //44
      // {
      //   field: 'direccion_ciudad1_telefonos1',
      //   header: 'Dirección/Ciudad/Teléfonos 1',
      //   width: '200px',
      // }, //45
      // {
      //   field: 'direccion_ciudad12_telefonos2',
      //   header: 'Dirección/Ciudad/Teléfonos 2',
      //   width: '200px',
      // }, //46
      // { field: 'email', header: 'Email', width: '10px' }, //47
    ];

    // Definir las columnas seleccionadas
    this.selectedColumns = [
      {
        field: 'proceso_contratacion',
        header: 'Proceso de Contratación',
        width: '200px',
      }, //2
      {
        field: 'fecha_presupuesto',
        header: 'Fecha Presupuesto',
        width: '200px',
      }, //3
      {
        field: 'descripcion_corta_nombre_contrato',
        header: 'Descripción Corta del Nombre del Contrato',
        width: '300px',
      }, //4
      {
        field: 'nombre_contrato',
        header: 'Nombre del Contrato',
        width: '300px',
      }, //5
      { field: 'monto_total_cd', header: 'Monto Total CD', width: '10px' }, //6
      { field: 'partidas_totales', header: 'Partidas Totales', width: '10px' }, //7
      { field: 'capitulo', header: 'Capítulo', width: '200px' }, //8
      {
        field: 'clasificacion_dificulta_apu',
        header: 'Clasificación Dificultad APU', //ESTE NO DEBERIA IR AQUI SEGUN EL ORDEN DEL EXCEL
        width: '200px',
      },
      { field: 'no_partida', header: 'No. de Partida', width: '10px' }, //9
      {
        field: 'descripcion_partida',
        header: 'Descripción de la Partida',
        width: '300px',
      }, //10
      { field: 'unidad', header: 'Unidad', width: '10px' }, //11
      { field: 'cant', header: 'Cantidad', width: '10px' }, //12
      {
        field: 'precio_unitario_apu',
        header: 'Precio Unitario APU',
        width: '200px',
      }, //13
      { field: 'total_partida', header: 'Total Partida', width: '10px' }, //14
    ];

    // Opciones responsivas
    this.responsiveOptions = [
      {
        breakpoint: '1400px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '1199px',
        numVisible: 3,
        numScroll: 1,
      },
      {
        breakpoint: '767px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '575px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }

  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  getDificultadClass(dificultad: string): string {
    switch (dificultad?.toLowerCase()) {
      case 'baja':
        return 'dificultad-baja';
      case 'media':
        return 'dificultad-media';
      case 'alta':
        return 'dificultad-alta';
      default:
        return ''; // Sin clase si no coincide
    }
  }

  //funcion que realiza el salto de linea
  insertLineBreaks(text: string, maxLength: number = 60): string {
    if (!text) return '- Sin información -'; // Manejo de valores nulos o undefined

    let result = '';
    let currentLength = 0;

    // Divide el texto en palabras
    const words = text.split(' ');

    for (const word of words) {
      // Si agregar la palabra excede el límite, inserta un salto de línea
      if (currentLength + word.length > maxLength) {
        result += '<br>' + word + ' ';
        currentLength = word.length + 1; // Reinicia el contador
      } else {
        result += word + ' ';
        currentLength += word.length + 1; // Suma la longitud de la palabra más el espacio
      }
    }

    return result.trim(); // Elimina el espacio final
  }

  filtrarProductos(procesoContratacionDeseado: Product) {
    let producto = this.productService.getProductsData() as Product[];

    let procesosinespacio =
      procesoContratacionDeseado.proceso_contratacion?.trim();

    this.informacion = procesoContratacionDeseado;

    const filteredProducts = producto.filter(
      (product) => product.proceso_contratacion?.trim() === procesosinespacio
    );

    this.filteredProducts = filteredProducts.sort(
      (a, b) => Number(a.no_partida) - Number(b.no_partida)
    );

    return filteredProducts;
  }

  archivo(proceso: Product) {
    let procesosinespacio = proceso.proceso_contratacion?.trim();
    this.informacion = proceso;

    let archivos = this.productService.getArchivos() as Carpeta[];

    const filteredProducts = archivos.filter(
      (carpeta) => carpeta.nombre === procesosinespacio
    );

    if (filteredProducts.length > 0) {
      const carpeta = filteredProducts[0];

      this.visible2 = true;
      this.productDialog = true;
      this.pdfs = []; // Reiniciar arreglo de PDFs
      this.archivosDescargables = []; // Reiniciar arreglo de archivos descargables
      this.imagenes = []; // Reiniciar arreglo de archivos descargables
      Promise.all(
        carpeta.archivos.map(async (archivo) => {
          const rutaCompleta = await this.obtenerRutaCompleta(
            carpeta.nombre,
            archivo.nombre
          );

          if (rutaCompleta) {
            if (this.esPDF(archivo.nombre)) {
              // Si es un PDF, sanitizar la URL y almacenarla
              const urlSegura =
                this.sanitizer.bypassSecurityTrustResourceUrl(rutaCompleta);
              this.pdfs.push({ nombre: archivo.nombre, url: urlSegura });
            } else if (this.esarchivosDescargable(archivo.nombre)) {
              // Si es un archivo de Excel o Word, almacenar la URL para descargar
              this.archivosDescargables.push({
                nombre: archivo.nombre,
                url: rutaCompleta,
              });
            }
          } else {
            this.visible3 = true;
          }
        })
      )
        .then(() => {})
        .catch((error) => {});
    } else {
      this.visible3 = true;
    }
  }

  // Método para verificar si un archivo es PDF
  esPDF(nombreArchivo: string): boolean {
    return nombreArchivo.toLowerCase().endsWith('.pdf');
  }

  // Método para verificar si un archivo es Word
  esarchivosDescargable(nombreArchivo: string): boolean {
    return (
      nombreArchivo.toLowerCase().endsWith('.docx') ||
      nombreArchivo.toLowerCase().endsWith('.doc') ||
      nombreArchivo.toLowerCase().endsWith('.tif') ||
      nombreArchivo.toLowerCase().endsWith('.jpg') ||
      nombreArchivo.toLowerCase().endsWith('.jpeg') ||
      nombreArchivo.toLowerCase().endsWith('.png') ||
      nombreArchivo.toLowerCase().endsWith('.xlsx') ||
      nombreArchivo.toLowerCase().endsWith('.xls') ||
      nombreArchivo.toLowerCase().endsWith('.pptx')
    );
  }

  async obtenerRutaCompleta(
    nombreCarpeta: string,
    nombreArchivo: string
  ): Promise<string | null> {
    const urlBase = `${environment.apiUrl}/files/`; // Reemplaza con tu URL base
    const ruta = `${urlBase}${nombreCarpeta}/${nombreArchivo}`;
    return ruta;
  }

  descargarArchivo(url: string) {
    const link = document.createElement('a');
    link.href = url;
    link.download = url.split('/').pop() || 'archivo'; // Obtener el nombre del archivo desde la URL
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  collapseAll() {
    this.expandedRows = {};
  }

  onRowExpand(event: TableRowExpandEvent) {
    this.messageService.add({
      severity: 'info',
      summary: 'Proceso desplegado',
      detail: event.data.name,
      life: 3000,
    });
  }

  onRowCollapse(event: TableRowCollapseEvent) {
    this.messageService.add({
      severity: 'success',
      summary: 'Product Collapsed',
      detail: event.data.name,
      life: 3000,
    });
  }
}


















