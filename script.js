// Menu Lateral
var chk = window.document.getElementById("check")
var MenuLateral = window.document.getElementById("menu-lateral")

function FuncAbrirMenuLateral(){
    if(window.screen.width < 1000){
        if(event.target instanceof HTMLAnchorElement){
            MenuLateral.style.width="0%"
            chk.checked = false
        }else{
            if(chk.checked){
                MenuLateral.style.width="0%"
            }else{
                MenuLateral.style.width="100%"
            }
        }
    }
}

// Tema
var BotaoTema = window.document.getElementById("circulo")
BotaoTema.addEventListener("click", FuncTema)


function TemaEscuro(){
    window.document.getElementsByClassName("alinhar-secoes")[0].style.background = "#3B444B"
    window.document.getElementById("menu-lateral").style.background = "#3B444B"
    window.document.getElementsByTagName("main")[0].style.background = "#3B444B"
    window.document.getElementsByTagName("footer")[0].style.background = "#003153"
    window.document.getElementsByTagName("h1")[0].style.color = "#fff"
    window.document.getElementsByTagName("h2")[0].style.color = "#fff"
    window.document.getElementsByClassName("bio")[0].style.color = "#fff"
    var links = window.document.getElementsByTagName("a")
    for(var c in links){
        links[c].style.color = "#fff"
    }
}


function TemaClaro(){
    window.document.getElementsByClassName("alinhar-secoes")[0].style.background = "#F0F8FF"
    window.document.getElementById("menu-lateral").style.background = "#F0F8FF"
    window.document.getElementsByTagName("main")[0].style.background = "#F0F8FF"
    window.document.getElementsByTagName("footer")[0].style.background = "#B0C4DE"
    window.document.getElementsByTagName("h1")[0].style.color = "#000"
    window.document.getElementsByTagName("h2")[0].style.color = "#000"
    window.document.getElementsByClassName("bio")[0].style.color = "#000"
    var links = window.document.getElementsByTagName("a")
    for(var c in links){
        links[c].style.color = "#000"
    }
}


// Salvar o tema no localStorage e chamar a devida função.
function FuncTema(){
    if(localStorage.tema){
        if(localStorage.tema == "claro"){
            localStorage.tema = "escuro"
            TemaEscuro()
        }else{
            localStorage.tema = "claro"
            TemaClaro()
        }
    }else{
        localStorage.tema = "escuro"
        TemaEscuro()
    }
}

if(localStorage.tema){
    if(localStorage.tema == "escuro"){
        TemaEscuro()
    }
}


