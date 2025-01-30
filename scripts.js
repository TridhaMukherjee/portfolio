document.addEventListener('DOMContentLoaded', () => {
    // Form submission handler
    const form = document.querySelector('form');

    form.addEventListener('submit', async (event) => {
        event.preventDefault(); // Prevent default form submission

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            // Send form data to Getform
            const formData = new FormData();
            formData.append('name', name);
            formData.append('email', email);
            formData.append('message', message);

            try {
                const response = await fetch('https://getform.io/f/amddzwdb', {
                    method: 'POST',
                    body: formData
                });

                if (response.ok) {
                    alert(`Thank you, ${name}! Your message has been sent.`);
                    form.reset();
                } else {
                    alert('Something went wrong. Please try again later.');
                }
            } catch (error) {
                console.error('Error:', error);
                alert('An error occurred. Please check your internet connection and try again.');
            }
        } else {
            alert('Please fill out all fields before submitting.');
        }
    });

    // Animation on scroll for skills section
    const skillCards = document.querySelectorAll('.skills .skill');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-skill');
            }
        });
    }, {
        threshold: 0.5
    });

    skillCards.forEach((card) => {
        observer.observe(card);
    });
});

// Add a 'visible' class when the image is scrolled into view
document.addEventListener('DOMContentLoaded', function () {
    const photo = document.getElementById('about-photo');
    const rect = photo.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom >= 0) {
        photo.classList.add('visible');
    }
});