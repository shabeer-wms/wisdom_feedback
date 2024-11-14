'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "cf3603f7dbee4543d5be1fa685a8c385",
"version.json": "cf6a4bef48f9efaf4c3d8f1464f8d940",
"index.html": "16ed09aafce293722cc40657c3ca1d7e",
"/": "16ed09aafce293722cc40657c3ca1d7e",
"main.dart.js": "825aa3dfe9fca9f03647e2e6b438ad2c",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "b3252463fdfb403d072a3bfed2abe89c",
"assets/AssetManifest.json": "95848f576a6a38293b1e4a87d02d8c75",
"assets/NOTICES": "c9977fa7c91f571361d3431e55143e4d",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "25e6a69de088e401f93fcc0bc3907ee3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/flutter_emoji_feedback/assets/hd_terrible.svg": "1a0819da178e3c410a7b364d6f816e81",
"assets/packages/flutter_emoji_feedback/assets/hd_good.svg": "31ba501e13250396d7704ca551203bef",
"assets/packages/flutter_emoji_feedback/assets/three_d_awesome.svg": "3a0b77d364b79cf0fe5ef5ca85586fed",
"assets/packages/flutter_emoji_feedback/assets/hd_bad.svg": "293ea8eee3358a1911aad97a397b8565",
"assets/packages/flutter_emoji_feedback/assets/three_d_good.svg": "9aaf87f5f209510833c59629e7fd05bc",
"assets/packages/flutter_emoji_feedback/assets/classic_terrible.svg": "47b9d9eaa785b73e674f97061bdbfa16",
"assets/packages/flutter_emoji_feedback/assets/three_d_very_good.svg": "bca787a0f30160f5342b3b214b7504cc",
"assets/packages/flutter_emoji_feedback/assets/three_d_bad.svg": "8186407716be2096c16077d00d9abce0",
"assets/packages/flutter_emoji_feedback/assets/three_d_terrible.svg": "a7ed9fbba9b0df8d27851e312bd90f77",
"assets/packages/flutter_emoji_feedback/assets/hd_awesome.svg": "c8187fcd29f7dc9fc13e9f3be469a5e9",
"assets/packages/flutter_emoji_feedback/assets/flat_good.svg": "af2e7cbeb973e46aff6b6f7b3616f942",
"assets/packages/flutter_emoji_feedback/assets/hd_very_good.svg": "e4834557f40e22d92ae80caabace6045",
"assets/packages/flutter_emoji_feedback/assets/flat_awesome.svg": "87b615239f89e9ac6a7f524bb7049a0c",
"assets/packages/flutter_emoji_feedback/assets/classic_good.svg": "f2ac6543155e1370d7abea00d8b63ff2",
"assets/packages/flutter_emoji_feedback/assets/flat_bad.svg": "3dbdced0f53be2c8595d63a469a7fe04",
"assets/packages/flutter_emoji_feedback/assets/classic_awesome.svg": "6ef07562f29101a70bf3fc100660bfe2",
"assets/packages/flutter_emoji_feedback/assets/flat_very_good.svg": "d67ffdb07208539701ef35b272c9b9ab",
"assets/packages/flutter_emoji_feedback/assets/classic_very_good.svg": "6c6ffb3a6a4c1dcd5adb56be222b7474",
"assets/packages/flutter_emoji_feedback/assets/classic_bad.svg": "780bcf1cf594a6b492967d91307ed064",
"assets/packages/flutter_emoji_feedback/assets/flat_terrible.svg": "c0d7a6b77e083c8636c17950349ce401",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "986d94c3093a0a807aefb2ad6da2d2bd",
"assets/fonts/MaterialIcons-Regular.otf": "9b9a4f5dd3ea7677d1fcdd4fe4c37956",
"assets/assets/youth.png": "63bd66d239fbc239882522b6d7b156b9",
"assets/assets/proface.png": "55ecbba7c63eb342d3f2637d5f015c74",
"assets/assets/success.png": "70b315c1a497ea8b570c2d637f54aab2",
"assets/assets/bg.png": "4cc6bfc26988c5a2aa31009d8c350c20",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
