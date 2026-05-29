function abrir_cerrar_menu() {
  const menu = document.getElementById('menu');
  menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
}

document.addEventListener('DOMContentLoaded', function() {
    const dropdownHeader = document.querySelector('.dropdown-header');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    const selectedEdad = document.getElementById('selected-edad');
    const dropdownItems = document.querySelectorAll('.dropdown-item');

    // Manejar el clic en el encabezado para mostrar/ocultar el menú
    dropdownHeader.addEventListener('click', function() {
        dropdownMenu.classList.toggle('visible');
        dropdownHeader.classList.toggle('activo');
    });

    // Manejar el clic en los elementos del menú para seleccionar una opción
    dropdownItems.forEach(item => {
        item.addEventListener('click', function() {
            const value = this.getAttribute('data-value');
            selectedEdad.textContent = value;
            dropdownMenu.classList.remove('visible');
            dropdownHeader.classList.remove('activo');
        });
    });

    // Ocultar el menú si se hace clic fuera de él
    document.addEventListener('click', function(event) {
        if (!dropdownHeader.contains(event.target) && !dropdownMenu.contains(event.target)) {
            dropdownMenu.classList.remove('visible');
            dropdownHeader.classList.remove('activo');
        }
    });
});
// Inicializar EmailJS
emailjs.init("Hoe_W4Ku5TshEidkw"); // Tu clave pública

// Enviar el formulario al hacer submit
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registro-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    emailjs.sendForm("service_uu7ktx8", "template_wh0v7xw", form)
      .then(function () {
        alert("¡Registro enviado con éxito!");
        form.reset();
      })
      .catch(function (error) {
        alert("Error al enviar el registro: " + error.text);
      });
  });
});