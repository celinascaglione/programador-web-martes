
const consola = document.querySelector("#consola");
consola.addEventListener ("click",() =>{
    console.log("Hola, mundo!");
})

const alertas = document.querySelector("#alerta");

alertas.addEventListener("click", myFunction);

function myFunction(){
    alert("Hola mundo");
}


const colMod = document.querySelector("#color-mode");
const body = document.body;
colMod.addEventListener("click", cambioColor);
function cambioColor (){
    body.classList.add("dark-mode");
}
console.log(body)