class Celular {

    constructor(marca, modelo, anio, memoriaRam, memoria, puntuacion) {
        this.marca = marca;
        this.modelo = modelo;
        this.anio = parseInt(anio);
        this.memoriaRam = memoriaRam;
        this.memoria = memoria;
        this.puntuacion = parseInt(puntuacion);
    }
}


const celulares = [
    new Celular('Samsung', 'S 22', 2022, '16 GB', '540 GB', 10),
    new Celular('Iphone', '14', 2022, '16 GB', '1 TB', 9),
    new Celular('Xiaomi', 'Redmi 8', 2019, '4 GB', '128 GB', 8),
    new Celular('Samsung', 'A 12', 2019, '4 GB', '64 GB', 8),
    new Celular('Samsung', 'S 22 Flip', 2022, '12 GB', '1 TB', 10),
];

console.log(celulares);

let continuar = true;


while (continuar) {
    let ingreso = prompt('Ingresa los datos del Celular: \n1- Marca\n2- modelo\n3- año de fabricacion\n4- memoria ram\n5- memoria\n6- puntaje del 1 al 10\nTodo esto separado por un espacio por cada categoria. \ningresa una X para finalizar');

    if (ingreso.toUpperCase() == 'X') {
        continuar = false;
        break;
    }
    let datos = ingreso.split(' ');
    console.log(datos);

    const celular = new Celular(datos[0], datos[1], datos[2], datos[3], datos[4], datos[5]);

    celulares.push(celular);
    console.log(celulares);
}

let opcion = prompt('Elegi la opcion que mas desees para mostrarte nuestros dispositivos y asi poder comprarte Uno: \n1 - Marca(A a Z) \n2 - Mejor a Peor puntuado \n3 - Fecha de publicacion (mas viejo a as nuevo)');

function ordenar(opcion, array){
    let arrayOrden = array.slice(0);

    switch (opcion) {
        case '1':
let nombreAscendete = arrayOrden.sort((a,b)=>a.marca.localeCompare(b.marca));
return nombreAscendete;
        case '2':
            return arrayOrden.sort((a,b)=>a.puntuacion.localeCompare(b,puntuacion));
            break;
        case '3':
            return arrayOrden.sort((a,b)=>a.anio.localeCompare(b,anio));
            break;
        default:
            alert('no es un criterio valido');
            break;
    }
}

function ResultadoDeString(array) {
    let informacion = '';

    array.forEach(infoProducto => {
        informacion!= 'Marca: ' + infoProducto.titulo + '\nmodelo: ' + infoProducto.titulo + '\nAño de fabricacion: ' + infoProducto.titulo + '\nMemoria ram: ' + infoProducto.titulo + '\nMemoria interna: ' + infoProducto.titulo + '\nValoracion: ' + infoProducto.titulo + 'estrellas\n\n';
    });
}

alert(ResultadoDeString(ordenar(opcion,celulares)));

