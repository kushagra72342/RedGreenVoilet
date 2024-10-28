document.querySelectorAll('.gallery-item').forEach(item => {
    let hoverTimeout;

    item.addEventListener('mouseenter', () => {
        clearTimeout(hoverTimeout); // Clear any previous timeout
        hoverTimeout = setTimeout(() => {
            item.classList.add('hovered');
        }, 100); // Delay to avoid stutter when moving quickly between images
    });

    item.addEventListener('mouseleave', () => {
        clearTimeout(hoverTimeout); // Prevent adding the class if mouse leaves quickly
        item.classList.remove('hovered');
    });
});

document.querySelectorAll('.gallery-item img').forEach(img => {
    img.addEventListener('mouseenter', () => {
        const fullscreen = document.createElement('div');
        fullscreen.classList.add('fullscreen-overlay');

        const zoomedImg = document.createElement('img');
        zoomedImg.src = img.src;
        zoomedImg.classList.add('fullscreen');

        fullscreen.appendChild(zoomedImg);
        document.body.appendChild(fullscreen);

        setTimeout(() => {
            fullscreen.classList.add('show');
        }, 10);

        fullscreen.addEventListener('click', () => {
            fullscreen.classList.remove('show');
            setTimeout(() => {
                fullscreen.remove();
            }, 400);
        });
    });
});
