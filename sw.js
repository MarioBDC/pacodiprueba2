;
//asignar un nombre y versión al cache
const CACHE_NAME = 'v1_cache_pacodi',
  urlsToCache = [
    './',
    'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200',
    'https://fonts.googleapis.com/css2?family=Mitr&display=swap',
    'https://fonts.gstatic.com',
    'https://fonts.googleapis.com',
    
    './style.css',
    './css/addCard.css',
    './css/cobrar.css',
    './css/Index.css',
    './css/normalize.css',
    './css/registro.css',
    
    './script.js',
    './js/EstadosyMunicipios.js',
    './js/html5-qrcode.min.js',
    './js/jquery.min.js',
    './js/qr.js',
    './js/qrcode.min.js',

    './img/Logo300x100.png',
    './img/cobrar300x100.png',
    './img/logout_bracket.png',
    './img/iconLogo.png',
    './img/favicon.png'
  ]

//durante la fase de instalación, generalmente se almacena en caché los activos estáticos
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache)
          .then(() => self.skipWaiting())
      })
      .catch(err => console.log('Falló registro de cache', err))
  )
})

//una vez que se instala el SW, se activa y busca los recursos para hacer que funcione sin conexión
self.addEventListener('activate', e => {
  const cacheWhitelist = [CACHE_NAME]

  e.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            //Eliminamos lo que ya no se necesita en cache
            if (cacheWhitelist.indexOf(cacheName) === -1) {
              return caches.delete(cacheName)
            }
          })
        )
      })
      // Le indica al SW activar el cache actual
      .then(() => self.clients.claim())
  )
})

//cuando el navegador recupera una url
self.addEventListener('fetch', e => {
  //Responder ya sea con el objeto en caché o continuar y buscar la url real
  e.respondWith(
    caches.match(e.request)
      .then(res => {
        if (res) {
          //recuperar del cache
          return res
        }
        //recuperar de la petición a la url
        return fetch(e.request)
      })
  )
})
