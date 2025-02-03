import { Component, OnInit, ViewChild } from '@angular/core';
import { TableModule, Table } from 'primeng/table';
//import { Product } from '@/domain/product';
import { Tag } from 'primeng/tag';
import { Rating } from 'primeng/rating';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { Product, ProductService } from '../../service/product.service';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { TableRowCollapseEvent, TableRowExpandEvent } from 'primeng/table';
import { SpeedDial } from 'primeng/speeddial';
import { MultiSelectModule } from 'primeng/multiselect';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { AppTopbar } from '../layout/component/app.topbar';
import { FormsModule } from '@angular/forms';
import { Dialog } from 'primeng/dialog';


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
    SpeedDial,
    MultiSelectModule,
    InputIconModule,
    IconFieldModule,
    AppTopbar,
    FormsModule,
    Dialog,
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
  providers: [ProductService, MessageService],
})
export class TableComponent implements OnInit {
  products!: Product[];
  // ... en tu componente

  filteredProducts: any[] = []; // O el tipo específico de tus orders
  productosFiltrados: Product[] = [];

  expandedRows = {};

  @ViewChild('dt') dt!: Table;

  cols!: Column[];

  product!: Product;

  productDialog: boolean = false;

  selectedColumns!: Column[];

  constructor(
    private productService: ProductService,
    private messageService: MessageService
  ) {}

  visible: boolean = false;

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
  }

  filtrarProductos(procesoContratacionDeseado: Product) {
    // console.log(procesoContratacionDeseado.proceso_contratacion);

    let producto = this.productService.getProductsData() as Product[];

    // console.log(this.productService);
    const filteredProducts = producto.filter(
      (product) =>
        product.proceso_contratacion ===
        procesoContratacionDeseado.proceso_contratacion
    );

    this.filteredProducts = filteredProducts;

    console.log(filteredProducts);
    return filteredProducts;
  }

  archivo(procesoContratacionDeseado: Product) {
    console.log(procesoContratacionDeseado);
  }

  // expandAll() {
  //   this.expandedRows = this.products.reduce(
  //     (acc, p) => (acc[p.id] = true) && acc,
  //     {}
  //   );
  // }

  collapseAll() {
    this.expandedRows = {};
  }

  // getSeverity(status: string) {
  //   switch (status) {
  //     case 'INSTOCK':
  //       return 'success';
  //     case 'LOWSTOCK':
  //       return 'warn';
  //     case 'OUTOFSTOCK':
  //       return 'danger';
  //   }
  // }

  // getStatusSeverity(status: string) {
  //   switch (status) {
  //     case 'PENDING':
  //       return 'warn';
  //     case 'DELIVERED':
  //       return 'success';
  //     case 'CANCELLED':
  //       return 'danger';
  //   }
  // }

  onRowExpand(event: TableRowExpandEvent) {
    this.messageService.add({
      severity: 'info',
      summary: 'Product Expanded',
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
