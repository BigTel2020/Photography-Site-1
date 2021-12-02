// Menu Lateral
var chk = window.document.getElementById("check")
var MenuLateral = window.document.getElementById("menu-lateral")

function FuncAbrirMenuLateral(){
    if(chk.checked){
        MenuLateral.style.width="0%"
    }else{
        MenuLateral.style.width="100%"
    }
}

