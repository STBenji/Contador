const contador = document.getElementById('count')
const incrementar = document.getElementById('incr')
const decrementar = document.getElementById('decr')
const resetear = document.getElementById('reset')

let numero = 0;

incrementar.addEventListener('click', () => {

    numero++;
    contador.innerHTML = numero;

});

decrementar.addEventListener('click', () => {

    if(numero == -999999999){

    }else {

        numero--;
        contador.innerHTML = numero;

    }

});

resetear.addEventListener('click', () => {

    numero = 0;
    contador.innerHTML = numero;

});