var cacheName = "universal-paperclips";
var filesToCache = [
  "./",
  "./index.html",
  "./index2.html",
  "./js/artifacts.js",
  "./js/combat.js",
  "./js/globals.js",
  "./js/main.js",
  "./js/map.js",
  "./js/projects.js",
  "./css/interface.css",
  "./css/titlescreen.css",
  "./favicon.png",
  "./img/logo_pixels.png",
  "./img/title.png",
  "./img/map/big map.png",
  "./img/map/crosshatch.png",
  "./img/map/x.png",
  "./img/artifact/artifact_01.png",
  "./img/artifact/artifact_02.png",
  "./img/artifact/artifact_04.png",
  "./img/artifact/artifact_06.png",
  "./img/artifact/artifact_09.png",
  "./img/artifact/artifact_11.png",
  "./img/artifact/artifact_15.png",
  "./img/artifact/artifact_16.png",
  "./img/artifact/artifact_18.png",
  "./img/artifact/artifact_19.png",
  "./img/artifact/artifact_20.png",
  "./img/artifact/artifact_22.png",
  "./img/artifact/artifact_23.png",
  "./img/artifact/artifact_24.png",
  "./img/artifact/artifact_26.png",
  "./img/artifact/artifact_28.png",
  "./img/artifact/artifact_30.png",
  "./img/artifact/artifact_32.png",
  "./img/artifact/artifact_33.png",
  "./img/artifact/artifact_34.png",
  "./img/artifact/artifact_38.png",
  "./img/artifact/artifact_39.png",
  "./img/artifact/artifact_40.png",
  "./img/artifact/artifact_41.png",
  "./img/artifact/artifact_42.png",
  "./img/artifact/artifact_43.png",
  "./img/artifact/artifact_44.png",
  "./img/artifact/artifact_45.png",
  "./img/artifact/artifact_47.png",
  "./img/artifact/artifact_48.png",
  "./img/artifact/artifact_49.png",
  "./img/artifact/artifact_50.png",
];

/* Start the service worker and cache all of the app's content */
self.addEventListener("install", function (e) {
  e.waitUntil(
    caches.open(cacheName).then(function (cache) {
      return cache.addAll(filesToCache);
    }),
  );
});

/* Serve cached content when offline */
self.addEventListener("fetch", function (e) {
  e.respondWith(
    caches.match(e.request).then(function (response) {
      return response || fetch(e.request);
    }),
  );
});
