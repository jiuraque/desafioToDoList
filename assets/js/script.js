const TAREA = {
    id: Number,
    tarea: String,
    check: Boolean,
}
let contador = 0;
function aumentarContador(){
    contador++;
    TAREA.id = contador;
}

const tareaIngresada = document.getElementById("tareaCampo");

tareaIngresada.addEventListener("submit", (e) =>{
    e.preventDefault();

    const tareaInput = document.getElementById("tareaInput");
    aumentarContador();
    TAREA.tarea = tareaInput.value;
    TAREA.check = false;

    console.log(TAREA);

    

});

