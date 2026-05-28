// const openButotn querySelectorAll ('')
const botaoTema = document.getElementById("toggleTema");

botaoTema.addEventListener("click", () => {

    document.body.classList.toggle("light_mode");

    if(document.body.classList.contains("light_mode")){
        botaoTema.innerHTML = "☀️";
    }

    else{
        botaoTema.innerHTML = "🌙";
    }

});