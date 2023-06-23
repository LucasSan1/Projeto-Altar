function MostrarCampos(seta) {
    const formField = seta.parentNode;
    formField.classList.toggle('aparecer');
}

function abrirPopUp() {
    var popup = document.getElementById("popup");
    popup.style.display = "block";
}

function fecharPopUp() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";
    limparFormulario();
    fecharCampos();
}

function limparFormulario() {
    var formulario = document.querySelector("form");
    formulario.reset();
}

function fecharCampos() {
    var campos = document.querySelectorAll(".campoForm");
    campos.forEach(function(campo) {
        campo.classList.remove("aparecer");
    });
}