//! preentrega n° 1 - simulador interactivo.

alert("Bienvenido, Ingrese que producto desea llevar, si desea salir, solo ingrese 0.");

//me deja ingresar un numero de 1 a 4
let seleccionProducto = Number(prompt("1-camiseta $4000, 2-chaqueta $8000, 3-pantalon $6000, 4-zapatillas $7000"));

//variable global a la que puedo acceder desde el bloque switch de abajo
let cantidad;

//variable que uso para guardar el precio total a medida que voy agregando productos, //*al final del simulador se muestra el valor final de esta variable
let total = 0;

//funcion que calcula el precio total de una sola orden, //*la suma del precio de todas las ordenes es el total
const precioCantidad = (cant, precio) => {
    return cant * precio
}

while(seleccionProducto != 0) {
    switch(seleccionProducto) {
        case 1:
            cantidad = prompt("ha seleccionado 'camiseta', cuantas desea llevar?")
            total += precioCantidad(cantidad, 4000)
            break;
    
        case 2:
            cantidad = prompt("ha seleccionado 'chaqueta', cuantas desea llevar?")
            total += precioCantidad(cantidad, 8000)
            break;
    
        case 3:
            cantidad = prompt("ha seleccionado 'pantalon', cuantos desea llevar?")
            total += precioCantidad(cantidad, 6000)
            break;
    
        case 4:
            cantidad = prompt("ha seleccionado 'zapatillas', cuantas desea llevar?")
            total += precioCantidad(cantidad, 7000)
            break;
    
        default:
            break;
        }

    if(seleccionProducto > 4 && seleccionProducto != 10) {
        alert("ingrese un identificador de producto valido.")
    } else if(seleccionProducto === 10) {
        alert("ESPERABAS UNA NOTIFICACION SOBRE UN IDENTIFICADOR INVALIDO, PERO ERA YO, DIO! >:D")
    } //easter egg re bobo para usar un else if (aguante jojos)

    seleccionProducto = Number(prompt("1-camiseta $4000, 2-chaqueta $8000, 3-pantalon $6000, 4-zapatillas $7000"));
    }

//hipotetico cupon de descuento que saque de la nada!
const aplicarDescuento = (precio, descuento) => {
    precioConDescuento = precio - precio*(descuento / 100);
    return precioConDescuento;
}

if(total > 0){
    let descuento = parseFloat(prompt("ingrese el % de descuento de su cupon"))

    const precioFinal = aplicarDescuento(total, descuento)
    alert(`el valor final de la compra es ${precioFinal}`) //!ultimo mensaje con resultado final
} else {
    alert("no has agregado productos")
}