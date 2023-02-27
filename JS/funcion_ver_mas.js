const ver_mas = document.getElementsByClassName("ver_mas")
const experiencia = document.getElementsByClassName("experiencia")

//como usé className retorna una coleccion de elementos similar a un array
//accedo a cada elemento de la clase recorriendo con un for y escuchando
//a cada escucha le asigno una funcion, que coresponderá al mismo elemento que disparó el evento
//y al retirar el mouse del disparador le di un delay para que retire la muestra

for (let i = 0; i < 2; i++) {
    ver_mas[i].addEventListener("mouseover", function(){experiencia[i].style.display = "block"})
    ver_mas[i].addEventListener("mouseleave", function(){
        setTimeout(() => {
            experiencia[i].style.display = "none"
        }, 7000);
        })
}













/*
function verBoton(){
    btn_ver.style.display = "inline-block"       
    console.log("funciona mouse over")
}



const btn_ver = document.getElementById("btn_ver")
btn_ver.addEventListener("click", verTexto)

const experiencia_laboral = document.getElementById("experiencia_laboral")




function verTexto(){

    console.log("funciona click boton")
}
*/