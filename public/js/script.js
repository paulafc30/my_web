document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('#contacto form');

    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();

            // Deshabilita el botón y muestra un mensaje de carga
            const submitButton = contactForm.querySelector('button[type="submit"]');
            submitButton.disabled = true;
            submitButton.textContent = 'Enviando...';

            const form = new FormData(contactForm);
            
            try {
                const response = await fetch(contactForm.action, {
                    method: 'POST',
                    body: form,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    // Muestra un mensaje de éxito y resetea el formulario
                    alert('¡Mensaje enviado correctamente! Te contactaré pronto.');
                    contactForm.reset();
                } else {
                    // Muestra un mensaje de error
                    alert('Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.');
                }
            } catch (error) {
                // Maneja errores de red
                alert('Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.');
            } finally {
                // Habilita el botón de nuevo
                submitButton.disabled = false;
                submitButton.textContent = 'Enviar';
            }
        });
    }
});