importScripts("https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js");const CACHE="pwabuilder-page",offlineFallbackPage="off.html";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),self.addEventListener("install",(async e=>{e.waitUntil(caches.open(CACHE).then((e=>e.add("off.html"))))})),workbox.navigationPreload.isSupported()&&workbox.navigationPreload.enable(),self.addEventListener("fetch",(e=>{"navigate"===e.request.mode&&e.respondWith((async()=>{try{const a=await e.preloadResponse;return a||await fetch(e.request)}catch(e){const a=await caches.open(CACHE);return await a.match("off.html")}})())}));