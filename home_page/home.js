document.addEventListener('DOMContentLoaded', () => {
    const bannerImages = document.querySelectorAll('.banner-image');
    let currentImageIndex = 0;

    function changeImage(index) {
        bannerImages.forEach((image, i) => {
            image.classList.toggle('active', i === index);
        });
    }

    // Scroll event listener
    window.addEventListener('wheel', (event) => {
        if (event.deltaY > 0) {
            currentImageIndex = (currentImageIndex + 1) % bannerImages.length;
        } else {
            currentImageIndex = (currentImageIndex - 1 + bannerImages.length) % bannerImages.length;
        }
        changeImage(currentImageIndex);
    });

    // Initial display
    changeImage(currentImageIndex);
});
