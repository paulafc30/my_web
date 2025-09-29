// ===============================================
// 1. SMOOTH SCROLL (Desplazamiento Suave)
// Habilita el desplazamiento suave para todos los enlaces internos (ej: #contact)
// ===============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        // Obtiene el destino del enlace (ej: #contact)
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            // Usa el método scrollIntoView con comportamiento 'smooth'
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});


// ===============================================
// 2. FADE-IN AL CARGAR LA PÁGINA (Animación de Carga)
// Hace que los elementos aparezcan suavemente al cargar.
// Requiere un poco de CSS para funcionar (ver paso 2).
// ===============================================

document.addEventListener('DOMContentLoaded', () => {
    // 1. Añade la clase 'js-loaded' al body una vez que el DOM está listo.
    // Esto activa la transición definida en el CSS.
    document.body.classList.add('js-loaded');

    // 2. Opcional: Animar elementos individuales con un ligero retardo
    const sections = document.querySelectorAll('.intro, .projects, .about-details-grid, .footer');
    sections.forEach((section, index) => {
        // Aplica un retardo basado en el índice para un efecto escalonado
        section.style.transitionDelay = `${index * 0.1}s`; 
        section.classList.add('fade-in');
    });
});