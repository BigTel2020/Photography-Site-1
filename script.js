// Menu Lateral
var chk = window.document.getElementById("check")
var MenuLateral = window.document.getElementById("menu-lateral")

function FuncAbrirMenuLateral(){
    var caixa = window.document.getElementsByTagName("label")[0]
    if(chk.checked){
        MenuLateral.style.width="0%"
        caixa.style.background="#B0C4DE"
    }else{
        MenuLateral.style.width="100%"
        caixa.style.background="#EEE8AA"
    }
}

