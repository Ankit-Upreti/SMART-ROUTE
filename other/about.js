document.addEventListener('DOMContentLoaded', () => {
    // Accordion Effect for Team Member Descriptions
    const teamCards = document.querySelectorAll('.team-card');

    teamCards.forEach(card => {
        card.addEventListener('click', () => {
            const description = card.querySelector('.member-description');
            description.classList.toggle('active');
            
            // Optional: Close other descriptions if only one should be open
            teamCards.forEach(otherCard => {
                if (otherCard !== card) {
                    otherCard.querySelector('.member-description').classList.remove('active');
                }
            });
        });
    });

    // Smooth Scrolling
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Lazy Loading of Images
    const lazyLoadImages = document.querySelectorAll('img[data-src]');
    
    const loadImage = (image) => {
        image.src = image.getAttribute('data-src');
        image.removeAttribute('data-src');
    };

    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                loadImage(entry.target);
                imageObserver.unobserve(entry.target);
            }
        });
    });

    lazyLoadImages.forEach(image => {
        imageObserver.observe(image);
    });
});
