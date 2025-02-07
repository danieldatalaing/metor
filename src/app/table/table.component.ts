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
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
  providers: [ProductService, MessageService],
})
export class TableComponent implements OnInit {
  urlsSeguras: SafeUrl[] = [];
  products!: Product[];
  pdfs: { nombre: string; url: SafeResourceUrl }[] = []; // Para PDFs
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

  ngOnInit() {
    this.productService
      .getProductsWithOrdersSmall()
      .then((data) => (this.products = data));

    this.cols = [
      { field: 'proceso_contratacion', header: 'Proceso de Contratación' },
      {
        field: 'descripcion_corta_nombre_contrato',
        header: 'Descripcion del Nombre Contrato',
      },
      { field: 'fecha_presupuesto', header: 'Fecha Presupuesto' },
      { field: 'fecha_contratacion', header: 'Fecha Contratación' },
      { field: 'partidas_totales', header: 'Partidas Totales' },
      { field: 'monto_total_cd', header: 'Monto Total' },
      { field: 'tiempo_ejecucion_dias', header: 'Tiempo de Ejecución.' },
      { field: 'antes_de_inicio_mas', header: 'Antes de Inicio' },
      { field: 'horario', header: 'Horario' },
      { field: 'ubicacion', header: 'Ubicación' },
      { field: 'nombre_contrato', header: 'Nombre del Contrato' },
      { field: 'capitulo', header: 'Capitulo' },
      { field: 'no_partida', header: 'No. de la Partida' },
      { field: 'descripcion_partida', header: 'Descripción de la Partida' },
      { field: 'unidad', header: 'Unidad' },
      { field: 'cant', header: 'Cant' },
      { field: 'precio_unitario_apu', header: 'Precio Unit APU' },
      { field: 'total_partida', header: 'Total Partida' },
      { field: 'rendimiento_diario', header: 'Rendimiento Diario' },
      { field: 'duracion_partida_dias', header: 'Duración de Partida' },
      { field: 'no_personas_apu', header: 'No de Personas al Día en APU' },
      {
        field: 'horas_trabajadas_dia_apu',
        header: 'Horas Trabajadas al dia en APU',
      },
      { field: 'hh_dia_real', header: 'HH/dia (REAL)' },
      { field: 'hh_lapso_8hrs', header: 'HH/Lapso' },
      { field: 'relacion_htd_8hrs', header: 'Relacion HTD/8hrs' },
      { field: 'hh_lapso_horas_trabajadas', header: 'HH/Lapso' },
      { field: 'hh_unidad', header: 'HH/UND' },
      { field: 'hh_unidad_x_cant', header: 'HH UNIT X CANT' },
      { field: 'reserva', header: 'RESERVA' },
      { field: 'costo_unitario_hh_r_r', header: 'Costo Unitario $' },
      { field: 'porcentaje_fcas', header: '%FCAS' },
      { field: 'porcentaje_adm', header: '%ADM' },
      { field: 'porcentaje_utilidad', header: '%Utilidad' },
      { field: 'productividad', header: 'Productividad' },
      { field: 'nivel_apu_evaluacion', header: 'Nivel APU (E-2)' },
      { field: 'observacion_sugerencia', header: 'Observación/Sugerencia' },
      { field: 'comentarios', header: 'Comentarios' },
      { field: 'columna_especial', header: 'Columnas Especial' },
      { field: 'revisor_interno', header: 'Revisor Interno' },
      { field: 'revisor_externo', header: 'Revisor Externo' },
      { field: 'nombre_empresa', header: 'Nombre de la Empresa' },
      { field: 'rif', header: 'RIF' },
      { field: 'representante_director', header: 'Representante/Director' },
      {
        field: 'direccion_ciudad1_telefonos1',
        header: 'DIRECCI./CIUDAD/TLF 1',
      },
      {
        field: 'direccion_ciudad12_telefonos2',
        header: 'DIRECCI./CIUDAD/TLF 2',
      },
      { field: 'email', header: 'Email' },
    ];

    this.selectedColumns = [
      { field: 'proceso_contratacion', header: 'Proceso de Contratación' },
      {
        field: 'descripcion_corta_nombre_contrato',
        header: 'Descripcion del Nombre Contrato',
      },
      { field: 'fecha_presupuesto', header: 'Fecha Presupuesto' },
      { field: 'fecha_contratacion', header: 'Fecha Contratación' },
      { field: 'partidas_totales', header: 'Partidas Totales' },
      { field: 'monto_total_cd', header: 'Monto Total' },
      { field: 'tiempo_ejecucion_dias', header: 'Tiempo de Ejecución.' },
      { field: 'antes_de_inicio_mas', header: 'Antes de Inicio' },
      { field: 'horario', header: 'Horario' },
      { field: 'ubicacion', header: 'Ubicación' },
    ];

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

  filtrarProductos(procesoContratacionDeseado: Product) {
    let producto = this.productService.getProductsData() as Product[];

    let procesosinespacio = procesoContratacionDeseado.proceso_contratacion?.trim();

    this.informacion = procesoContratacionDeseado;

    const filteredProducts = producto.filter(
      (product) => product.proceso_contratacion?.trim() === procesosinespacio
    );

    this.filteredProducts = filteredProducts;

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
      console.log('Carpeta encontrada: ' + carpeta.nombre);
      this.visible2 = true;
      this.productDialog = true;
      this.pdfs = []; // Reiniciar arreglo de PDFs
      this.archivosDescargables = []; // Reiniciar arreglo de archivos descargables

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
            } else if (
              this.esExcel(archivo.nombre) ||
              this.esWord(archivo.nombre)
            ) {
              // Si es un archivo de Excel o Word, almacenar la URL para descargar
              this.archivosDescargables.push({
                nombre: archivo.nombre,
                url: rutaCompleta,
              });
            }
          } else {
            this.visible3 = true;
            console.error(`No se pudo obtener la ruta para ${archivo.nombre}`);
          }
        })
      )
        .then(() => {
          console.log('PDFs para mostrar:', this.pdfs);
          console.log('Archivos para descargar:', this.archivosDescargables);
        })
        .catch((error) => {
          console.error('Error al obtener las URLs:', error);
        });
    } else {
      this.visible3 = true;
      console.error(`No se encontró el proceso ${proceso}`);
    }
  }

  // Método para verificar si un archivo es PDF
  esPDF(nombreArchivo: string): boolean {
    return nombreArchivo.toLowerCase().endsWith('.pdf');
  }

  // Método para verificar si un archivo es Excel
  esExcel(nombreArchivo: string): boolean {
    return (
      nombreArchivo.toLowerCase().endsWith('.xlsx') ||
      nombreArchivo.toLowerCase().endsWith('.xls')
    );
  }

  // Método para verificar si un archivo es Word
  esWord(nombreArchivo: string): boolean {
    return (
      nombreArchivo.toLowerCase().endsWith('.docx') ||
      nombreArchivo.toLowerCase().endsWith('.doc')
    );
  }
  async obtenerRutaCompleta(
    nombreCarpeta: string,
    nombreArchivo: string
  ): Promise<string | null> {
    const urlBase = 'http://localhost:4200/files/'; // Reemplaza con tu URL base
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


