let encabezado = document.querySelector("h1")
encabezado.innerHTML = "Hora del Desafío"
let respuestaCiudadUsuario = 0;
let numeroUnoUsuario = 0
let numerodosUsuario = 0
let sumaNumerosUsuario = numeroUnoUsuario + numerodosUsuario
function clickConsole () {
    console.log ("El botón fue clicado" );
} 
function clickPrompt () {
   respuestaCiudadUsuario = prompt("Dame el nombre de una ciudad de Brasil");
    alert (`Estuve en ${respuestaCiudadUsuario} y me acordé de ti`);  
}
function clickAlert () {
    alert("Yo amo JS")
}
function clickSuma () {
numeroUnoUsuario = parseInt ( prompt( "Dame el primer numero a sumar"));
numerodosUsuario = parseInt ( prompt( "Dame el segundo numero a sumar"));
sumaNumerosUsuario = numeroUnoUsuario + numerodosUsuario;
alert (`${numeroUnoUsuario} + ${numerodosUsuario} = ${sumaNumerosUsuario} `)
}