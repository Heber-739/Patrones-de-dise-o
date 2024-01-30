import { Logistica } from "./Logistica";
import { LogisticaMaritima } from "./Maritima";
import { LogisticaTerrestre } from "./Terrestre";



const newOrder = (transport: Logistica) => 
console.log(transport.crearEnvio());


newOrder(new LogisticaMaritima());

newOrder(new LogisticaTerrestre());

/* 
Pros:
 Evitas un acoplamiento fuerte entre el creador y los productos concretos.

 Principio de responsabilidad única. Puedes mover el código de creación de
 producto a un lugar del programa, haciendo que el código sea más fácil de mantener.
 
 Principio de abierto/cerrado. Puedes incorporar nuevos tipos de productos en el
 programa sin descomponer el código cliente existente.

 Contras:
 Puede ser que el código se complique, ya que debes incorporar una multitud de
 nuevas subclases para implementar el patrón. La situación ideal sería introducir
 el patrón en una jerarquía existente de clases creadoras.
  */