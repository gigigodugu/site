document.addEventListener('DOMContentLoaded', () => {
    const heroContent = document.querySelector('.hero-content');
    const heroSection = document.getElementById('hero-section'); // Get by ID for clarity
    const header = document.getElementById('header');
    let heroSectionHeight; // Will be set on load and resize

    // Function to update parallax and sticky header
    const updateScrollEffects = () => {
        const scrollPosition = window.pageYOffset;

        // Parallax for hero content
        heroContent.style.transform = `translateY(${scrollPosition * 0.4}px)`;

        // Parallax for hero background image
        // Move background slower than scroll: positive scroll, negative background position
        heroSection.style.backgroundPositionY = `${-scrollPosition * 0.2}px`;

        // Sticky Navigation Bar logic
        if (!heroSectionHeight) { // Calculate height if not already set
            heroSectionHeight = heroSection.offsetHeight;
        }

        if (scrollPosition > heroSectionHeight - header.offsetHeight) {
            header.classList.add('visible');
        } else {
            header.classList.remove('visible');
        }

        // Request next animation frame for smooth updates
        requestAnimationFrame(updateScrollEffects);
    };

    // Start the scroll effects loop
    // Use an initial call to set positions correctly on load
    heroSectionHeight = heroSection.offsetHeight; // Set initial height
    updateScrollEffects();


    // Recalculate hero section height on window resize
    window.addEventListener('resize', () => {
        heroSectionHeight = heroSection.offsetHeight;
    });

    // Audio Pronunciation (Paavan section)
    const pronounceNameIcon = document.getElementById('pronounce-name');
    const nameAudio = document.getElementById('name-audio');

    if (pronounceNameIcon && nameAudio) {
        pronounceNameIcon.addEventListener('click', () => {
            nameAudio.play();
        });
    }

    // Interactive Pill-Styled Boxes (Placeholder for more complex interactions)
    // The CSS already handles hover effects. Add JS here if specific click behaviors are needed.
    const kbeautyBox = document.querySelector('.kbeauty-box-pill');
    if (kbeautyBox) {
        kbeautyBox.addEventListener('click', () => {
            console.log("K-beauty box clicked!");
            // Example: Maybe show a modal with K-beauty tips or trends
        });
    }

    const quoteBox = document.querySelector('.quote-box-pill');
    if (quoteBox) {
        quoteBox.addEventListener('click', () => {
            console.log("Quote box clicked!");
            // Example: Expand the quote or show more related quotes
        });
    }

    // Add similar event listeners for other pills if specific interactions are desired
});
