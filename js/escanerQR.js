let scanner = new Instascan.Scanner({ video: document.getElementById('preview') });

scanner.addListener('scan', function (content) {
    // Comprobar si el contenido del QR es una URL
    if (isURL(content)) {
        window.location.href = content;
    }
});

Instascan.Camera.getCameras().then(function (cameras) {
    if (cameras.length > 0) {
        scanner.start(cameras[0]);
    } else {
        console.error('No se encontraron cámaras en el dispositivo.');
    }
}).catch(function (error) {
    console.error('Error al acceder a las cámaras:', error);
});

function isURL(text) {
    try {
        new URL(text);
        return true;
    } catch (_) {
        return false;
    }
}