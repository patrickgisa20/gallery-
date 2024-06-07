document.addEventListener('DOMContentLoaded', function() {
    const thumbnails = document.querySelectorAll('.thumbnail');
    const overlay = document.querySelector('.fullsize-overlay');
    const fullsizeImage = document.querySelector('.fullsize-image');

    thumbnails.forEach(thumbnail => {
        const img = thumbnail.querySelector('img');
        const details = thumbnail.querySelector('.details');

        thumbnail.addEventListener('mouseover', function() {
            details.style.opacity = 1;
        });

        thumbnail.addEventListener('mouseout', function() {
            details.style.opacity = 0;
        });

        thumbnail.addEventListener('click', function() {
            fullsizeImage.src = img.src;
            overlay.style.display = 'flex';
        });
    });

    overlay.addEventListener('click', function() {
        overlay.style.display = 'none';
    });
});
