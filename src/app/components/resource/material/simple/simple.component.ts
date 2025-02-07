import { Component, OnInit, signal, ViewChild } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { Table, TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { RatingModule } from 'primeng/rating';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputNumberModule } from 'primeng/inputnumber';
import { Dialog, DialogModule } from 'primeng/dialog';
import { TagModule } from 'primeng/tag';
import { InputIconModule } from 'primeng/inputicon';
import { IconFieldModule } from 'primeng/iconfield';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
//import { Product, ProductService } from '../../../../../../../MaPreX Web Front-End/MaPreX-Front/src/app/service/product.service';
import { SplitterModule } from 'primeng/splitter';
import { MultiSelectModule } from 'primeng/multiselect';
import { Product, ProductService } from '../../../../../service/product.service';
import { AppTopbar } from '../../../../layout/component/app.topbar';


interface Column {
  field: string;
  header: string;
  customExportHeader?: string;
}

interface ExportColumn {
  title: string;
  dataKey: string;
}

@Component({
  selector: 'app-simple',
  imports: [
    CommonModule,
    TableModule,
    FormsModule,
    ButtonModule,
    RippleModule,
    ToastModule,
    ToolbarModule,
    RatingModule,
    InputTextModule,
    TextareaModule,
    RadioButtonModule,
    InputNumberModule,
    DialogModule,
    TagModule,
    InputIconModule,
    IconFieldModule,
    ConfirmDialogModule,
    SplitterModule,
    MultiSelectModule,
    AppTopbar,
    //Dialog,
  ],
  templateUrl: './simple.component.html',
  styleUrl: './simple.component.scss',
  providers: [MessageService, ProductService, ConfirmationService],
})
export class SimpleComponent implements OnInit {
  productDialog: boolean = false;

  products = signal<Product[]>([]);

  product!: Product;

  selectedProducts!: Product[] | null;

  submitted: boolean = false;

  statuses!: any[];

  @ViewChild('dt') dt!: Table;

  exportColumns!: ExportColumn[];

  cols!: Column[];

  selectedColumns!: Column[];

  visible: boolean = false;

  showDialog() {
    this.visible = true;
  }

  constructor(
    // private productService: ProductService,
    private productService: ProductService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  exportCSV() {
    this.dt.exportCSV();
  }

  loadDemoData() {
    this.productService.getProducts().then((data) => {
      this.products.set(data);
    });

    this.statuses = [
      { label: 'INSTOCK', value: 'instock' },
      { label: 'LOWSTOCK', value: 'lowstock' },
      { label: 'OUTOFSTOCK', value: 'outofstock' },
    ];

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

    // this.selectedColumns = [
    //   { field: 'proceso_contratacion', header: 'Proceso de Contratación' },
    //   {
    //     field: 'descripcion_corta_nombre_contrato',
    //     header: 'Descripcion del Nombre Contrato',
    //   },
    //   { field: 'fecha_presupuesto', header: 'Fecha Presupuesto' },
    //   { field: 'fecha_contratacion', header: 'Fecha Contratación' },
    //   { field: 'no_partida', header: 'No. de la Partida' },
    //   { field: 'descripcion_partida', header: 'Descripción de la Partida' },
    // ];

     this.selectedColumns = this.cols;

    this.exportColumns = this.cols.map((col) => ({
      title: col.header,
      dataKey: col.field,
    }));
  }

  ngOnInit() {
    this.loadDemoData();
  }

  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  openNew() {
    this.product = {};
    this.submitted = false;
    this.productDialog = true;
  }

  editProduct(product: Product) {
    this.product = { ...product };
    this.productDialog = true;
  }

  deleteSelectedProducts() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected products?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.products.set(
          this.products().filter((val) => !this.selectedProducts?.includes(val))
        );
        this.selectedProducts = null;
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Products Deleted',
          life: 3000,
        });
      },
    });
  }

  hideDialog() {
    this.productDialog = false;
    this.submitted = false;
  }

  deleteProduct(product: Product) {
    this.confirmationService.confirm({
      message:
        'Are you sure you want to delete ' + product.proceso_contratacion + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.products.set(
          this.products().filter((val) => val.id !== product.id)
        );
        this.product = {};
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Product Deleted',
          life: 3000,
        });
      },
    });
  }

  findIndexById(id: number): number {
    let index = -1;
    for (let i = 0; i < this.products().length; i++) {
      if (this.products()[i].id === id) {
        index = i;
        break;
      }
    }

    return index;
  }

  createId(): string {
    let id = '';
    var chars =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < 5; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
  }

  getSeverity(status: string) {
    switch (status) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warn';
      case 'OUTOFSTOCK':
        return 'danger';
      default:
        return 'info';
    }
  }

  // saveProduct() {
  //   this.submitted = true;
  //   let _products = this.products();
  //   if (this.product.proceso_contratacion?.trim()) {
  //     if (this.product.id) {
  //       _products[this.findIndexById(this.product.id)] = this.product;
  //       this.products.set([..._products]);
  //       this.messageService.add({
  //         severity: 'success',
  //         summary: 'Successful',
  //         detail: 'Product Updated',
  //         life: 3000,
  //       });
  //     } else {
  //       this.product.id = this.createId();
  //       this.product.proceso_contratacion = 'product-placeholder.svg';
  //       this.messageService.add({
  //         severity: 'success',
  //         summary: 'Successful',
  //         detail: 'Product Created',
  //         life: 3000,
  //       });
  //       this.products.set([..._products, this.product]);
  //     }

  //     this.productDialog = false;
  //     this.product = {};
  //   }
  // }
}
