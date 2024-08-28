const matriz = document.querySelector('.matriz'); // seleccionando el section contenedor
let buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () =>{
        console.log(button.id)
        destapar(button.id);
    })
    
})

function destapar(id) {
    console.log(id)
}