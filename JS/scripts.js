
document.querySelectorAll('.section').forEach(section => {
    section.addEventListener('click', (e) => {
        const dimmedImage = section.querySelector('.dimmed-image');
        const isDimmedImageClick = e.target.closest('.dimmed-image');
        const isBoxClick = e.target.closest('.box');

        if (isBoxClick) return;

        if (isDimmedImageClick) dimmedImage.classList.add('hidden');
        section.classList.toggle('resize');
        section.querySelectorAll('.box').forEach(box => {
            box.classList.toggle('visibleAndCenter', section.classList.contains('resize'));
            box.classList.toggle('resize', section.classList.contains('resize'));
        });

        document.querySelectorAll('.section').forEach(s => s !== section && s.classList.toggle('hidden'));
        if (!section.classList.contains('resize')) dimmedImage.classList.remove('hidden');
    });
});