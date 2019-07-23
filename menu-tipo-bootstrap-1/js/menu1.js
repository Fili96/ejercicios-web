const d = document;
const body = d.body;
const botonMenu = d.getElementById("botonMenu");
const listaMenu = d.getElementById("listaMenu");

console.log(listaMenu);
console.log(botonMenu);

body.addEventListener("click", (e) => {
    
    if (e.target.parentNode == botonMenu) {
        e.preventDefault();
        listaMenu.classList.toggle("is-active")
    }
});
