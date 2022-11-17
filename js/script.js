
const btnAgregar = document.getElementById('buttonAgregar'),
    btncatalogo = document.getElementById('buttonCatalogo')







let ingreso;

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
    let criterio = confirm('Deseas ver el catalogo o no?');
    switch (criterio) {
        case true:
            let msg = '';
            for (let celular of celulares) {
                msg += `\nMarca: ${celular.marca}\nModelo: ${celular.modelo}\nCantidad de memoria interna: ${celular.memoria}\n `;
            }
            alert(msg);
            break;
        case false:
            alert('ok cualquier consulta no dude en recargar la pagina');
            break;
    }
}

btnAgregar.onclick=()=>{
    agregar()
}