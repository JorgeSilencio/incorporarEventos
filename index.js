let boton = document.getElementById("agregar");
let renta = document.getElementById("renta");

boton.addEventListener("mousedown", () => {
    renta.className = "verde"
})
boton.addEventListener("mouseover", () => {
    renta.className = "rojo"
})
boton.addEventListener("mouseout", () => {
    renta.className = "amarillo"
})
boton.addEventListener("click", () => {
    renta.className = "azul"
})