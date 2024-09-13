const descriptionBtns = document.querySelectorAll('.product-description-btn');
const overlay = document.querySelector('.product-description-overlay');
const descriptionTitle = document.querySelector('.description-title');
const descriptionContent = document.querySelector('.description-content');
const closeBtn = document.querySelector('.close-btn');

descriptionBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const description = btn.dataset.description;
        descriptionTitle.textContent = "Descripción:";
        descriptionContent.textContent = description;
        overlay.style.display = 'block';
    });
});

closeBtn.addEventListener('click', () => {
    overlay.style.display = 'none';
});
