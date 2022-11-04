class Celular {

    constructor(marca, modelo, anioDeFa, memoriaRam, memoria, valoracion) {
        this.titulo = marca;
        this.autor = modelo;
        this.anio = parseInt(anioDeFa);
        this.genero = memoriaRam;
        this.valoracion = parseInt(memoria);
        this.id = valoracion;
    }
}

const celulares = [
    new Celular('Samsung', 'S 22', 2022, '16 GB', '540 GB', 10),
    new Celular('Iphone', '14', 2022, '16 GB', '1 TB', 9),
    new Celular('Xiaomi', 'Redmi 8', 2019, '4 GB', '128 GB', 8),
    new Celular('Samsung', 'A 12', 2019, '4 GB', '64 GB', 8),
    new Celular('Samsung', 'S 22 Flip', 2022, '12 GB', '1 TB', 10),
];

let continuar = true;

while (continuar) {

    let ingreso = prompt('Ingresa los datos del celular:\n-marca\n-modelo\n-año de fabricacion\n-memoria Ram\n-memoria\n-puntaje de 1 a 10\nseparados por un espacio. Ingresa X para finalizar');

    if (ingreso.toUpperCase() == 'X'){
        continuar = false;
        break;
    }

    const datos = ingreso;
    console.log(datos);

    const celular = new Celular(celulares[0], celulares[1], datos[2], datos[3], datos[4], datos[5], datos[6]);

    celulares.push(celulares);
    console.log(celulares);

}

let criterio = prompt('Elegí la opcion que deseas para ver que celular se adapta mejor a vos:\n1 - Marca de telefono ordenado(A a Z)\n2 - marca de telefono de Mayor a menor calificacion \n');

    function ordenar(criterio, array) {
        let arrayOrdenado = array.slice(0);

        switch (criterio) {
            case '1':
                let nombreAscendente = arrayOrdenado.sort((a, b) => a.titulo.localeCompare(b.titulo));
                return nombreAscendente;
                
            case '2':
                return arrayOrdenado.sort((a, b) => a.anio - b.anio);
                
            default:
                alert('No es un criterio válido, te mostraremos el catálogo sin ordenar');
                return arrayOrdenado;
                break;
        }
    }

    function crearStringResultado(array) {
        let info = '';

        array.forEach(elemento => {
            info += 'marca: ' + elemento.marca + '\nmodelo: ' + elemento.modelo + '\nAño de fabricacion: ' + elemento.anioDeFa +'\nmemoria ram: ' + elemento.memoriaRam +' gb'+ '\nmemoria interna de almacenamiento: ' + elemento.memoria +' gb'+'\nValoración: ' + elemento.valoracion + ' puntos.\n\n'
        });

        return info;

    }

    alert(crearStringResultado(ordenar(criterio, celulares)));


