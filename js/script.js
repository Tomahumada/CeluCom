class Celular {
    constructor(marca, modelo, anioDeFa, memoriaRam, memoria, valoracion) {
        this.marca = marca;
        this.modelo = modelo;
        this.anioDeFa = parseInt(anioDeFa);
        this.memoriaRam = memoriaRam;
        this.memoria = memoria;
        this.valoracion = parseInt(valoracion);
    }
}

const celulares = [
    new Celular('Samsung', 'S 22', 2022, '16 GB', '540', 10),
    new Celular('Iphone', '14', 2022, '16 GB', '1 TB', 9),
    new Celular('Xiaomi', 'Redmi 8', 2019, '4 GB', '128 GB', 8),
    new Celular('Samsung', 'A 12', 2019, '4 GB', '64 GB', 8),
    new Celular('Samsung', 'S 22 Flip', 2022, '12 GB', '1 TB', 10),
];

function agregar() {
    marca = prompt('¿Cual es la marca del celular?');
    modelo = prompt('¿Cual es el modelo del celular?');
    anioDeFa = prompt('¿Cual es el año de fabricacion del celular?');
    memoriaRam = prompt('¿Cual es la memoria Ram total del celular?');
    memoria = prompt('¿Cual es la memoria interna del celular?');
    valoracion = prompt('¿cual es la valoracion que tiene este celular?');

    const celular = new Celular(marca, modelo, anioDeFa, memoriaRam, memoria, valoracion);
    celulares.push(celular);
    console.log(celulares);
}
function mostrarCatalogo() {
    let criterio = prompt('Elegí la opcion en la forma que deseas ver el catalogo de celulares:\n1 - Marca de telefono ordenado(A a Z)\n2 - marca de telefono de Mayor a menor calificacion \n');
    switch (criterio) {
        case '1':
            alert('Para ver el catalogo hace click en F12');
            console.log(celulares.sort((a, b) => a.valoracion - b.valoracion));
            break;
        case '2':
            alert('Para ver el catalogo hace click en F12');
            console.log(celulares.sort((a, b) => a.anioDeFa < b.anioDeFa));
            break;
        default:
            alert('No es un criterio válido, te mostraremos el catálogo sin ordenar');
            break;
    }
}

let ingreso = parseInt(prompt('¿Deseas Agregar un Celular o Ver el catalogo?\n1 - Agregar celular\n2 - ver catalogo'));

switch (ingreso) {
    case 1:
        agregar();
        mostrarCatalogo();
        break;
    case 2:
        mostrarCatalogo();
        break;
}

