document.querySelectorAll('.section').forEach(section =>
    section.addEventListener('click', () => {
        // Toggle the .hidden class for all other sections
        document.querySelectorAll('.section').forEach(otherSection => {
            if (otherSection !== section) {
                otherSection.classList.toggle('hidden');
            }
        });
        // Toggle the .visible and .resize classes for the boxes in the clicked section
        section.querySelectorAll('.box').forEach(box => {
            box.classList.toggle('visibleAndCenter');
            box.classList.toggle('resize');
        });
        // Toggle the .resize class for the section itself
        section.classList.toggle('resize');
    })
);