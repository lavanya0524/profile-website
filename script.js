const form = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const messageError = document.getElementById('message-error');
const confirmationMessage = document.getElementById('confirmation-message');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        clearErrors();

        // Validate name
        if (nameInput.value.trim() === '') {
            nameError.textContent = 'Please enter your name.';
            return;
        }

        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
            emailError.textContent = 'Please enter a valid email address.';
            return;
        }

        // Validate message
        if (messageInput.value.trim() === '') {
            messageError.textContent = 'Please enter a message.';
            return;
        }

        // Form submission successful
        confirmationMessage.textContent = 'Your message has been sent!';
        form.reset();
    });

    function clearErrors() {
        nameError.textContent = '';
        emailError.textContent = '';
        messageError.textContent = '';
        confirmationMessage.textContent = '';
    }
