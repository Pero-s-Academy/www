document.addEventListener("DOMContentLoaded", function() {
    // Hamburger menu functionality
    const hamburgerMenu = document.getElementById('hamburger-menu');
    hamburgerMenu.addEventListener('click', toggleNav);

    // Dropdown menu functionality
    const dropdownButtons = document.querySelectorAll('.dropdown-btn');
    dropdownButtons.forEach(button => {
        button.addEventListener('click', function() {
            const dropdownId = this.getAttribute('data-dropdown-id');
            toggleDropdown(dropdownId);
        });
    });

    // Form validation and submission
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        if (message.trim() === '') {
            alert('Please enter a message.');
            return;
        }

        alert('Form submitted successfully!');
        // Actual form submission logic goes here
    });

    // Search functionality
    document.getElementById('search-button').addEventListener('click', search);
    document.getElementById('search-input').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            search();
        }
    });
});