function createGIF() {
    const gif = document.createElement('img');
    gif.classList.add('gif');
    gif.src = 'img/Comida/d6af853f9061765387ff795f5fa55df5.gif'; // Reemplaza 'ruta_del_gif.gif' con la ruta de tu GIF
    gif.style.left = `${Math.random() * 100}vw`;
    gif.style.top = `${Math.random() * 100}vh`;
    document.querySelector('.gifs-container').appendChild(gif);
}

function startGIFsAnimation() {
    for (let i = 0; i < 100; i++) {
        setTimeout(createGIF, i * 100);
    }
    setTimeout(() => {
        document.querySelector('.gifs-container').innerHTML = '';
    }, 7000);
}

