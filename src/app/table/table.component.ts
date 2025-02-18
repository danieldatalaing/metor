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

  getBackgroundColor(url: string): string {
    const extension = this.getFileExtension(url);
    switch (extension) {
      case 'pptx':
        return '#FF0000'; // Rojo
      case 'docx':
      case 'doc':
        return '#0000FF'; // Azul
      case 'xlsx':
      case 'xls':
        return '#008000'; // Verde
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
    private sanitizer: DomSanitizer
  ) {}

  visible: boolean = false;

  visible2: boolean = false;

  visible3: boolean = false;

  showDialog(product: Product) {
    this.visible = true;
    this.product = { ...product };
    this.productDialog = true;
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
      console.log(this.procesosUnicos);
    } catch (error) {
      console.error('Error al cargar los productos:', error);
    }

    // Definir las columnas de la tabla
    this.cols = [
      { field: 'proceso_contratacion', header: 'Proceso de Contratación', width:'10px' }, //2
      { field: 'fecha_presupuesto', header: 'Fecha Presupuesto', width:'10px' }, //3
      {
        field: 'descripcion_corta_nombre_contrato',
        header: 'Descripción Corta del Nombre del Contrato',
      width:'10px' }, //4
      { field: 'nombre_contrato', header: 'Nombre del Contrato', width:'10px' }, //5
      { field: 'monto_total_cd', header: 'Monto Total CD', width:'10px' }, //6
      { field: 'partidas_totales', header: 'Partidas Totales', width:'10px' }, //7
      { field: 'capitulo', header: 'Capítulo', width:'10px' }, //8
      { field: 'no_partida', header: 'No. de Partida', width:'10px' }, //9
      { field: 'descripcion_partida', header: 'Descripción de la Partida', width:'10px' }, //10
      { field: 'unidad', header: 'Unidad', width:'10px' }, //11
      { field: 'cant', header: 'Cantidad', width:'10px' }, //12
      { field: 'precio_unitario_apu', header: 'Precio Unitario APU', width:'10px' }, //13
      { field: 'total_partida', header: 'Total Partida', width:'10px' }, //14
      { field: 'rendimiento_diario', header: 'Rendimiento Diario', width:'10px' }, //15
      { field: 'no_personas_apu', header: 'No. de Personas APU', width:'10px' }, //16
      {
        field: 'horas_trabajadas_dia_apu',
        header: 'Horas Trabajadas al Día APU',
      width:'10px' }, //17
      { field: 'porcentaje_fcas', header: '% FCAS', width:'10px' }, //18
      { field: 'porcentaje_adm', header: '% ADM', width:'10px' }, //19
      { field: 'porcentaje_utilidad', header: '% Utilidad', width:'10px' }, //20
      { field: 'duracion_partida_dias', header: 'Duración de Partida (Días)', width:'10px' }, //21
      { field: 'hh_dia_real', header: 'HH/Día Real', width:'10px' }, //22
      { field: 'hh_lapso_8hrs', header: 'HH/Lapso 8hrs', width:'10px' }, //23
      { field: 'relacion_htd_8hrs', header: 'Relación HTD/8hrs', width:'10px' }, //24
      {
        field: 'hh_lapso_horas_trabajadas',
        header: 'HH/Lapso Horas Trabajadas',
      width:'10px' }, //25
      { field: 'hh_unidad', header: 'HH/Unidad', width:'10px' }, //26
      { field: 'hh_unidad_x_cant', header: 'HH/Unidad x Cantidad', width:'10px' }, //27
      { field: 'reserva', header: 'Reserva', width:'10px' }, //28
      { field: 'costo_unitario_hh_r_r', header: 'Costo Unitario HH R/R', width:'10px' }, //29
      { field: 'productividad', header: 'Productividad', width:'10px' }, //30
      { field: 'nivel_apu_evaluacion', header: 'Nivel APU Evaluación', width:'10px' }, //31
      { field: 'observacion_sugerencia', header: 'Observación/Sugerencia', width:'10px' }, //32
      { field: 'comentarios', header: 'Comentarios', width:'10px' }, //33
      {
        field: 'clasificacion_dificulta_apu',
        header: 'Clasificación Dificultad APU',
      width:'10px' }, //34
      { field: 'ubicacion', header: 'Ubicación', width:'300px' }, //35
      { field: 'horario', header: 'Horario', width:'10px' }, //36
      { field: 'tiempo_ejecucion_dias', header: 'Tiempo de Ejecución (Días)', width:'10px' }, //37
      { field: 'fecha_contratacion', header: 'Fecha de Contratación', width:'10px' }, //38
      { field: 'antes_de_inicio_mas', header: 'Antes de Inicio Más', width:'10px' }, //39
      { field: 'revisor_interno', header: 'Revisor Interno', width:'10px' }, //40
      { field: 'revisor_externo', header: 'Revisor Externo', width:'10px' }, //41
      { field: 'nombre_empresa', header: 'Nombre de la Empresa', width:'10px' }, //42
      { field: 'rif', header: 'RIF', width:'10px' }, //43
      { field: 'representante_director', header: 'Representante/Director', width:'10px' }, //44
      {
        field: 'direccion_ciudad1_telefonos1',
        header: 'Dirección/Ciudad/Teléfonos 1',
      width:'10px' }, //45
      {
        field: 'direccion_ciudad12_telefonos2',
        header: 'Dirección/Ciudad/Teléfonos 2',
      width:'10px' }, //46
      { field: 'email', header: 'Email', width:'10px' }, //47
    ];

    // Definir las columnas seleccionadas
    this.selectedColumns = [
      { field: 'proceso_contratacion', header: 'Proceso de Contratación', width:'200px' }, //2
      { field: 'fecha_presupuesto', header: 'Fecha Presupuesto', width:'10px' }, //3
      {
        field: 'descripcion_corta_nombre_contrato',
        header: 'Descripción Corta del Nombre del Contrato',
      width:'300px' }, //4
      { field: 'nombre_contrato', header: 'Nombre del Contrato', width:'300px' }, //5
      { field: 'monto_total_cd', header: 'Monto Total CD', width:'10px' }, //6
      { field: 'partidas_totales', header: 'Partidas Totales', width:'10px' }, //7
      { field: 'capitulo', header: 'Capítulo', width:'200px' }, //8
      { field: 'no_partida', header: 'No. de Partida', width:'10px' }, //9
      { field: 'descripcion_partida', header: 'Descripción de la Partida', width:'300px' }, //10
      { field: 'unidad', header: 'Unidad', width:'10px' }, //11
      { field: 'cant', header: 'Cantidad', width:'10px' }, //12
      { field: 'precio_unitario_apu', header: 'Precio Unitario APU', width:'10px' }, //13
      { field: 'total_partida', header: 'Total Partida', width:'10px' }, //14
    ];

    // Opciones responsivas
    this.responsiveOptions = [
      {
        breakpoint: '1400px',
        numVisible: 2,
        numScroll: 1
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


