import { Servicio } from "./Servicio";

export class DetalleOrden{
  id?:number;
  servicio:Servicio=new Servicio;
  cantidad?:number;
  subtotal?:number;
  descripcion?:string;
  estado:boolean=true;
  minutosRealizados?:number;
}
