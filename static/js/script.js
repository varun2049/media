document.querySelectorAll('.expand-button').forEach(button => {
    let clickCount = 0;
    const maxClicks = 5;
    
    button.addEventListener('click', () => {
        const targetSection = document.getElementById(button.getAttribute('data-target'));
        const targetGrid = targetSection.querySelector('.grid-container');
        
        if (clickCount < maxClicks) {
            clickCount++;
            for (let i = 0; i < 12; i++) { // Adds 3 more rows, 12 items in a grid of 4 columns
                const newItem = document.createElement('div');
                newItem.className = 'grid-item';
                targetGrid.appendChild(newItem);
            }
            targetSection.style.maxHeight = `${800 + (clickCount * 800)}px`;
            if (clickCount === maxClicks) {
                button.classList.add('collapsed');
            }
        } else {
            // Collapse logic
            targetSection.style.maxHeight = '800px';
            targetGrid.innerHTML = '';
            for (let i = 0; i < 12; i++) {
                const newItem = document.createElement('div');
                newItem.className = 'grid-item';
                targetGrid.appendChild(newItem);
            }
            clickCount = 0;
            button.classList.remove('collapsed');
        }
    });
});
