const form = document.getElementById("agergarform")
const tareasLista = document.getElementById("tareasLista")
const eliminarCompletadas = document.getElementById("eliminarCompletadas")

form.addEventListener("submit", function(event){
    event.preventDefault();

    const nuevaTarea = document.getElementById("tarea").value;

    const nuevaTareaLista = document.createElement('li')
    nuevaTareaLista.innerText = nuevaTarea;

    nuevaTareaLista.addEventListener('click', function(){
        nuevaTareaLista.classList.toggle('completada');
    })
    
    tareasLista.appendChild(nuevaTareaLista);

    document.getElementById('tarea').value= " "

})

eliminarCompletadas.addEventListener('click', function(){

const tareasCompletadas = document.querySelectorAll('.completada')

tareasCompletadas.forEach(function(tareaCompletada) {
    tareaCompletada.remove();
});
})