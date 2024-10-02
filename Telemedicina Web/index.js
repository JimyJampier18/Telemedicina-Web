// Espera a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    // Inicializar el carrusel
    const carouselItems = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;

    // Función para mostrar el siguiente elemento del carrusel
    function showNextSlide() {
        carouselItems[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % carouselItems.length; // Vuelve al inicio
        carouselItems[currentIndex].classList.add('active');
    }

    // Cambia de imagen cada 5 segundos
    setInterval(showNextSlide, 5000);

    // Scroll suave para enlaces de anclaje
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    scrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Función para mostrar un mensaje de alerta
    const contactButton = document.querySelector('.contact-form button');
    contactButton.addEventListener('click', function(e) {
        e.preventDefault(); // Evita que el formulario se envíe
        alert("¡Gracias por contactarnos! Nos pondremos en contacto contigo pronto.");
    });
});
