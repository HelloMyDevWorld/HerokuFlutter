'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "c6772928aa819ed8a8a332b108fccfdf",
"assets/assets/fonts/Montserrat-Bold.ttf": "d3085f686df272f9e1a267cc69b2d24f",
"assets/assets/fonts/Montserrat-Regular.ttf": "07689d4eaaa3d530d58826b5d7f84735",
"assets/assets/images/lp_image.png": "5aad4d4216174954f5228d7d268546e8",
"assets/FontManifest.json": "957423d262d0760a97e6d1ba8e4280e1",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "0000d255865246c9b55862d96ffd3089",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "9a62a954b81a1ad45a58b9bcea89b50b",
"index.html": "523e8344930597d4256b511ae9095e4b",
"/": "523e8344930597d4256b511ae9095e4b",
"main.dart.js": "79c97fdceb684666872522fa5e830a6b"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
