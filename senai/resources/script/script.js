// arquivo != pasta 

//  arrays === lista 

/* let compras = ["ovo","arroz","feijao branco","sabão em pó","sabao em barra"];

let busca = prompt("digite o item a buscar");

let listaFiltrada = compras.find(compra =>
   compra.toLowerCase().includes(busca.
    toLowerCase().trim())

   )
let encontrar = compras.index0f(listaFiltrada)
console.log(encontrar);  */

 let fila =["naclara","analuh","tomasfeio","erick","Maria","Diego","matias"]
     
    
console.log("Fila inicial:", fila);


fila.push("naclara");
console.log("Após adicionar um cliente comum (push):", fila);


fila.unshift("tomasfeio (Prioritário)");
console.log("Após adicionar um cliente prioritário (unshift):", fila);


let atendido = fila.shift();
console.log("Cliente atendido:", atendido);
console.log("Após o atendimento (shift):", fila);


let desistente = fila.pop();
console.log("Cliente que desistiu:", desistente);
console.log("Após a desistência (pop):", fila);