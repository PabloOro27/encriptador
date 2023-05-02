const btnEncriptar = document.querySelector('.primary-button'); 
const btnDesencriptar = document.querySelector('.secondary-button');  
let spanSalida = document.querySelector('#message-salida'); 
let mensajeSalida;
const notMessage = document.querySelector('.not-message'); 
const messageOn = document.querySelector('.message'); 
let mensajeBienvenida = document.querySelector('#mensaje-bienvenida'); 
const btnCopiar = document.querySelector('#copy');

function iniciar(){
    btnEncriptar.addEventListener('click', encriptar ); 
    btnDesencriptar.addEventListener('click', desencriptar);  
    btnCopiar.addEventListener('click', copiarTexto);
}

function encriptar(){
    let mensajeEntrada = document.querySelector('#texto-ingreso').value;
    
    if(mensajeEntrada == ""){
        notMessage.classList.remove('inactive');
        messageOn.classList.add('inactive');
        mensajeBienvenida.innerHTML = 'Ningun mensaje encontrado'; 
    }else{
        mensajeEntrada = mensajeEntrada.toLowerCase(); //pasar el sting a minusculas
        mensajeSalida = mensajeEntrada.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
        notMessage.classList.add('inactive');
        messageOn.classList.remove('inactive'); 
        spanSalida.innerHTML = mensajeSalida;
    } 
}
function desencriptar(){
    let mensajeEntrada = document.querySelector('#texto-ingreso').value;
    
    if(mensajeEntrada == ""){
        notMessage.classList.remove('inactive');
        messageOn.classList.add('inactive');
        mensajeBienvenida.innerHTML = 'Ningun mensaje encontrado'; 
    }else{
        mensajeEntrada = mensajeEntrada.toLowerCase(); //pasar el sting a minusculas
        mensajeSalida = mensajeEntrada.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
        notMessage.classList.add('inactive');
        messageOn.classList.remove('inactive'); 
        spanSalida.innerHTML = mensajeSalida;
    } 
}
function copiarTexto(){
    var texto = document.getElementById("message-salida");

    var inputFalso = document.createElement("input");
    inputFalso.setAttribute("value", texto.innerHTML);

    document.body.appendChild(inputFalso);

    inputFalso.select();

    document.execCommand("copy");

    document.body.removeChild(inputFalso);
    alert("Copiado al portapales!"); 
}

// iniciar la aplicacion 
window.addEventListener(`load`, iniciar);  