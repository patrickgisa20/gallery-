document.addEventListener('DOMContentLoaded', () => {
    const images = [
        'image1.jpg', 'image2.jpg', 'image3.jpg', // Add your image paths here
    ];
    
    const thumbnailsContainer = document.querySelector('.thumbnails');
    const fullSizeImage = document.getElementById('full-size-image');
    
    images.forEach((src, index) => {
        const img = document.createElement('img');
        img.src = src;
        img.alt = `Thumbnail ${index + 1}`;
        img.addEventListener('click', () => {
            fullSizeImage.src = src;
        });
        thumbnailsContainer.appendChild(img);
    });
    
    // Set the first image as the default full-size image
    if (images.length > 0) {
        fullSizeImage.src = images[0];
    }
});
