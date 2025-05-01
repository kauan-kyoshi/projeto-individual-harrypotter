document.addEventListener('DOMContentLoaded', () => {
    const carouselSlide = document.querySelector('.carousel-slide');
    // Check if carousel elements exist before proceeding
    if (!carouselSlide) {
        console.log("Carousel elements not found on this page.");
        return; // Exit if carousel isn't on the current page
    }

    const carouselItems = document.querySelectorAll('.carousel-item');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    const container = document.querySelector('.carousel-container');

    let currentIndex = 0;
    let itemWidth = 0; // Will be calculated
    let itemsVisible = 1; // Will be calculated

    function calculateLayout() {
        // Ensure items are loaded and have width
        if (carouselItems.length > 0 && carouselItems[0].offsetWidth > 0) {
            // Get the width of a single item (including margin/padding if needed via offsetWidth)
            itemWidth = carouselItems[0].offsetWidth;

            // Calculate how many items fit in the container
            const containerWidth = container.offsetWidth;
            itemsVisible = Math.max(1, Math.floor(containerWidth / itemWidth)); // Show at least 1 item

            // Adjust index if resizing makes current index invalid
            if (currentIndex > carouselItems.length - itemsVisible) {
                currentIndex = Math.max(0, carouselItems.length - itemsVisible);
            }

            updateCarousel(); // Apply initial/updated position
            updateButtons(); // Update button states based on new layout

        } else {
             // Retry calculation shortly if images haven't loaded width yet
             setTimeout(calculateLayout, 100);
        }
    }


    function updateCarousel() {
        if (!carouselSlide || itemWidth === 0) return; // Exit if slide or width not ready

        const moveDistance = currentIndex * itemWidth;
        // Use a negative value for translateX to move left
        carouselSlide.style.transform = `translateX(-${moveDistance}px)`;
    }

    function updateButtons() {
        if (!prevButton || !nextButton) return;

        // Disable prev button if at the beginning
        prevButton.disabled = currentIndex === 0;

        // Disable next button if at the end (considering visible items)
        // The last possible starting index is totalItems - itemsVisible
        nextButton.disabled = currentIndex >= carouselItems.length - itemsVisible;

         // Hide buttons completely if all items are visible
         if(itemsVisible >= carouselItems.length) {
            prevButton.style.display = 'none';
            nextButton.style.display = 'none';
         } else {
            prevButton.style.display = 'block';
            nextButton.style.display = 'block';
         }
    }

    // Event Listeners
    nextButton.addEventListener('click', () => {
        // Move to the next item index, but don't go past the end
        if (currentIndex < carouselItems.length - itemsVisible) {
            currentIndex++;
            updateCarousel();
            updateButtons();
        }
    });

    prevButton.addEventListener('click', () => {
        // Move to the previous item index, but don't go below 0
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
            updateButtons();
        }
    });

    // Recalculate layout on window resize
    let resizeTimer;
    window.addEventListener('resize', () => {
        // Debounce resize event to avoid excessive calculations
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(calculateLayout, 250); // Recalculate after 250ms of no resizing
    });

    // Initial setup
    calculateLayout(); // Calculate initial layout

    // Fallback: If images load late, recalculate once after window load
    window.addEventListener('load', calculateLayout);

}); // End DOMContentLoaded