import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface InventoryStatus {
    label: string;
    value: string;
}

export interface Equipment {

    reference?: string;
    updateDate?: string;
    description?: string;
    price?: number;
    depreciationCOP?: number;
    dayValue?: number;
    addedValue?: number;
    group?: string;
    dollarPrice?: number;
    urlImage?: string;
    idEquipment?: number;
    idEquipmentZone?: number;
    proveedor?: string;
    supplierName?: string;
}

@Injectable()
export class equipmentService {
    getequipmentsData() {
        return [
            {
                reference: "ALB000",
                updateDate: "Jan 6, 2025, 12:00:00 AM",
                description: "EQUIPO PARA TABIQUERIA / CIELO RASO/ DRY WALL",
                price: 1200,
                depreciationCOP: 1,
                dayValue: 1200,
                addedValue: 1200,
                group: "ALB/ALBAÑILERIA, HERRAM-EQUIP. MEN",
                dollarPrice: 20,
                urlImage: "//datalaing.net/img/BdatosImagenes/Equipos/INSTALAR DRY WALL.jpg",
                idEquipment: 13616,
                idEquipmentZone: 13616
            },
            {
                reference: "ALB001",
                updateDate: "Jan 6, 2025, 12:00:00 AM",
                description: "CARRETON 150 LT TIPO BUGGY P/ACARREO",
                price: 3000,
                depreciationCOP: 1,
                dayValue: 3000,
                addedValue: 3000,
                group: "ALB/ALBAÑILERIA MAQUINARIA MENOR",
                "supplierName": "DM Y ESTRUCTURAS C.A. (Andamios)",
                dollarPrice: 50,
                urlImage: "//datalaing.net/img/BdatosImagenes/Equipos/carreton.jpg",
                idEquipment: 13617,
                idEquipmentZone: 13617
            },
            {
                reference: "ALB002",
                updateDate: "Jan 6, 2025, 12:00:00 AM",
                description: "CARRETILLA CAP= 55 LT CAUCHOS DE GOMA",
                price: 10200,
                depreciationCOP: 0.025,
                dayValue: 255,
                addedValue: 255,
                group: "ALB/ALBAÑILERIA, HERRAM-EQUIP. MEN",
                dollarPrice: 170,
                urlImage: "//datalaing.net/img/BdatosImagenes/Equipos/CARRETILLA 2.jpg",
                idEquipment: 13618,
                idEquipmentZone: 13618
            },
            {
                reference: "ALB003",
                updateDate: "Jan 6, 2025, 12:00:00 AM",
                description: "CARRETILLA CAP= 110 LT RUEDAS DE GOMA",
                price: 20400,
                depreciationCOP: 0.02,
                dayValue: 408,
                addedValue: 408,
                group: "ALB/ALBAÑILERIA MAQUINARIA MENOR",
                dollarPrice: 340,
                urlImage: "//datalaing.net/img/BdatosImagenes/Equipos/CARRETILLA 1.jpg",
                idEquipment: 13619,
                idEquipmentZone: 13619
            },
            {
                reference: "ALB004",
                updateDate: "Jan 6, 2025, 12:00:00 AM",
                description: "HERRAMIENTAS MENORES",
                price: 4020,
                depreciationCOP: 0.006,
                dayValue: 24.12,
                addedValue: 24.12,
                group: "ALB/ALBAÑILERIA, HERRAM-EQUIP. MEN",
                dollarPrice: 67,
                urlImage: "//datalaing.net/img/BdatosImagenes/Equipos/llaves var.jpg",
                idEquipment: 13620,
                idEquipmentZone: 13620
            },
            {
                reference: "ALB005",
                updateDate: "Jan 6, 2025, 12:00:00 AM",
                description: "CARRETON P/VACIADO DE CONCRETO TIPO BUGGY",
                price: 60000,
                depreciationCOP: 0.025,
                dayValue: 1500,
                addedValue: 1500,
                group: "ALB/ALBAÑILERIA, HERRAM-EQUIP. MEN",
                dollarPrice: 1000,
                urlImage: "//datalaing.net/img/BdatosImagenes/Equipos/carreton.jpg",
                idEquipment: 13621,
                idEquipmentZone: 13621
            },
            {
                reference: "ALB006",
                updateDate: "Jan 6, 2025, 12:00:00 AM",
                description: "CUBETA/ENCOFRADO PLASTICO P/LOSA RETICULAR",
                price: 42,
                depreciationCOP: 1,
                dayValue: 42,
                addedValue: 42,
                group: "ALB/ALBAÑILERIA, HERRAM-EQUIP. MEN",
                dollarPrice: 0.7,
                urlImage: "//datalaing.net/img/BdatosImagenes/Equipos/FORMALETAS LOSAS1.jpg",
                idEquipment: 13622,
                idEquipmentZone: 13622
            },
            {
                reference: "ALB007",
                updateDate: "Jan 6, 2025, 12:00:00 AM",
                description: "EQUIPO PARA COLOCACION DE CERAMICA",
                price: 300,
                depreciationCOP: 1,
                dayValue: 300,
                addedValue: 300,
                group: "ALB/ALBAÑILERIA, HERRAM-EQUIP. MEN",
                dollarPrice: 5,
                urlImage: "//datalaing.net/img/BdatosImagenes/Equipos/Herramientas0165.jpg",
                idEquipment: 13623,
                idEquipmentZone: 13623
            },
            {
                reference: "ALB008",
                updateDate: "Jan 6, 2025, 12:00:00 AM",
                description: "EQUIPO BASICO PARA PUESTA EN OBRA DE CONCRETO",
                price: 300,
                depreciationCOP: 1,
                dayValue: 300,
                addedValue: 300,
                group: "CON/CONCRETO / CABILLA",
                dollarPrice: 5,
                urlImage: "//datalaing.net/img/BdatosImagenes/Equipos/herramientas basicas vaciado.jpg",
                idEquipment: 13624,
                idEquipmentZone: 13624
            },
            {
                reference: "ALB009",
                updateDate: "Jan 6, 2025, 12:00:00 AM",
                description: "EQUIPO PULIDO GRANITO",
                price: 210000,
                depreciationCOP: 0.009,
                dayValue: 1890,
                addedValue: 1890,
                group: "ALB/ALBAÑILERIA MAQUINARIA MENOR",
                dollarPrice: 3500,
                urlImage: "//datalaing.net/img/BdatosImagenes/Equipos/granitera achillie88.jpg",
                idEquipment: 13625,
                idEquipmentZone: 13625
            },
            {
                reference: "ALB010",
                updateDate: "Jan 6, 2025, 12:00:00 AM",
                description: "EQUIPOS VARIOS DE ALBAÑILERIA",
                price: 1200,
                depreciationCOP: 1,
                dayValue: 1200,
                addedValue: 1200,
                group: "ALB/ALBAÑILERIA, HERRAM-EQUIP. MEN",
                dollarPrice: 20,
                urlImage: "//datalaing.net/img/BdatosImagenes/Equipos/Herramientas0033.jpg",
                idEquipment: 13626,
                idEquipmentZone: 13626
            },
            {
                reference: "ALB011",
                updateDate: "Jan 6, 2025, 12:00:00 AM",
                description: "ESPATULA DE 6 CM CON MANGO",
                price: 600,
                depreciationCOP: 0.05,
                dayValue: 30,
                addedValue: 30,
                group: "ALB/ALBAÑILERIA, HERRAM-EQUIP. MEN",
                "supplierName": "EPA SUPERFERRETERIA",
                dollarPrice: 10,
                urlImage: "//datalaing.net/img/BdatosImagenes/Equipos/espatula3.jpg",
                idEquipment: 13627,
                idEquipmentZone: 13627
            },
            {
                reference: "ALB012",
                updateDate: "Jan 6, 2025, 12:00:00 AM",
                description: "HERRAMIENTAS PARA CUADRILLA OBRAS CIVILES",
                price: 14760,
                depreciationCOP: 0.012,
                dayValue: 177.12,
                addedValue: 177.12,
                group: "ALB/ALBAÑILERIA, HERRAM-EQUIP. MEN",
                dollarPrice: 246,
                urlImage: "//datalaing.net/img/BdatosImagenes/Equipos/Herramientas0033.jpg",
                idEquipment: 13628,
                idEquipmentZone: 13628
            },
            {
                reference: "ALB013",
                updateDate: "Jan 6, 2025, 12:00:00 AM",
                description: "JUEGO DE PALA, PICO Y CARRETILLA",
                price: 720,
                depreciationCOP: 1,
                dayValue: 720,
                addedValue: 720,
                group: "ALB/ALBAÑILERIA, HERRAM-EQUIP. MEN",
                dollarPrice: 12,
                urlImage: "//datalaing.net/img/BdatosImagenes/Equipos/ARENA CARRETILLA.jpg",
                idEquipment: 13629,
                idEquipmentZone: 13629
            },
            {
                reference: "ALB014",
                updateDate: "Jan 6, 2025, 12:00:00 AM",
                description: "MANGUERA DE DESCARGA X 10 MTS",
                price: 24900,
                depreciationCOP: 0.01,
                dayValue: 249,
                addedValue: 249,
                group: "BOM/BOMBEO, ACHICAMIENTO, TANQUES",
                dollarPrice: 415,
                urlImage: "//datalaing.net/img/BdatosImagenes/Equipos/manguera BOMBA.jpg",
                idEquipment: 13630,
                idEquipmentZone: 13630
            },
            {
                reference: "ALB015",
                updateDate: "Jan 6, 2025, 12:00:00 AM",
                description: "MANGUERA (SUCCION) DIAM= 2\". L= 15 M",
                price: 30000,
                depreciationCOP: 0.005,
                dayValue: 150,
                addedValue: 150,
                group: "BOM/BOMBEO, ACHICAMIENTO, TANQUES",
                dollarPrice: 500,
                urlImage: "//datalaing.net/img/BdatosImagenes/Equipos/MANGUERA SUCCION.jpg",
                idEquipment: 13631,
                idEquipmentZone: 13631
            },
            {
                reference: "ALB016",
                updateDate: "Jan 6, 2025, 12:00:00 AM",
                description: "MANGUERA PLASTICA TIPO CULEBRA D=1/2\" L=100 MT",
                price: 10200,
                depreciationCOP: 0.01,
                dayValue: 102,
                addedValue: 102,
                group: "BOM/BOMBEO, ACHICAMIENTO, TANQUES",
                dollarPrice: 170,
                urlImage: "//datalaing.net/img/BdatosImagenes/Equipos/manguera AGUA33.jpg",
                idEquipment: 13632,
                idEquipmentZone: 13632
            },
            {
                reference: "ALB017",
                updateDate: "Jan 6, 2025, 12:00:00 AM",
                description: "MAQUINA PULIDORA DE GRANITO",
                price: 3300,
                depreciationCOP: 1,
                dayValue: 3300,
                addedValue: 3300,
                group: "ALB/ALBAÑILERIA MAQUINARIA MENOR",
                dollarPrice: 55,
                urlImage: "//datalaing.net/img/BdatosImagenes/Equipos/granitera achilli1.jpg",
                idEquipment: 13633,
                idEquipmentZone: 13633
            },
            {
                reference: "ALB018",
                updateDate: "Jan 6, 2025, 12:00:00 AM",
                description: "SET DE HERRAMIENTAS P/PISO LAMINADO MDF",
                price: 2400,
                depreciationCOP: 0.015,
                dayValue: 36,
                addedValue: 36,
                group: "ALB/ALBAÑILERIA, HERRAM-EQUIP. MEN",
                dollarPrice: 40,
                urlImage: "//datalaing.net/img/BdatosImagenes/Equipos/EQUIPO BASICO CARPINTERIA.jpg",
                idEquipment: 13634,
                idEquipmentZone: 13634
            },
            {
                reference: "ALB019",
                updateDate: "Jan 6, 2025, 12:00:00 AM",
                description: "TALADRO ELECTRICO",
                price: 360,
                depreciationCOP: 1,
                dayValue: 360,
                addedValue: 360,
                group: "ELE/ELECTRICIDAD, MECANICAS",
                dollarPrice: 6,
                urlImage: "//datalaing.net/img/BdatosImagenes/Equipos/taladro elec.jpg",
                idEquipment: 13635,
                idEquipmentZone: 13635
            },
            {
                reference: "ALB020",
                updateDate: "Jan 6, 2025, 12:00:00 AM",
                description: "EQUIPOS: TALADRO, TESTER Y MEDICION ELECT.",
                price: 24000,
                depreciationCOP: 0.003,
                dayValue: 240,
                addedValue: 240,
                group: "ELE/ELECTRICIDAD, MECANICAS",
                dollarPrice: 400,
                urlImage: "//datalaing.net/img/BdatosImagenes/Equipos/taladro ryobi 2.jpg",
                idEquipment: 13636,
                idEquipmentZone: 13636
            },
            {
                reference: "ALB021",
                updateDate: "Jan 6, 2025, 12:00:00 AM",
                description: "CUCHARA NACIONAL PARA ALBAÑIL",
                price: 618,
                depreciationCOP: 0.02,
                dayValue: 12.36,
                addedValue: 12.36,
                group: "ALB/ALBAÑILERIA, HERRAM-EQUIP. MEN",
                dollarPrice: 10.3,
                urlImage: "//datalaing.net/img/BdatosImagenes/Equipos/cuchara cuadrad.jpg",
                idEquipment: 13637,
                idEquipmentZone: 13637
            },
            {
                reference: "ALB022",
                updateDate: "Jan 6, 2025, 12:00:00 AM",
                description: "CUCHARA PLANA PARA ALBAÑILERIA",
                price: 1080,
                depreciationCOP: 0.01,
                dayValue: 10.8,
                addedValue: 10.8,
                group: "ALB/ALBAÑILERIA, HERRAM-EQUIP. MEN",
                dollarPrice: 18,
                urlImage: "//datalaing.net/img/BdatosImagenes/Equipos/cuchara cuadrad.jpg",
                idEquipment: 13638,
                idEquipmentZone: 13638
            },
            {
                reference: "ALB023",
                updateDate: "Jan 6, 2025, 12:00:00 AM",
                description: "SALPICADORA RIGO",
                price: 120,
                depreciationCOP: 1,
                dayValue: 120,
                addedValue: 120,
                group: "ALB/ALBAÑILERIA, HERRAM-EQUIP. MEN",
                dollarPrice: 2,
                urlImage: "//datalaing.net/img/BdatosImagenes/Equipos/salpicador.jpg",
                idEquipment: 13639,
                idEquipmentZone: 13639
            },
            {
                reference: "ALB024",
                updateDate: "Jan 6, 2025, 12:00:00 AM",
                description: "NIVEL DE 3 BURBUJAS Y 18\"",
                price: 2640,
                depreciationCOP: 0.011,
                dayValue: 29.04,
                addedValue: 29.04,
                group: "ALB/ALBAÑILERIA, HERRAM-EQUIP. MEN",
                dollarPrice: 44,
                urlImage: "//datalaing.net/img/BdatosImagenes/Equipos/NIVEL18.jpg",
                idEquipment: 13640,
                idEquipmentZone: 13640
            },
            {
                reference: "ALB025",
                updateDate: "Jan 6, 2025, 12:00:00 AM",
                description: "CEPILLO DE ALBAÑIL PARA FRISAR DE 6\"",
                price: 900,
                depreciationCOP: 0.04,
                dayValue: 36,
                addedValue: 36,
                group: "ALB/ALBAÑILERIA MAQUINARIA MENOR",
                dollarPrice: 15,
                urlImage: "//datalaing.net/img/BdatosImagenes/Equipos/cepillo esponja.jpg",
                idEquipment: 13641,
                idEquipmentZone: 13641
            },
            {
                reference: "ALB026",
                updateDate: "Jan 6, 2025, 12:00:00 AM",
                description: "TOBO PLASTICO DE ALBAÑIL/ACARREO/EXC",
                price: 744,
                depreciationCOP: 0.067,
                dayValue: 49.85,
                addedValue: 49.85,
                group: "ALB/ALBAÑILERIA, HERRAM-EQUIP. MEN",
                dollarPrice: 12.4,
                urlImage: "//datalaing.net/img/BdatosImagenes/Equipos/TOBO ALBAÑIL.jpg",
                idEquipment: 13642,
                idEquipmentZone: 13642
            },
            {
                reference: "ALB027",
                updateDate: "Jan 6, 2025, 12:00:00 AM",
                description: "PALA NACIONAL CON CABO DE MADERA",
                price: 1620,
                depreciationCOP: 0.034,
                dayValue: 55.08,
                addedValue: 55.08,
                group: "ALB/ALBAÑILERIA, HERRAM-EQUIP. MEN",
                "supplierName": "ARFESA ARAGUA FERRETERA S.A.",
                dollarPrice: 27,
                urlImage: "//datalaing.net/img/BdatosImagenes/Equipos/pala cuadrada.jpg",
                idEquipment: 13643,
                idEquipmentZone: 13643
            },
            {
                reference: "ALB028",
                updateDate: "Jan 6, 2025, 12:00:00 AM",
                description: "EQUIPO PARA PULIR GRANITO",
                price: 180000,
                depreciationCOP: 0.009,
                dayValue: 1620,
                addedValue: 1620,
                group: "ALB/ALBAÑILERIA MAQUINARIA MENOR",
                dollarPrice: 3000,
                urlImage: "//datalaing.net/img/BdatosImagenes/Equipos/granitera achilli1.jpg",
                idEquipment: 13644,
                idEquipmentZone: 13644
            },
            {
                reference: "ALB029",
                updateDate: "Jan 6, 2025, 12:00:00 AM",
                description: "EQUIPO PARA GRANITO",
                price: 900,
                depreciationCOP: 1,
                dayValue: 900,
                addedValue: 900,
                group: "ALB/ALBAÑILERIA MAQUINARIA MENOR",
                dollarPrice: 15,
                urlImage: "//datalaing.net/img/BdatosImagenes/Equipos/granitera achillie88.jpg",
                idEquipment: 13645,
                idEquipmentZone: 13645
            },
            {
                reference: "ALB030",
                updateDate: "Jan 6, 2025, 12:00:00 AM",
                description: "EQUIPO MENOR",
                price: 300,
                depreciationCOP: 1,
                dayValue: 300,
                addedValue: 300,
                group: "ALB/ALBAÑILERIA, HERRAM-EQUIP. MEN",
                dollarPrice: 5,
                urlImage: "//datalaing.net/img/BdatosImagenes/Equipos/Herramientas0033.jpg",
                idEquipment: 13646,
                idEquipmentZone: 13646
            },
            {
                reference: "ALB031",
                updateDate: "Jan 6, 2025, 12:00:00 AM",
                description: "MANGUERA PLASTICA DE DESCARGA DE 2 PULG",
                price: 7200,
                depreciationCOP: 0.05,
                dayValue: 360,
                addedValue: 360,
                group: "BOM/BOMBEO, ACHICAMIENTO, TANQUES",
                dollarPrice: 120,
                urlImage: "//datalaing.net/img/BdatosImagenes/Equipos/manguera BOMBA.jpg",
                idEquipment: 13647,
                idEquipmentZone: 13647
            },
            {
                reference: "ALB032",
                updateDate: "Jan 6, 2025, 12:00:00 AM",
                description: "MAQUINA LIVIANA DESBASTADORA DE GRANITO",
                price: 21000,
                depreciationCOP: 0.0028,
                dayValue: 58.8,
                addedValue: 58.8,
                group: "ALB/ALBAÑILERIA, HERRAM-EQUIP. MEN",
                dollarPrice: 350,
                urlImage: "//datalaing.net/img/BdatosImagenes/Equipos/DEBASTADORA MANUAL GRANITO MARMOL.jpg",
                idEquipment: 13648,
                idEquipmentZone: 13648
            },
            {
                reference: "ALB033",
                updateDate: "Jan 6, 2025, 12:00:00 AM",
                description: "MAQUINA MANUAL DESBASTADORA DE GRANITO",
                price: 16800,
                depreciationCOP: 0.0028,
                dayValue: 47.04,
                addedValue: 47.04,
                group: "ALB/ALBAÑILERIA, HERRAM-EQUIP. MEN",
                dollarPrice: 280,
                urlImage: "//datalaing.net/img/BdatosImagenes/Equipos/PULIDORA MANUAL GRANITO MARMOL.jpg",
                idEquipment: 13649,
                idEquipmentZone: 13649
            },
            {
                reference: "ALB034",
                updateDate: "Jan 6, 2025, 12:00:00 AM",
                description: "ESPATULA CON MANGO HOJA CON ANCHO=10\"",
                price: 840,
                depreciationCOP: 0.04,
                dayValue: 33.6,
                addedValue: 33.6,
                group: "ALB/ALBAÑILERIA MAQUINARIA MENOR",
                dollarPrice: 14,
                urlImage: "//datalaing.net/img/BdatosImagenes/Equipos/espatula masillar.jpg",
                idEquipment: 13650,
                idEquipmentZone: 13650
            },
            {
                reference: "ALB035",
                updateDate: "Jan 6, 2025, 12:00:00 AM",
                description: "ESPATULA",
                price: 360,
                depreciationCOP: 0.04,
                dayValue: 14.4,
                addedValue: 14.4,
                group: "ALB/ALBAÑILERIA MAQUINARIA MENOR",
                dollarPrice: 6,
                urlImage: "//datalaing.net/img/BdatosImagenes/Equipos/espatula3.jpg",
                idEquipment: 13651,
                idEquipmentZone: 13651
            },
            {
                reference: "ALB036",
                updateDate: "Jan 6, 2025, 12:00:00 AM",
                description: "ESPATULA LLANA DOBLE P/ENCAMISADO L=30 CM",
                price: 660,
                depreciationCOP: 0.03,
                dayValue: 19.8,
                addedValue: 19.8,
                group: "ALB/ALBAÑILERIA MAQUINARIA MENOR",
                "supplierName": "EPA SUPERFERRETERIA",
                dollarPrice: 11,
                urlImage: "//datalaing.net/img/BdatosImagenes/Equipos/llanas11.jpg",
                idEquipment: 13652,
                idEquipmentZone: 13652
            },
            {
                reference: "ALB037",
                updateDate: "Jan 6, 2025, 12:00:00 AM",
                description: "EQUIPOS MENORES DE ALBAÑILERIA",
                price: 900,
                depreciationCOP: 1,
                dayValue: 900,
                addedValue: 900,
                group: "ALB/ALBAÑILERIA MAQUINARIA MENOR",
                dollarPrice: 15,
                urlImage: "//datalaing.net/img/BdatosImagenes/Equipos/Herramientas0165.jpg",
                idEquipment: 13653,
                idEquipmentZone: 13653
            },
            {
                reference: "ALB038",
                updateDate: "Jan 6, 2025, 12:00:00 AM",
                description: "EQUIPO TIPO 1 ACABADO INTERIOR",
                price: 300,
                depreciationCOP: 1,
                dayValue: 300,
                addedValue: 300,
                group: "PIN/PINTURA, RECUBRIMIENTO, DEMARC.",
                dollarPrice: 5,
                urlImage: "//datalaing.net/img/BdatosImagenes/Equipos/Herramientas0165.jpg",
                idEquipment: 13654,
                idEquipmentZone: 13654
            },
            {
                reference: "ALB039",
                updateDate: "Jan 6, 2025, 12:00:00 AM",
                description: "ASPERSOR/ROCIADOR -FUMIGADOR DE ESPALDA 20 LTS",
                price: 18780,
                depreciationCOP: 0.009,
                dayValue: 169.02,
                addedValue: 169.02,
                group: "ESP/ESPECIALES, VARIAS",
                dollarPrice: 313,
                urlImage: "//datalaing.net/img/BdatosImagenes/Equipos/ASPERSOR ESPALDA FUMIGAR.jpg",
                idEquipment: 13655,
                idEquipmentZone: 13655
            },
            {
                reference: "ALB040",
                updateDate: "Jan 6, 2025, 12:00:00 AM",
                description: "REGLA DE MADERA",
                price: 600,
                depreciationCOP: 0.02,
                dayValue: 12,
                addedValue: 12,
                group: "CON/CONCRETO / CABILLA",
                dollarPrice: 10,
                urlImage: "//datalaing.net/img/BdatosImagenes/Equipos/regla MADERA.jpg",
                idEquipment: 13656,
                idEquipmentZone: 13656
            },
            {
                reference: "ALB041",
                updateDate: "Jan 6, 2025, 12:00:00 AM",
                description: "PLOMADA IMPORTADA",
                price: 1860,
                depreciationCOP: 0.009,
                dayValue: 16.74,
                addedValue: 16.74,
                group: "ALB/ALBAÑILERIA MAQUINARIA MENOR",
                "supplierName": "EPA SUPERFERRETERIA",
                dollarPrice: 31,
                urlImage: "//datalaing.net/img/BdatosImagenes/Equipos/plomada y guaral.jpg",
                idEquipment: 13657,
                idEquipmentZone: 13657
            },
            {
                reference: "ALB042",
                updateDate: "Jan 6, 2025, 12:00:00 AM",
                description: "ESCUADRA METALICA ALUMINIO",
                price: 1080,
                depreciationCOP: 0.01,
                dayValue: 10.8,
                addedValue: 10.8,
                group: "ALB/ALBAÑILERIA MAQUINARIA MENOR",
                dollarPrice: 18,
                urlImage: "//datalaing.net/img/BdatosImagenes/Equipos/ESCUADRA METALICA.jpg",
                idEquipment: 13658,
                idEquipmentZone: 13658
            },
            {
                reference: "ALB043",
                updateDate: "Jan 6, 2025, 12:00:00 AM",
                description: "NIVEL, PLOMADA, ESCUADRA Y CINTA METRICA",
                price: 3900,
                depreciationCOP: 0.009,
                dayValue: 35.1,
                addedValue: 35.1,
                group: "ALB/ALBAÑILERIA MAQUINARIA MENOR",
                dollarPrice: 65,
                urlImage: "//datalaing.net/img/BdatosImagenes/Equipos/ESCUADRA PLOMADA VARIOS.jpg",
                idEquipment: 13659,
                idEquipmentZone: 13659
            },
            {
                reference: "ALB044",
                updateDate: "Jan 6, 2025, 12:00:00 AM",
                description: "PIQUETA, TENAZA, CUCHARA PLANA (ALBAÑILERIA)",
                price: 4860,
                depreciationCOP: 0.04,
                dayValue: 194.4,
                addedValue: 194.4,
                group: "ALB/ALBAÑILERIA MAQUINARIA MENOR",
                dollarPrice: 81,
                urlImage: "//datalaing.net/img/BdatosImagenes/Equipos/PIQUETA TENAZA CUCHA D6.jpg",
                idEquipment: 13660,
                idEquipmentZone: 13660
            },
            {
                reference: "ALB045",
                updateDate: "Jan 6, 2025, 12:00:00 AM",
                description: "SIERRA ELECTRICA CIRCULAR",
                price: 20580,
                depreciationCOP: 0.02,
                dayValue: 411.6,
                addedValue: 411.6,
                group: "CAR/CARPINTERIA/ENCOFRADO",
                dollarPrice: 343,
                urlImage: "//datalaing.net/img/BdatosImagenes/Equipos/sierra circular DeWalt.jpg",
                idEquipment: 13661,
                idEquipmentZone: 13661
            },
            {
                reference: "ALB046",
                updateDate: "Jan 6, 2025, 12:00:00 AM",
                description: "TALADRO Y MECHA P/ ANCLAJES EN CONCRETO",
                price: 1800,
                depreciationCOP: 1,
                dayValue: 1800,
                addedValue: 1800,
                group: "ALB/ALBAÑILERIA MAQUINARIA MENOR",
                dollarPrice: 30,
                urlImage: "//datalaing.net/img/BdatosImagenes/Equipos/taladro-diamante-gdb1600we.jpg",
                idEquipment: 13662,
                idEquipmentZone: 13662
            },
            {
                reference: "ALB047",
                updateDate: "Jan 6, 2025, 12:00:00 AM",
                description: "TALADRO DE BAJA REVOLUCION PARA MEZCLADO",
                price: 600,
                depreciationCOP: 1,
                dayValue: 600,
                addedValue: 600,
                group: "ALB/ALBAÑILERIA, HERRAM-EQUIP. MEN",
                dollarPrice: 10,
                urlImage: "//datalaing.net/img/BdatosImagenes/Equipos/taladro2.jpg",
                idEquipment: 13663,
                idEquipmentZone: 13663
            },
            {
                reference: "ALB048",
                updateDate: "Jan 6, 2025, 12:00:00 AM",
                description: "BARRA METALICA DE 1.47 MTS",
                price: 4620,
                depreciationCOP: 0.03,
                dayValue: 138.6,
                addedValue: 138.6,
                group: "DEM/DEMOLICIONES, COMPRESOR, AIRE",
                dollarPrice: 77,
                urlImage: "//datalaing.net/img/BdatosImagenes/Equipos/BARRA METALICA HOYAR.jpg",
                idEquipment: 13664,
                idEquipmentZone: 13664
            },
            {
                reference: "ALB049",
                updateDate: "Jan 6, 2025, 12:00:00 AM",
                description: "EQUIPO MENOR PARA DEMOLICION MANUAL",
                price: 2304,
                depreciationCOP: 0.04,
                dayValue: 92.16,
                addedValue: 92.16,
                group: "DEM/DEMOLICIONES, COMPRESOR, AIRE",
                dollarPrice: 38.4,
                urlImage: "//datalaing.net/img/BdatosImagenes/Equipos/MANDARRIA 5K D6.jpg",
                idEquipment: 13665,
                idEquipmentZone: 13665
            },
            {
                reference: "ALB050",
                updateDate: "Jan 6, 2025, 12:00:00 AM",
                description: "EQUIPO LIVIANO DE ALBAÑILERIA",
                price: 720,
                depreciationCOP: 1,
                dayValue: 720,
                addedValue: 720,
                group: "ALB/ALBAÑILERIA MAQUINARIA MENOR",
                dollarPrice: 12,
                urlImage: "//datalaing.net/img/BdatosImagenes/Equipos/Herramientas0033.jpg",
                idEquipment: 13666,
                idEquipmentZone: 13666
            },
            {
                reference: "ALB051",
                updateDate: "Jan 6, 2025, 12:00:00 AM",
                description: "MARTILLO TIPO GOMA / MAZO DE GOMA",
                price: 1200,
                depreciationCOP: 0.01,
                dayValue: 12,
                addedValue: 12,
                group: "ALB/ALBAÑILERIA, HERRAM-EQUIP. MEN",
                dollarPrice: 20,
                urlImage: "//datalaing.net/img/BdatosImagenes/Equipos/MARTILLO DE GOMA ST 57.jpg",
                idEquipment: 13667,
                idEquipmentZone: 13667
            },
            {
                reference: "ALB052",
                updateDate: "Jan 6, 2025, 12:00:00 AM",
                description: "HERRAMIENTAS MENORES PARA EXCAVACION",
                price: 3000,
                depreciationCOP: 0.064,
                dayValue: 192,
                addedValue: 192,
                group: "MOV/MOVIMIENTO DE TIERRAS, EXCAV.",
                dollarPrice: 50,
                urlImage: "//datalaing.net/img/BdatosImagenes/Equipos/Equipo menor excavacion.jpg",
                idEquipment: 13668,
                idEquipmentZone: 13668
            },
            {
                reference: "ALB053",
                updateDate: "Jan 6, 2025, 12:00:00 AM",
                description: "BARRA METALICA PARA HOYAR L=1,47 MT",
                price: 5160,
                depreciationCOP: 0.02,
                dayValue: 103.2,
                addedValue: 103.2,
                group: "ALB/ALBAÑILERIA, HERRAM-EQUIP. MEN",
                "supplierName": "EPA SUPERFERRETERIA",
                dollarPrice: 86,
                urlImage: "//datalaing.net/img/BdatosImagenes/Equipos/BARRA METALICA HOYAR.jpg",
                idEquipment: 13669,
                idEquipmentZone: 13669
            },
            {
                reference: "ALB054",
                updateDate: "Jan 6, 2025, 12:00:00 AM",
                description: "HERRAMIENTAS PARA EXCAVACION A MANO",
                price: 3300,
                depreciationCOP: 0.044,
                dayValue: 145.2,
                addedValue: 145.2,
                group: "ALB/ALBAÑILERIA, HERRAM-EQUIP. MEN",
                dollarPrice: 55,
                urlImage: "//datalaing.net/img/BdatosImagenes/Equipos/pala Y PICO excavar.jpg",
                idEquipment: 13670,
                idEquipmentZone: 13670
            },
            {
                reference: "ALB055",
                updateDate: "Jan 6, 2025, 12:00:00 AM",
                description: "HERRAMIENTAS MANUALES PARA EXCAVACION A MANO",
                price: 6540,
                depreciationCOP: 0.095,
                dayValue: 621.3,
                addedValue: 621.3,
                group: "ALB/ALBAÑILERIA, HERRAM-EQUIP. MEN",
                dollarPrice: 109,
                urlImage: "//datalaing.net/img/BdatosImagenes/Equipos/pala Y PICO excavar.jpg",
                idEquipment: 13671,
                idEquipmentZone: 13671
            },
            {
                reference: "ALB056",
                updateDate: "Jan 6, 2025, 12:00:00 AM",
                description: "PICO BELLOTA O SIMILAR / IMPORTADO",
                price: 2880,
                depreciationCOP: 0.011,
                dayValue: 31.68,
                addedValue: 31.68,
                group: "ALB/ALBAÑILERIA, HERRAM-EQUIP. MEN",
                dollarPrice: 48,
                urlImage: "//datalaing.net/img/BdatosImagenes/Equipos/pico sin cabo.jpg",
                idEquipment: 13672,
                idEquipmentZone: 13672
            },
            {
                reference: "ALB057",
                updateDate: "Jan 6, 2025, 12:00:00 AM",
                description: "PALIN",
                price: 1500,
                depreciationCOP: 0.009,
                dayValue: 13.5,
                addedValue: 13.5,
                group: "ALB/ALBAÑILERIA, HERRAM-EQUIP. MEN",
                dollarPrice: 25,
                urlImage: "//datalaing.net/img/BdatosImagenes/Equipos/cincel.jpg",
                idEquipment: 13673,
                idEquipmentZone: 13673
            },
            {
                reference: "ALB058",
                updateDate: "Jan 6, 2025, 12:00:00 AM",
                description: "JUEGO DE DESTORNILLADORES MIXTOS 8 PZAS",
                price: 4740,
                depreciationCOP: 0.015,
                dayValue: 71.1,
                addedValue: 71.1,
                group: "ALB/ALBAÑILERIA, HERRAM-EQUIP. MEN",
                dollarPrice: 79,
                urlImage: "//datalaing.net/img/BdatosImagenes/Equipos/destornillador33.jpg",
                idEquipment: 13674,
                idEquipmentZone: 13674
            },
            {
                reference: "ALB059",
                updateDate: "Jan 6, 2025, 12:00:00 AM",
                description: "ESMERIL MULTIUSO MANUAL",
                price: 23400,
                depreciationCOP: 0.03,
                dayValue: 702,
                addedValue: 702,
                group: "HER/ACERO, HERRERIA, SOLDADURA",
                "supplierName": "EPA SUPERFERRETERIA",
                dollarPrice: 390,
                urlImage: "//datalaing.net/img/BdatosImagenes/Equipos/esmeriladora dewalt2.jpg",
                idEquipment: 13675,
                idEquipmentZone: 13675
            },
            {
                reference: "ALB060",
                updateDate: "Jan 6, 2025, 12:00:00 AM",
                description: "TALADRO INDUSTRIAL CON ACCESORIO P/LIJAR",
                price: 13200,
                depreciationCOP: 0.005,
                dayValue: 66,
                addedValue: 66,
                group: "ALB/ALBAÑILERIA MAQUINARIA MENOR",
                dollarPrice: 220,
                urlImage: "//datalaing.net/img/BdatosImagenes/Equipos/taladro elec.jpg",
                idEquipment: 13676,
                idEquipmentZone: 13676
            },
            {
                reference: "ALB061",
                updateDate: "Jan 6, 2025, 12:00:00 AM",
                description: "RODILLO DE ACERO PARA PISO DE GRANITO",
                price: 6461.4,
                depreciationCOP: 0.005,
                dayValue: 32.31,
                addedValue: 32.31,
                group: "ALB/ALBAÑILERIA MAQUINARIA MENOR",
                dollarPrice: 107.69,
                urlImage: "//datalaing.net/img/BdatosImagenes/Equipos/GRANITO RODILLO MANUAL.jpg",
                idEquipment: 13677,
                idEquipmentZone: 13677
            },
            {
                reference: "ALB062",
                updateDate: "Jan 6, 2025, 12:00:00 AM",
                description: "ASPERSOR PARA RIEGO/JARDINERIA",
                price: 2400,
                depreciationCOP: 0.008,
                dayValue: 19.2,
                addedValue: 19.2,
                group: "ALB/ALBAÑILERIA MAQUINARIA MENOR",
                dollarPrice: 40,
                urlImage: "//datalaing.net/img/BdatosImagenes/Equipos/ASPERSO RIEGO D6.JPG",
                idEquipment: 13678,
                idEquipmentZone: 13678
            },
            {
                reference: "ALB063",
                updateDate: "Jan 6, 2025, 12:00:00 AM",
                description: "DESTORNILLADOR ELECTRICO 4.000 RPM O SIM",
                price: 12720,
                depreciationCOP: 0.015,
                dayValue: 190.8,
                addedValue: 190.8,
                group: "ALB/ALBAÑILERIA, HERRAM-EQUIP. MEN",
                "supplierName": "RAPIDFIX COMERCIALIZADORA CA /AKI",
                dollarPrice: 212,
                urlImage: "//datalaing.net/img/BdatosImagenes/Equipos/destornillador electrico.jpg",
                idEquipment: 13679,
                idEquipmentZone: 13679
            },
            {
                reference: "ALB064",
                updateDate: "Jan 6, 2025, 12:00:00 AM",
                description: "MANDARRIA MANGO CORTO 3 KG BELLOTA O SIM.",
                price: 4500,
                depreciationCOP: 0.02,
                dayValue: 90,
                addedValue: 90,
                group: "ALB/EQUIPOS MENORES P/CONSTRUCCION",
                "supplierName": "EPA BARQUISIMETO Av. Las Industrias",
                dollarPrice: 75,
                urlImage: "//datalaing.net/img/BdatosImagenes/Equipos/mandarria.jpg",
                idEquipment: 13680,
                idEquipmentZone: 13680
            },
            {
                reference: "ALB065",
                updateDate: "Jan 6, 2025, 12:00:00 AM",
                description: "MANDARRIA MANGO LARGO 6 KG BELLOTA O SIM.",
                price: 4680,
                depreciationCOP: 0.01,
                dayValue: 46.8,
                addedValue: 46.8,
                group: "DEM/DEMOLICIONES, COMPRESOR, AIRE",
                "supplierName": "ARFESA ARAGUA FERRETERA S.A.",
                dollarPrice: 78,
                urlImage: "//datalaing.net/img/BdatosImagenes/Equipos/mandarria.jpg",
                idEquipment: 13681,
                idEquipmentZone: 13681
            },
            {
                reference: "ALB066",
                updateDate: "Jan 6, 2025, 12:00:00 AM",
                description: "MARTILLO TIPO CARPINTERO BELLOTA O SIMILAR",
                price: 2700,
                depreciationCOP: 0.02,
                dayValue: 54,
                addedValue: 54,
                group: "ALB/EQUIPOS MENORES P/CONSTRUCCION",
                "supplierName": "EPA BARQUISIMETO Av. Las Industrias",
                dollarPrice: 45,
                urlImage: "//datalaing.net/img/BdatosImagenes/Equipos/martillo.jpg",
                idEquipment: 13682,
                idEquipmentZone: 13682
            },
            {
                reference: "ALB067",
                updateDate: "Jan 6, 2025, 12:00:00 AM",
                description: "CEPILLO, CUCHARA, PALA, CARRETILLA (JGO)",
                price: 18000,
                depreciationCOP: 0.039,
                dayValue: 702,
                addedValue: 702,
                group: "ALB/ALBAÑILERIA, HERRAM-EQUIP. MEN",
                dollarPrice: 300,
                urlImage: "//datalaing.net/img/BdatosImagenes/Equipos/CEPILLO CUCHA PALA CARRETE.jpg",
                idEquipment: 13683,
                idEquipmentZone: 13683
            },
            {
                reference: "ALB068",
                updateDate: "Jan 6, 2025, 12:00:00 AM",
                description: "PIQUETA, CUCHILLA",
                price: 2700,
                depreciationCOP: 0.03,
                dayValue: 81,
                addedValue: 81,
                group: "ALB/ALBAÑILERIA MAQUINARIA MENOR",
                dollarPrice: 45,
                urlImage: "//datalaing.net/img/BdatosImagenes/Equipos/piqueta.jpg",
                idEquipment: 13684,
                idEquipmentZone: 13684
            },
            {
                reference: "ALB069",
                updateDate: "Jan 6, 2025, 12:00:00 AM",
                description: "TENAZA, PIQUETA Y MARTILLO (ALBAÑILERIA)",
                price: 5460,
                depreciationCOP: 0.04,
                dayValue: 218.4,
                addedValue: 218.4,
                group: "ALB/ALBAÑILERIA MAQUINARIA MENOR",
                dollarPrice: 91,
                urlImage: "//datalaing.net/img/BdatosImagenes/Equipos/HERRAM MENOR.jpg",
                idEquipment: 13685,
                idEquipmentZone: 13685
            },
            {
                reference: "ALB070",
                updateDate: "Jan 6, 2025, 12:00:00 AM",
                description: "CINTA METRICA, NIVEL BURBUJA, PLOMADA",
                price: 4200,
                depreciationCOP: 0.009,
                dayValue: 37.8,
                addedValue: 37.8,
                group: "MED/MEDICION, TOPOG.-HERRAM. ESPEC.",
                dollarPrice: 70,
                urlImage: "//datalaing.net/img/BdatosImagenes/Equipos/cinta nivel y plomada.jpg",
                idEquipment: 13686,
                idEquipmentZone: 13686
            },
            {
                reference: "ALB071",
                updateDate: "Jan 6, 2025, 12:00:00 AM",
                description: "CARRETILLA RUEDA NEUMATICA 10\"",
                price: 13680,
                depreciationCOP: 0.02,
                dayValue: 273.6,
                addedValue: 273.6,
                group: "ALB/ALBAÑILERIA, HERRAM-EQUIP. MEN",
                dollarPrice: 228,
                urlImage: "//datalaing.net/img/BdatosImagenes/Equipos/CARRETILLA 2.jpg",
                idEquipment: 13687,
                idEquipmentZone: 13687
            },
            {
                reference: "ALB072",
                updateDate: "Jan 6, 2025, 12:00:00 AM",
                description: "PICO NACIONAL (INCLUYE CABO)",
                price: 2040,
                depreciationCOP: 0.033,
                dayValue: 67.32,
                addedValue: 67.32,
                group: "ALB/ALBAÑILERIA, HERRAM-EQUIP. MEN",
                "supplierName": "EPA BARQUISIMETO Av. Las Industrias",
                dollarPrice: 34,
                urlImage: "//datalaing.net/img/BdatosImagenes/Equipos/PICO Y CABO.jpg",
                idEquipment: 13688,
                idEquipmentZone: 13688
            },
            {
                reference: "ALB073",
                updateDate: "Jan 6, 2025, 12:00:00 AM",
                description: "CARRETILLA PARA CONSTRUCCION",
                price: 12180,
                depreciationCOP: 0.02,
                dayValue: 243.6,
                addedValue: 243.6,
                group: "ALB/ALBAÑILERIA, HERRAM-EQUIP. MEN",
                dollarPrice: 203,
                urlImage: "//datalaing.net/img/BdatosImagenes/Equipos/ARENA CARRETILLA.jpg",
                idEquipment: 13689,
                idEquipmentZone: 13689
            },
            {
                reference: "ALB074",
                updateDate: "Jan 6, 2025, 12:00:00 AM",
                description: "PLOMADA JOROPO ALBAÑIL 300 GRAMOS",
                price: 1800,
                depreciationCOP: 0.01,
                dayValue: 18,
                addedValue: 18,
                group: "ALB/ALBAÑILERIA, HERRAM-EQUIP. MEN",
                "supplierName": "EPA VALENCIA - ZONA INDUSTRIAL",
                dollarPrice: 30,
                urlImage: "//datalaing.net/img/BdatosImagenes/Equipos/plomada y guaral.jpg",
                idEquipment: 13690,
                idEquipmentZone: 13690
            },
            {
                reference: "ALB075",
                updateDate: "Jan 6, 2025, 12:00:00 AM",
                description: "CEPILLO ALBAÑILERIA TIPO PALUSTRA, MANGO PLASTICO",
                price: 960,
                depreciationCOP: 0.09,
                dayValue: 86.4,
                addedValue: 86.4,
                group: "ALB/EQUIPOS MENORES P/CONSTRUCCION",
                "supplierName": "EPA SUPERFERRETERIA",
                dollarPrice: 16,
                urlImage: "//datalaing.net/img/BdatosImagenes/Equipos/cepillo plastico.jpg",
                idEquipment: 13691,
                idEquipmentZone: 13691
            },
            {
                reference: "ALB076",
                updateDate: "Jan 6, 2025, 12:00:00 AM",
                description: "CUCHILLA PARA CORTES",
                price: 900,
                depreciationCOP: 0.02,
                dayValue: 18,
                addedValue: 18,
                group: "ALB/ALBAÑILERIA, HERRAM-EQUIP. MEN",
                dollarPrice: 15,
                urlImage: "//datalaing.net/img/BdatosImagenes/Equipos/cuchilla corte.jpg",
                idEquipment: 13692,
                idEquipmentZone: 13692
            },
            {
                reference: "ALB077",
                updateDate: "Jan 6, 2025, 12:00:00 AM",
                description: "CUCHARA DE 6\"  BELLOTA  O SIMILAR",
                price: 1860,
                depreciationCOP: 0.02,
                dayValue: 37.2,
                addedValue: 37.2,
                group: "ALB/ALBAÑILERIA, HERRAM-EQUIP. MEN",
                "supplierName": "EPA BARQUISIMETO Av. Las Industrias",
                dollarPrice: 31,
                urlImage: "//datalaing.net/img/BdatosImagenes/Equipos/cuchara cuadrad.jpg",
                idEquipment: 13693,
                idEquipmentZone: 13693
            },
            {
                reference: "ALB078",
                updateDate: "Jan 6, 2025, 12:00:00 AM",
                description: "CORTADORA DE CERAMICA 24\" RUBI SIMILAR TS-60",
                price: 30000,
                depreciationCOP: 0.02,
                dayValue: 600,
                addedValue: 600,
                group: "ALB/ALBAÑILERIA MAQUINARIA MENOR",
                "supplierName": "EPA BARQUISIMETO Av. Las Industrias",
                dollarPrice: 500,
                urlImage: "//datalaing.net/img/BdatosImagenes/Equipos/cortadora ceramica 93.jpg",
                idEquipment: 13694,
                idEquipmentZone: 13694
            },
            {
                reference: "ALB079",
                updateDate: "Jan 6, 2025, 12:00:00 AM",
                description: "PALA PUNTA RECTANGULAR CON CABO #",
                price: 3480,
                depreciationCOP: 0.034,
                dayValue: 118.32,
                addedValue: 118.32,
                group: "ALB/ALBAÑILERIA, HERRAM-EQUIP. MEN",
                "supplierName": "EPA BARQUISIMETO Av. Las Industrias",
                dollarPrice: 58,
                urlImage: "//datalaing.net/img/BdatosImagenes/Equipos/pala cuadra.jpg",
                idEquipment: 13695,
                idEquipmentZone: 13695
            },
            {
                reference: "ALB080",
                updateDate: "Jan 6, 2025, 12:00:00 AM",
                description: "PIQUETA",
                price: 2400,
                depreciationCOP: 0.03,
                dayValue: 72,
                addedValue: 72,
                group: "ALB/EQUIPOS MENORES P/CONSTRUCCION",
                "supplierName": "ARFESA ARAGUA FERRETERA S.A.",
                dollarPrice: 40,
                urlImage: "//datalaing.net/img/BdatosImagenes/Equipos/piqueta albañil.jpg",
                idEquipment: 13696,
                idEquipmentZone: 13696
            },
            {
                reference: "ALB081",
                updateDate: "Jan 6, 2025, 12:00:00 AM",
                description: "PALA CON CABO DE MADERA BELLOTA O SIM #",
                price: 2100,
                depreciationCOP: 0.034,
                dayValue: 71.4,
                addedValue: 71.4,
                group: "ALB/ALBAÑILERIA, HERRAM-EQUIP. MEN",
                "supplierName": "EPA BARQUISIMETO Av. Las Industrias",
                dollarPrice: 35,
                urlImage: "//datalaing.net/img/BdatosImagenes/Equipos/pala cuadra.jpg",
                idEquipment: 13697,
                idEquipmentZone: 13697
            },
            {
                reference: "ALB082",
                updateDate: "Jan 6, 2025, 12:00:00 AM",
                description: "MARTILLO TIPO CARPINTERO STANLEY",
                price: 2820,
                depreciationCOP: 0.01,
                dayValue: 28.2,
                addedValue: 28.2,
                group: "CAR/CARPINTERIA/ENCOFRADO",
                "supplierName": "EPA BARQUISIMETO Av. Las Industrias",
                dollarPrice: 47,
                urlImage: "//datalaing.net/img/BdatosImagenes/Equipos/martillo stanley.jpg",
                idEquipment: 13698,
                idEquipmentZone: 13698
            },
            {
                reference: "ALB083",
                updateDate: "Jan 6, 2025, 12:00:00 AM",
                description: "PISTOLA NEUMATICA DE PERCUSION 5/8\"",
                price: 12000,
                depreciationCOP: 0.02,
                dayValue: 240,
                addedValue: 240,
                group: "ALB/ALBAÑILERIA MAQUINARIA MENOR",
                "supplierName": "ARFESA ARAGUA FERRETERA S.A.",
                dollarPrice: 200,
                urlImage: "//datalaing.net/img/BdatosImagenes/Equipos/pistola de percusion.jpg",
                idEquipment: 13699,
                idEquipmentZone: 13699
            },
            {
                reference: "ALB084",
                updateDate: "Jan 6, 2025, 12:00:00 AM",
                description: "JUEGO DE PALA, MANDARRIA Y CARRETILLA",
                price: 900,
                depreciationCOP: 1,
                dayValue: 900,
                addedValue: 900,
                group: "ALB/ALBAÑILERIA, HERRAM-EQUIP. MEN",
                dollarPrice: 15,
                urlImage: "//datalaing.net/img/BdatosImagenes/Equipos/ARENA CARRETILLA.jpg",
                idEquipment: 13700,
                idEquipmentZone: 13700
            },
            {
                reference: "ALB085",
                updateDate: "Jan 6, 2025, 12:00:00 AM",
                description: "TALADRO P/PERFORAR CONCRETO HASTA 1\"",
                price: 900,
                depreciationCOP: 1,
                dayValue: 900,
                addedValue: 900,
                group: "DEM/DEMOLICIONES, COMPRESOR, AIRE",
                dollarPrice: 15,
                urlImage: "//datalaing.net/img/BdatosImagenes/Equipos/martillo elctrico2.jpg",
                idEquipment: 13701,
                idEquipmentZone: 13701
            },
            {
                reference: "ALB086",
                updateDate: "Jan 6, 2025, 12:00:00 AM",
                description: "PALUSTRA DENTADA CON MANGO DE GOMA",
                price: 900,
                depreciationCOP: 0.02,
                dayValue: 18,
                addedValue: 18,
                group: "ALB/ALBAÑILERIA, HERRAM-EQUIP. MEN",
                "supplierName": "EPA SUPERFERRETERIA",
                dollarPrice: 15,
                urlImage: "//datalaing.net/img/BdatosImagenes/Equipos/palustra dentada.jpg",
                idEquipment: 13702,
                idEquipmentZone: 13702
            },
            {
                reference: "ALB087",
                updateDate: "Jan 6, 2025, 12:00:00 AM",
                description: "ESPONJA DE ALBAÑIL (CEPILLO DE GOMA)",
                price: 816,
                depreciationCOP: 0.04,
                dayValue: 32.64,
                addedValue: 32.64,
                group: "ALB/ALBAÑILERIA MAQUINARIA MENOR",
                dollarPrice: 13.6,
                urlImage: "//datalaing.net/img/BdatosImagenes/Equipos/cepillo esponja.jpg",
                idEquipment: 13703,
                idEquipmentZone: 13703
            },
            {
                reference: "ALB088",
                updateDate: "Jan 6, 2025, 12:00:00 AM",
                description: "JUEGO: ESPONJA, CEPILLO Y CUCHARA P/ALBAÑIL",
                price: 2760,
                depreciationCOP: 0.03,
                dayValue: 82.8,
                addedValue: 82.8,
                group: "ALB/ALBAÑILERIA MAQUINARIA MENOR",
                dollarPrice: 46,
                urlImage: "//datalaing.net/img/BdatosImagenes/Equipos/CUCHARA CEPILLO ESPONJA.jpg",
                idEquipment: 13704,
                idEquipmentZone: 13704
            },
            {
                reference: "ALB089",
                updateDate: "Jan 6, 2025, 12:00:00 AM",
                description: "BARRA PATA DE CABRA (HERRAMIENTA)",
                price: 2970,
                depreciationCOP: 0.03,
                dayValue: 89.1,
                addedValue: 89.1,
                group: "ALB/ALBAÑILERIA MAQUINARIA MENOR",
                "supplierName": "EPA MARACAIBO-LA LIMPIA",
                dollarPrice: 49.5,
                urlImage: "//datalaing.net/img/BdatosImagenes/Equipos/PATA DE CABRA 345.jpg",
                idEquipment: 13705,
                idEquipmentZone: 13705
            },
            {
                reference: "ALB090",
                updateDate: "Jan 6, 2025, 12:00:00 AM",
                description: "PIQUETA Y PALA",
                price: 3840,
                depreciationCOP: 0.02,
                dayValue: 76.8,
                addedValue: 76.8,
                group: "ALB/ALBAÑILERIA MAQUINARIA MENOR",
                dollarPrice: 64,
                urlImage: "//datalaing.net/img/BdatosImagenes/Equipos/PALA PIQUETA.jpg",
                idEquipment: 13706,
                idEquipmentZone: 13706
            },
            {
                reference: "ALB091",
                updateDate: "Jan 6, 2025, 12:00:00 AM",
                description: "JUEGO DE PICO Y PALA",
                price: 4500,
                depreciationCOP: 0.035,
                dayValue: 157.5,
                addedValue: 157.5,
                group: "ALB/ALBAÑILERIA MAQUINARIA MENOR",
                dollarPrice: 75,
                urlImage: "//datalaing.net/img/BdatosImagenes/Equipos/pala Y PICO excavar.jpg",
                idEquipment: 13707,
                idEquipmentZone: 13707
            },
            {
                reference: "ALB092",
                updateDate: "Jan 6, 2025, 12:00:00 AM",
                description: "CEPILLO DE ALBAÑILERIA TIPO LLANA",
                price: 1131,
                depreciationCOP: 0.09,
                dayValue: 101.79,
                addedValue: 101.79,
                group: "ALB/ALBAÑILERIA MAQUINARIA MENOR",
                "supplierName": "EPA SUPERFERRETERIA",
                dollarPrice: 18.85,
                urlImage: "//datalaing.net/img/BdatosImagenes/Equipos/palustra.jpg",
                idEquipment: 13708,
                idEquipmentZone: 13708
            },
            {
                reference: "ALB093",
                updateDate: "Jan 6, 2025, 12:00:00 AM",
                description: "RATON / PALUSTRA P/REMATE",
                price: 900,
                depreciationCOP: 0.09,
                dayValue: 81,
                addedValue: 81,
                group: "ALB/ALBAÑILERIA MAQUINARIA MENOR",
                "supplierName": "EPA SUPERFERRETERIA",
                dollarPrice: 15,
                urlImage: "//datalaing.net/img/BdatosImagenes/Equipos/raton.jpg",
                idEquipment: 13709,
                idEquipmentZone: 13709
            },
            {
                reference: "ALB094",
                updateDate: "Jan 6, 2025, 12:00:00 AM",
                description: "CAVADORA HOYO MANUAL DOS CABOS DE MADERA",
                price: 4620,
                depreciationCOP: 0.02,
                dayValue: 92.4,
                addedValue: 92.4,
                group: "ALB/ALBAÑILERIA MAQUINARIA MENOR",
                "supplierName": "EPA SUPERFERRETERIA",
                dollarPrice: 77,
                urlImage: "//datalaing.net/img/BdatosImagenes/Equipos/HOYADOR HUECOS MANUAL.jpg",
                idEquipment: 13710,
                idEquipmentZone: 13710
            },
            {
                reference: "ALB095",
                updateDate: "Jan 6, 2025, 12:00:00 AM",
                description: "ESCARDILLA CON CABO DE MADERA",
                price: 2760,
                depreciationCOP: 0.02,
                dayValue: 55.2,
                addedValue: 55.2,
                group: "ALB/ALBAÑILERIA MAQUINARIA MENOR",
                "supplierName": "EPA SUPERFERRETERIA",
                dollarPrice: 46,
                urlImage: "//datalaing.net/img/BdatosImagenes/Equipos/Escardilla.jpg",
                idEquipment: 13711,
                idEquipmentZone: 13711
            },
            {
                reference: "ALB096",
                updateDate: "Jan 6, 2025, 12:00:00 AM",
                description: "HOZ MANUAL DE PUNTA PARA CORTAR VEGETACION",
                price: 2160,
                depreciationCOP: 0.03,
                dayValue: 64.8,
                addedValue: 64.8,
                group: "ALB/ALBAÑILERIA MAQUINARIA MENOR",
                "supplierName": "EPA SUPERFERRETERIA",
                dollarPrice: 36,
                urlImage: "//datalaing.net/img/BdatosImagenes/Equipos/hoz1.jpg",
                idEquipment: 13712,
                idEquipmentZone: 13712
            },
            {
                reference: "ALB097",
                updateDate: "Jan 6, 2025, 12:00:00 AM",
                description: "TALADRO 3/8\" BOSCH 1800 RPM 450 W PERCUSION",
                price: 27480,
                depreciationCOP: 0.003,
                dayValue: 82.44,
                addedValue: 82.44,
                group: "ALB/ALBAÑILERIA MAQUINARIA MENOR",
                "supplierName": "INVERSIONES FERREFIX CA",
                dollarPrice: 458,
                urlImage: "//datalaing.net/img/BdatosImagenes/Equipos/taladro ryobi 2.jpg",
                idEquipment: 13713,
                idEquipmentZone: 13713
            },
            {
                reference: "ALB098",
                updateDate: "Jan 6, 2025, 12:00:00 AM",
                description: "TALADRO INDUSTRIAL POTENCIA 3/4 HP",
                price: 27600,
                depreciationCOP: 0.003,
                dayValue: 276,
                addedValue: 276,
                group: "ALB/ALBAÑILERIA, HERRAM-EQUIP. MEN",
                "supplierName": "ALQUIHERRAMIENTAS 2112 C.A.",
                dollarPrice: 460,
                urlImage: "//datalaing.net/img/BdatosImagenes/Equipos/taladro bosh.jpg",
                idEquipment: 13714,
                idEquipmentZone: 13714
            },
            {
                reference: "ALB099",
                updateDate: "Jan 6, 2025, 12:00:00 AM",
                description: "MAQUINA P/EMPLOMAR-PULIR GRANITO-MARMOL",
                price: 4200,
                depreciationCOP: 1,
                dayValue: 4200,
                addedValue: 4200,
                group: "ALB/ALBAÑILERIA, HERRAM-EQUIP. MEN",
                dollarPrice: 70,
                urlImage: "//datalaing.net/img/BdatosImagenes/Equipos/GRANITO PULIDORA D6.jpg",
                idEquipment: 13715,
                idEquipmentZone: 13715
            }
        ]
    }

    //servicios de otras páginas
    getequipmentsWithOrdersData() {
        return [
            {
                id: '1000',
                code: 'f230fh0g3',
                name: 'Bamboo Watch',
                description: 'equipment Description',
                image: 'bamboo-watch.jpg',
                price: 65,
                category: 'Accessories',
                quantity: 24,
                inventoryStatus: 'INSTOCK',
                rating: 5,
                orders: [
                    {
                        id: '1000-0',
                        equipmentCode: 'f230fh0g3',
                        date: '2020-09-13',
                        amount: 65,
                        quantity: 1,
                        customer: 'David James',
                        status: 'PENDING'
                    },
                    {
                        id: '1000-1',
                        equipmentCode: 'f230fh0g3',
                        date: '2020-05-14',
                        amount: 130,
                        quantity: 2,
                        customer: 'Leon Rodrigues',
                        status: 'DELIVERED'
                    },
                    {
                        id: '1000-2',
                        equipmentCode: 'f230fh0g3',
                        date: '2019-01-04',
                        amount: 65,
                        quantity: 1,
                        customer: 'Juan Alejandro',
                        status: 'RETURNED'
                    },
                    {
                        id: '1000-3',
                        equipmentCode: 'f230fh0g3',
                        date: '2020-09-13',
                        amount: 195,
                        quantity: 3,
                        customer: 'Claire Morrow',
                        status: 'CANCELLED'
                    }
                ]
            },
            {
                id: '1001',
                code: 'nvklal433',
                name: 'Black Watch',
                description: 'equipment Description',
                image: 'black-watch.jpg',
                price: 72,
                category: 'Accessories',
                quantity: 61,
                inventoryStatus: 'INSTOCK',
                rating: 4,
                orders: [
                    {
                        id: '1001-0',
                        equipmentCode: 'nvklal433',
                        date: '2020-05-14',
                        amount: 72,
                        quantity: 1,
                        customer: 'Maisha Jefferson',
                        status: 'DELIVERED'
                    },
                    {
                        id: '1001-1',
                        equipmentCode: 'nvklal433',
                        date: '2020-02-28',
                        amount: 144,
                        quantity: 2,
                        customer: 'Octavia Murillo',
                        status: 'PENDING'
                    }
                ]
            },
            {
                id: '1002',
                code: 'zz21cz3c1',
                name: 'Blue Band',
                description: 'equipment Description',
                image: 'blue-band.jpg',
                price: 79,
                category: 'Fitness',
                quantity: 2,
                inventoryStatus: 'LOWSTOCK',
                rating: 3,
                orders: [
                    {
                        id: '1002-0',
                        equipmentCode: 'zz21cz3c1',
                        date: '2020-07-05',
                        amount: 79,
                        quantity: 1,
                        customer: 'Stacey Leja',
                        status: 'DELIVERED'
                    },
                    {
                        id: '1002-1',
                        equipmentCode: 'zz21cz3c1',
                        date: '2020-02-06',
                        amount: 79,
                        quantity: 1,
                        customer: 'Ashley Wickens',
                        status: 'DELIVERED'
                    }
                ]
            },
            {
                id: '1003',
                code: '244wgerg2',
                name: 'Blue T-Shirt',
                description: 'equipment Description',
                image: 'blue-t-shirt.jpg',
                price: 29,
                category: 'Clothing',
                quantity: 25,
                inventoryStatus: 'INSTOCK',
                rating: 5,
                orders: []
            },
            {
                id: '1004',
                code: 'h456wer53',
                name: 'Bracelet',
                description: 'equipment Description',
                image: 'bracelet.jpg',
                price: 15,
                category: 'Accessories',
                quantity: 73,
                inventoryStatus: 'INSTOCK',
                rating: 4,
                orders: [
                    {
                        id: '1004-0',
                        equipmentCode: 'h456wer53',
                        date: '2020-09-05',
                        amount: 60,
                        quantity: 4,
                        customer: 'Mayumi Misaki',
                        status: 'PENDING'
                    },
                    {
                        id: '1004-1',
                        equipmentCode: 'h456wer53',
                        date: '2019-04-16',
                        amount: 2,
                        quantity: 30,
                        customer: 'Francesco Salvatore',
                        status: 'DELIVERED'
                    }
                ]
            },
            {
                id: '1005',
                code: 'av2231fwg',
                name: 'Brown Purse',
                description: 'equipment Description',
                image: 'brown-purse.jpg',
                price: 120,
                category: 'Accessories',
                quantity: 0,
                inventoryStatus: 'OUTOFSTOCK',
                rating: 4,
                orders: [
                    {
                        id: '1005-0',
                        equipmentCode: 'av2231fwg',
                        date: '2020-01-25',
                        amount: 120,
                        quantity: 1,
                        customer: 'Isabel Sinclair',
                        status: 'RETURNED'
                    },
                    {
                        id: '1005-1',
                        equipmentCode: 'av2231fwg',
                        date: '2019-03-12',
                        amount: 240,
                        quantity: 2,
                        customer: 'Lionel Clifford',
                        status: 'DELIVERED'
                    },
                    {
                        id: '1005-2',
                        equipmentCode: 'av2231fwg',
                        date: '2019-05-05',
                        amount: 120,
                        quantity: 1,
                        customer: 'Cody Chavez',
                        status: 'DELIVERED'
                    }
                ]
            },
            {
                id: '1006',
                code: 'bib36pfvm',
                name: 'Chakra Bracelet',
                description: 'equipment Description',
                image: 'chakra-bracelet.jpg',
                price: 32,
                category: 'Accessories',
                quantity: 5,
                inventoryStatus: 'LOWSTOCK',
                rating: 3,
                orders: [
                    {
                        id: '1006-0',
                        equipmentCode: 'bib36pfvm',
                        date: '2020-02-24',
                        amount: 32,
                        quantity: 1,
                        customer: 'Arvin Darci',
                        status: 'DELIVERED'
                    },
                    {
                        id: '1006-1',
                        equipmentCode: 'bib36pfvm',
                        date: '2020-01-14',
                        amount: 64,
                        quantity: 2,
                        customer: 'Izzy Jones',
                        status: 'PENDING'
                    }
                ]
            },
            {
                id: '1007',
                code: 'mbvjkgip5',
                name: 'Galaxy Earrings',
                description: 'equipment Description',
                image: 'galaxy-earrings.jpg',
                price: 34,
                category: 'Accessories',
                quantity: 23,
                inventoryStatus: 'INSTOCK',
                rating: 5,
                orders: [
                    {
                        id: '1007-0',
                        equipmentCode: 'mbvjkgip5',
                        date: '2020-06-19',
                        amount: 34,
                        quantity: 1,
                        customer: 'Jennifer Smith',
                        status: 'DELIVERED'
                    }
                ]
            },
            {
                id: '1008',
                code: 'vbb124btr',
                name: 'Game Controller',
                description: 'equipment Description',
                image: 'game-controller.jpg',
                price: 99,
                category: 'Electronics',
                quantity: 2,
                inventoryStatus: 'LOWSTOCK',
                rating: 4,
                orders: [
                    {
                        id: '1008-0',
                        equipmentCode: 'vbb124btr',
                        date: '2020-01-05',
                        amount: 99,
                        quantity: 1,
                        customer: 'Jeanfrancois David',
                        status: 'DELIVERED'
                    },
                    {
                        id: '1008-1',
                        equipmentCode: 'vbb124btr',
                        date: '2020-01-19',
                        amount: 198,
                        quantity: 2,
                        customer: 'Ivar Greenwood',
                        status: 'RETURNED'
                    }
                ]
            },
            {
                id: '1009',
                code: 'cm230f032',
                name: 'Gaming Set',
                description: 'equipment Description',
                image: 'gaming-set.jpg',
                price: 299,
                category: 'Electronics',
                quantity: 63,
                inventoryStatus: 'INSTOCK',
                rating: 3,
                orders: [
                    {
                        id: '1009-0',
                        equipmentCode: 'cm230f032',
                        date: '2020-06-24',
                        amount: 299,
                        quantity: 1,
                        customer: 'Kadeem Mujtaba',
                        status: 'PENDING'
                    },
                    {
                        id: '1009-1',
                        equipmentCode: 'cm230f032',
                        date: '2020-05-11',
                        amount: 299,
                        quantity: 1,
                        customer: 'Ashley Wickens',
                        status: 'DELIVERED'
                    },
                    {
                        id: '1009-2',
                        equipmentCode: 'cm230f032',
                        date: '2019-02-07',
                        amount: 299,
                        quantity: 1,
                        customer: 'Julie Johnson',
                        status: 'DELIVERED'
                    },
                    {
                        id: '1009-3',
                        equipmentCode: 'cm230f032',
                        date: '2020-04-26',
                        amount: 299,
                        quantity: 1,
                        customer: 'Tony Costa',
                        status: 'CANCELLED'
                    }
                ]
            },
            {
                id: '1010',
                code: 'plb34234v',
                name: 'Gold Phone Case',
                description: 'equipment Description',
                image: 'gold-phone-case.jpg',
                price: 24,
                category: 'Accessories',
                quantity: 0,
                inventoryStatus: 'OUTOFSTOCK',
                rating: 4,
                orders: [
                    {
                        id: '1010-0',
                        equipmentCode: 'plb34234v',
                        date: '2020-02-04',
                        amount: 24,
                        quantity: 1,
                        customer: 'James Butt',
                        status: 'DELIVERED'
                    },
                    {
                        id: '1010-1',
                        equipmentCode: 'plb34234v',
                        date: '2020-05-05',
                        amount: 48,
                        quantity: 2,
                        customer: 'Josephine Darakjy',
                        status: 'DELIVERED'
                    }
                ]
            },
            {
                id: '1011',
                code: '4920nnc2d',
                name: 'Green Earbuds',
                description: 'equipment Description',
                image: 'green-earbuds.jpg',
                price: 89,
                category: 'Electronics',
                quantity: 23,
                inventoryStatus: 'INSTOCK',
                rating: 4,
                orders: [
                    {
                        id: '1011-0',
                        equipmentCode: '4920nnc2d',
                        date: '2020-06-01',
                        amount: 89,
                        quantity: 1,
                        customer: 'Art Venere',
                        status: 'DELIVERED'
                    }
                ]
            },
            {
                id: '1012',
                code: '250vm23cc',
                name: 'Green T-Shirt',
                description: 'equipment Description',
                image: 'green-t-shirt.jpg',
                price: 49,
                category: 'Clothing',
                quantity: 74,
                inventoryStatus: 'INSTOCK',
                rating: 5,
                orders: [
                    {
                        id: '1012-0',
                        equipmentCode: '250vm23cc',
                        date: '2020-02-05',
                        amount: 49,
                        quantity: 1,
                        customer: 'Lenna Paprocki',
                        status: 'DELIVERED'
                    },
                    {
                        id: '1012-1',
                        equipmentCode: '250vm23cc',
                        date: '2020-02-15',
                        amount: 49,
                        quantity: 1,
                        customer: 'Donette Foller',
                        status: 'PENDING'
                    }
                ]
            },
            {
                id: '1013',
                code: 'fldsmn31b',
                name: 'Grey T-Shirt',
                description: 'equipment Description',
                image: 'grey-t-shirt.jpg',
                price: 48,
                category: 'Clothing',
                quantity: 0,
                inventoryStatus: 'OUTOFSTOCK',
                rating: 3,
                orders: [
                    {
                        id: '1013-0',
                        equipmentCode: 'fldsmn31b',
                        date: '2020-04-01',
                        amount: 48,
                        quantity: 1,
                        customer: 'Simona Morasca',
                        status: 'DELIVERED'
                    }
                ]
            },
            {
                id: '1014',
                code: 'waas1x2as',
                name: 'Headphones',
                description: 'equipment Description',
                image: 'headphones.jpg',
                price: 175,
                category: 'Electronics',
                quantity: 8,
                inventoryStatus: 'LOWSTOCK',
                rating: 5,
                orders: [
                    {
                        id: '1014-0',
                        equipmentCode: 'waas1x2as',
                        date: '2020-05-15',
                        amount: 175,
                        quantity: 1,
                        customer: 'Lenna Paprocki',
                        status: 'DELIVERED'
                    },
                    {
                        id: '1014-1',
                        equipmentCode: 'waas1x2as',
                        date: '2020-01-02',
                        amount: 175,
                        quantity: 1,
                        customer: 'Donette Foller',
                        status: 'CANCELLED'
                    }
                ]
            },
            {
                id: '1015',
                code: 'vb34btbg5',
                name: 'Light Green T-Shirt',
                description: 'equipment Description',
                image: 'light-green-t-shirt.jpg',
                price: 49,
                category: 'Clothing',
                quantity: 34,
                inventoryStatus: 'INSTOCK',
                rating: 4,
                orders: [
                    {
                        id: '1015-0',
                        equipmentCode: 'vb34btbg5',
                        date: '2020-07-02',
                        amount: 98,
                        quantity: 2,
                        customer: 'Mitsue Tollner',
                        status: 'DELIVERED'
                    }
                ]
            },
            {
                id: '1016',
                code: 'k8l6j58jl',
                name: 'Lime Band',
                description: 'equipment Description',
                image: 'lime-band.jpg',
                price: 79,
                category: 'Fitness',
                quantity: 12,
                inventoryStatus: 'INSTOCK',
                rating: 3,
                orders: []
            },
            {
                id: '1017',
                code: 'v435nn85n',
                name: 'Mini Speakers',
                description: 'equipment Description',
                image: 'mini-speakers.jpg',
                price: 85,
                category: 'Clothing',
                quantity: 42,
                inventoryStatus: 'INSTOCK',
                rating: 4,
                orders: [
                    {
                        id: '1017-0',
                        equipmentCode: 'v435nn85n',
                        date: '2020-07-12',
                        amount: 85,
                        quantity: 1,
                        customer: 'Minna Amigon',
                        status: 'DELIVERED'
                    }
                ]
            },
            {
                id: '1018',
                code: '09zx9c0zc',
                name: 'Painted Phone Case',
                description: 'equipment Description',
                image: 'painted-phone-case.jpg',
                price: 56,
                category: 'Accessories',
                quantity: 41,
                inventoryStatus: 'INSTOCK',
                rating: 5,
                orders: [
                    {
                        id: '1018-0',
                        equipmentCode: '09zx9c0zc',
                        date: '2020-07-01',
                        amount: 56,
                        quantity: 1,
                        customer: 'Abel Maclead',
                        status: 'DELIVERED'
                    },
                    {
                        id: '1018-1',
                        equipmentCode: '09zx9c0zc',
                        date: '2020-05-02',
                        amount: 56,
                        quantity: 1,
                        customer: 'Minna Amigon',
                        status: 'RETURNED'
                    }
                ]
            },
            {
                id: '1019',
                code: 'mnb5mb2m5',
                name: 'Pink Band',
                description: 'equipment Description',
                image: 'pink-band.jpg',
                price: 79,
                category: 'Fitness',
                quantity: 63,
                inventoryStatus: 'INSTOCK',
                rating: 4,
                orders: []
            },
            {
                id: '1020',
                code: 'r23fwf2w3',
                name: 'Pink Purse',
                description: 'equipment Description',
                image: 'pink-purse.jpg',
                price: 110,
                category: 'Accessories',
                quantity: 0,
                inventoryStatus: 'OUTOFSTOCK',
                rating: 4,
                orders: [
                    {
                        id: '1020-0',
                        equipmentCode: 'r23fwf2w3',
                        date: '2020-05-29',
                        amount: 110,
                        quantity: 1,
                        customer: 'Kiley Caldarera',
                        status: 'DELIVERED'
                    },
                    {
                        id: '1020-1',
                        equipmentCode: 'r23fwf2w3',
                        date: '2020-02-11',
                        amount: 220,
                        quantity: 2,
                        customer: 'Graciela Ruta',
                        status: 'DELIVERED'
                    }
                ]
            },
            {
                id: '1021',
                code: 'pxpzczo23',
                name: 'Purple Band',
                description: 'equipment Description',
                image: 'purple-band.jpg',
                price: 79,
                category: 'Fitness',
                quantity: 6,
                inventoryStatus: 'LOWSTOCK',
                rating: 3,
                orders: [
                    {
                        id: '1021-0',
                        equipmentCode: 'pxpzczo23',
                        date: '2020-02-02',
                        amount: 79,
                        quantity: 1,
                        customer: 'Cammy Albares',
                        status: 'DELIVERED'
                    }
                ]
            },
            {
                id: '1022',
                code: '2c42cb5cb',
                name: 'Purple Gemstone Necklace',
                description: 'equipment Description',
                image: 'purple-gemstone-necklace.jpg',
                price: 45,
                category: 'Accessories',
                quantity: 62,
                inventoryStatus: 'INSTOCK',
                rating: 4,
                orders: [
                    {
                        id: '1022-0',
                        equipmentCode: '2c42cb5cb',
                        date: '2020-06-29',
                        amount: 45,
                        quantity: 1,
                        customer: 'Mattie Poquette',
                        status: 'DELIVERED'
                    },
                    {
                        id: '1022-1',
                        equipmentCode: '2c42cb5cb',
                        date: '2020-02-11',
                        amount: 135,
                        quantity: 3,
                        customer: 'Meaghan Garufi',
                        status: 'DELIVERED'
                    }
                ]
            },
            {
                id: '1023',
                code: '5k43kkk23',
                name: 'Purple T-Shirt',
                description: 'equipment Description',
                image: 'purple-t-shirt.jpg',
                price: 49,
                category: 'Clothing',
                quantity: 2,
                inventoryStatus: 'LOWSTOCK',
                rating: 5,
                orders: [
                    {
                        id: '1023-0',
                        equipmentCode: '5k43kkk23',
                        date: '2020-04-15',
                        amount: 49,
                        quantity: 1,
                        customer: 'Gladys Rim',
                        status: 'RETURNED'
                    }
                ]
            },
            {
                id: '1024',
                code: 'lm2tny2k4',
                name: 'Shoes',
                description: 'equipment Description',
                image: 'shoes.jpg',
                price: 64,
                category: 'Clothing',
                quantity: 0,
                inventoryStatus: 'INSTOCK',
                rating: 4,
                orders: []
            },
            {
                id: '1025',
                code: 'nbm5mv45n',
                name: 'Sneakers',
                description: 'equipment Description',
                image: 'sneakers.jpg',
                price: 78,
                category: 'Clothing',
                quantity: 52,
                inventoryStatus: 'INSTOCK',
                rating: 4,
                orders: [
                    {
                        id: '1025-0',
                        equipmentCode: 'nbm5mv45n',
                        date: '2020-02-19',
                        amount: 78,
                        quantity: 1,
                        customer: 'Yuki Whobrey',
                        status: 'DELIVERED'
                    },
                    {
                        id: '1025-1',
                        equipmentCode: 'nbm5mv45n',
                        date: '2020-05-21',
                        amount: 78,
                        quantity: 1,
                        customer: 'Fletcher Flosi',
                        status: 'PENDING'
                    }
                ]
            },
            {
                id: '1026',
                code: 'zx23zc42c',
                name: 'Teal T-Shirt',
                description: 'equipment Description',
                image: 'teal-t-shirt.jpg',
                price: 49,
                category: 'Clothing',
                quantity: 3,
                inventoryStatus: 'LOWSTOCK',
                rating: 3,
                orders: [
                    {
                        id: '1026-0',
                        equipmentCode: 'zx23zc42c',
                        date: '2020-04-24',
                        amount: 98,
                        quantity: 2,
                        customer: 'Bette Nicka',
                        status: 'DELIVERED'
                    }
                ]
            },
            {
                id: '1027',
                code: 'acvx872gc',
                name: 'Yellow Earbuds',
                description: 'equipment Description',
                image: 'yellow-earbuds.jpg',
                price: 89,
                category: 'Electronics',
                quantity: 35,
                inventoryStatus: 'INSTOCK',
                rating: 3,
                orders: [
                    {
                        id: '1027-0',
                        equipmentCode: 'acvx872gc',
                        date: '2020-01-29',
                        amount: 89,
                        quantity: 1,
                        customer: 'Veronika Inouye',
                        status: 'DELIVERED'
                    },
                    {
                        id: '1027-1',
                        equipmentCode: 'acvx872gc',
                        date: '2020-06-11',
                        amount: 89,
                        quantity: 1,
                        customer: 'Willard Kolmetz',
                        status: 'DELIVERED'
                    }
                ]
            },
            {
                id: '1028',
                code: 'tx125ck42',
                name: 'Yoga Mat',
                description: 'equipment Description',
                image: 'yoga-mat.jpg',
                price: 20,
                category: 'Fitness',
                quantity: 15,
                inventoryStatus: 'INSTOCK',
                rating: 5,
                orders: []
            },
            {
                id: '1029',
                code: 'gwuby345v',
                name: 'Yoga Set',
                description: 'equipment Description',
                image: 'yoga-set.jpg',
                price: 20,
                category: 'Fitness',
                quantity: 25,
                inventoryStatus: 'INSTOCK',
                rating: 8,
                orders: [
                    {
                        id: '1029-0',
                        equipmentCode: 'gwuby345v',
                        date: '2020-02-14',
                        amount: 4,
                        quantity: 80,
                        customer: 'Maryann Royster',
                        status: 'DELIVERED'
                    }
                ]
            }
        ];
    }

    status: string[] = ['OUTOFSTOCK', 'INSTOCK', 'LOWSTOCK'];

    equipmentNames: string[] = [
        'Bamboo Watch',
        'Black Watch',
        'Blue Band',
        'Blue T-Shirt',
        'Bracelet',
        'Brown Purse',
        'Chakra Bracelet',
        'Galaxy Earrings',
        'Game Controller',
        'Gaming Set',
        'Gold Phone Case',
        'Green Earbuds',
        'Green T-Shirt',
        'Grey T-Shirt',
        'Headphones',
        'Light Green T-Shirt',
        'Lime Band',
        'Mini Speakers',
        'Painted Phone Case',
        'Pink Band',
        'Pink Purse',
        'Purple Band',
        'Purple Gemstone Necklace',
        'Purple T-Shirt',
        'Shoes',
        'Sneakers',
        'Teal T-Shirt',
        'Yellow Earbuds',
        'Yoga Mat',
        'Yoga Set'
    ];

    constructor(private http: HttpClient) {}

    getequipmentsMini() {
        return Promise.resolve(this.getequipmentsData().slice(0, 5));
    }

    getequipmentsSmall() {
        return Promise.resolve(this.getequipmentsData().slice(0, 10));
    }

    getequipments() {
        return Promise.resolve(this.getequipmentsData());
    }

    getequipmentsWithOrdersSmall() {
        return Promise.resolve(this.getequipmentsWithOrdersData().slice(0, 10));
    }

    // generatePrduct(): Equipment {
    //     const equipment: Equipment = {
    //         idEquipment: this.generateId(),
    //         description: 'equipment Description',
    //         price: this.generatePrice(),
    //         quantity: this.generateQuantity(),
    //         category: 'equipment Category',
    //         inventoryStatus: this.generateStatus(),
    //         rating: this.generateRating()
    //     };

    //     equipment.urlImage = equipment.description?.toLocaleLowerCase().split(/[ ,]+/).join('-') + '.jpg';
    //     return equipment;
    // }

    generateId() {
        let text = '';
        let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

        for (var i = 0; i < 5; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }

        return text;
    }

    generateName() {
        return this.equipmentNames[Math.floor(Math.random() * Math.floor(30))];
    }

    generatePrice() {
        return Math.floor(Math.random() * Math.floor(299) + 1);
    }

    generateQuantity() {
        return Math.floor(Math.random() * Math.floor(75) + 1);
    }

    generateStatus() {
        return this.status[Math.floor(Math.random() * Math.floor(3))];
    }

    generateRating() {
        return Math.floor(Math.random() * Math.floor(5) + 1);
    }
}
