const burgerBtn = document.getElementById('burgerBtn');
const menuOverlay = document.getElementById('menuOverlay');
const body = document.body;

burgerBtn.addEventListener('click', () => {
    // Toggle the "X" shape
    burgerBtn.classList.toggle('active');
    
    // Toggle the Fullscreen menu
    menuOverlay.classList.toggle('open');
    
    // Prevent scrolling when menu is open
    if (menuOverlay.classList.contains('open')) {
        body.style.overflow = 'hidden';
    } else {
        body.style.overflow = 'auto';
    }
});

// Close menu when a link is clicked
const mobileLinks = document.querySelectorAll('.mobile-link');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        burgerBtn.classList.remove('active');
        menuOverlay.classList.remove('open');
        body.style.overflow = 'auto';
    });
});




document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const accordionItem = header.parentElement;
        const accordionContent = accordionItem.querySelector('.accordion-content');
        const isItemActive = accordionItem.classList.contains('active');

        // 1. (Optional) Close all other open items for a true single-select accordion
        document.querySelectorAll('.accordion-item.active').forEach(activeItem => {
            if (activeItem !== accordionItem) {
                activeItem.classList.remove('active');
                activeItem.querySelector('.accordion-content').style.maxHeight = 0;
                activeItem.querySelector('.accordion-header').setAttribute('aria-expanded', 'false');
            }
        });

        // 2. Toggle active class for arrow flip and visibility state
        accordionItem.classList.toggle('active');

        // 3. Handle smooth height animation
        if (accordionItem.classList.contains('active')) {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + "px"; // Dynamically set height
            header.setAttribute('aria-expanded', 'true');
        } else {
            accordionContent.style.maxHeight = 0; // Collapse
            header.setAttribute('aria-expanded', 'false');
        }
    });
});


