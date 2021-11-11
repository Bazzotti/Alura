var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(event){
//    var alvoEvento = event.target;  //   Alvo clicado
//    var paiDoAlvo = alvoEvento.parentNode;  // paciente =  Alvo a ser apagado
//    paiDoAlvo.remove(); // Vai funcionar tambem, porem é mais comprido.
    
    event.target.parentNode.classList.add("fadeOut");

    setTimeout(function(){
        event.target.parentNode.remove();
    }, 500);
});