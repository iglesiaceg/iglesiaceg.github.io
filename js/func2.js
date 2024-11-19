function responsiveMenu() {
    let x = document.getElementById("nav");

    if (x.className === "") {
        x.className = "responsive";

        // Creamos el elemento que cierra el menú
        let span = document.createElement("span");
        span.innerHTML = "X";
        span.style.fontSize = "30px";
        span.style.color = "#9a59e6";
        span.style.cursor = "pointer";
        x.appendChild(span);

        // Función para cerrar el menú al hacer clic en el botón X
        span.onclick = function () {
            closeMenu();
        };

        // Función para cerrar el menú al hacer clic fuera de él
        function handleOutsideClick(event) {
            if (!x.contains(event.target)) {
                closeMenu();
            }
        }

        // Función para cerrar el menú y limpiar eventos
        function closeMenu() {
            x.className = "";
            span.remove();
            document.removeEventListener("click", handleOutsideClick);
        }

        // Agregamos el evento al documento
        setTimeout(() => {
            document.addEventListener("click", handleOutsideClick);
        }, 0); // Timeout para evitar disparar el evento al abrir el menú
    } else {
        x.className = "";
    }
}
