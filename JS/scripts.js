document.querySelectorAll('.section').forEach(section => {
    section.addEventListener('click', (e) => {
        const dimmedImage = section.querySelector('.dimmed-image');
        const isDimmedImageClick = e.target.closest('.dimmed-image');
        const isBoxClick = e.target.closest('.box');
        const isimageWrapper = section.querySelector('.image-wrapper');

        if (isBoxClick) return;

        if (isDimmedImageClick) dimmedImage.classList.add('hidden');
        section.classList.toggle('resize');
        section.querySelectorAll('.box').forEach(box => {
            box.classList.toggle('visibleAndCenter', section.classList.contains('resize'));
            box.classList.toggle('resize', section.classList.contains('resize'));
        });

        // Change the flex-wrap property directly
        if (section.classList.contains('resize')) {
            section.style.flexWrap = 'wrap'; // Enable wrapping when resized
        } else {
            section.style.flexWrap = ''; // Reset flex-wrap property to default
        }

        // Change width of image-wrapper when section is resized
        if (isimageWrapper) {
            if (section.classList.contains('resize')) {
                isimageWrapper.style.width = '0px';
            } else {
                isimageWrapper.style.width = ''; // Reset to original width
            }
        }

        document.querySelectorAll('.section').forEach(s => s !== section && s.classList.toggle('hidden'));
        if (!section.classList.contains('resize')) dimmedImage.classList.remove('hidden');
    });
});
