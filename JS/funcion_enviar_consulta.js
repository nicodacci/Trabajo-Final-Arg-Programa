//-----------conexión con el html--------------------
//asigno a una variable o constante una parte del html para
//manipularla desde JS

const btn_contacto = document.getElementById("contactame")
const formulario = document.getElementById("form")
const btn_enviar = document.getElementById("btn_enviar")

const nombre_apellido = document.getElementById("nombre_apellido")
const e_mail = document.getElementById("e-mail")
const consulta = document.getElementById("consulta")

//------mantengo a la escucha de un evento el boton----

btn_contacto.addEventListener("click", mostrar_formulario)

//-----------funciones----------------------------------

function mostrar_formulario(){
    btn_contacto.style.display = "none"
    formulario.style.display = "block"
    btn_enviar.addEventListener("click", enviar_consulta)
}

function enviar_consulta(){
    if(formulario_completo()){
        alert("Su consulta fue enviada")
        btn_contacto.style.display = "block"
        formulario.style.display = "none"
        nombre_apellido.value=""
        e_mail.value=""
        consulta.value=""
    } else {alert("Complete los campos requeridos..")}

}

function formulario_completo(){
    if(nombre_apellido.value !== "" && e_mail !== "" && consulta.value !== ""){
        return true
    }
}
