var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function() {
    var pacientes = document.querySelectorAll(".paciente");

    if(this.value.length > 0) {
        for(var i = 0; i< pacientes.length; i++){
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            var experssao = new RegExp(this.value,"i");
            if( !experssao.test(nome)){
                paciente.classList.add("invisivel");
            }else {
                paciente.classList.remove("invisivel");
            }
        }
    }else {
        for(var i = 0; i< paciente.length; i++){
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }
});