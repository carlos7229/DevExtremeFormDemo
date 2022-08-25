export class PaymentDetailDTO
{
   id: string;
   formaPago: string;
   obligatorio: boolean;
   columnas: number;
   estado: boolean;
   orden: number;
   paymentOptions: PaymentOptionsDTO;

};

export class PaymentOptionsDTO
{
   id:string;
   nombrePago:string;
   modelo:string;
   valor:string;
   url:string;
   code:string;
   typeCode:string;
   typeDescription:string;
   paymentSelectionOptions:PaymentSelectionOptionsDTO[] ;
};

export class PaymentSelectionOptionsDTO
{
   id:string;
   titulo:string;
   descripcion:string;
   valor:string;
};