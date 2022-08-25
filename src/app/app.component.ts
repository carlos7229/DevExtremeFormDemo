import {
  NgModule,
  Component,
  ViewChild,
  enableProdMode,
  OnInit
} from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { DxFormModule, DxCheckBoxModule } from "devextreme-angular";
import { PaymentDetailDTO } from "./model";

@Component({
  selector: "demo-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  paymentDetail: PaymentDetailDTO;
  jsondata = ` [
    {
      "Id": "e740f789-924b-49e5-a51d-068207ee01d5",
      "FormaPago": "29368b26-0f14-4acb-4f1b-08d98d13c122",
      "Obligatorio": true,
      "Columnas": 1,
      "Estado": true,
      "Orden": 1,
      "PaymentOptions": {
        "Id": "a998890a-c90a-426e-b85b-60aa8edf07e8",
        "NombrePago": null,
        "Modelo": "NUMERO_TARJETA_CREDITO",
        "Valor": "NULL",
        "Url": "NULL",
        "Code": "NUMERO_TARJETA_CREDITO",
        "TypeCode": "NUMBER",
        "TypeDescription": "Caja Numerica",
        "PaymentSelectionOptions": []
      }
    },
    {
      "Id": "7aebf4c6-a0ce-4712-9d10-eed1f92b9f7d",
      "FormaPago": "29368b26-0f14-4acb-4f1b-08d98d13c122",
      "Obligatorio": true,
      "Columnas": 1,
      "Estado": true,
      "Orden": 2,
      "PaymentOptions": {
        "Id": "5df7dc64-fec4-4c43-ae01-22d6d066403b",
        "NombrePago": null,
        "Modelo": "FECHA_VENCIMIENTO",
        "Valor": "NULL",
        "Url": "NULL",
        "Code": "FECHA_VENCIMIENTO",
        "TypeCode": "TIME",
        "TypeDescription": "Campo de Hora",
        "PaymentSelectionOptions": []
      }
    },
    {
      "Id": "59e8626c-01f9-4f66-ac60-0c4cb4e3a9d9",
      "FormaPago": "29368b26-0f14-4acb-4f1b-08d98d13c122",
      "Obligatorio": true,
      "Columnas": 2,
      "Estado": true,
      "Orden": 3,
      "PaymentOptions": {
        "Id": "16b291f8-fc84-4cfb-a24c-cb74a48edfb8",
        "NombrePago": null,
        "Modelo": "FRANQ_TARJETA_CREDITO",
        "Valor": "NULL",
        "Url": "NULL",
        "Code": "FRANQ_TARJETA_CREDITO",
        "TypeCode": "SELECT",
        "TypeDescription": "Campo de Seleccion",
        "PaymentSelectionOptions": [
          {
            "ID": "0d7b843a-8b82-4739-a442-b171c597c02a",
            "Titulo": "Master Card",
            "Descripcion": "Franquicia Master Card",
            "Valor": "NULL"
          }
        ]
      }
    }
  ]`;

  constructor() {
    this.paymentDetail = JSON.parse(this.jsondata);
  }

  ngOnInit() {
    console.log("hola");
    debugger;
  }
}

@NgModule({
  imports: [BrowserModule, DxCheckBoxModule, DxFormModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
