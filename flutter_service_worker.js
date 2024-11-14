'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "438bfc8931d3438a9be491c29bb88a6b",
"version.json": "cf6a4bef48f9efaf4c3d8f1464f8d940",
"index.html": "626e64eac600e10850feed8d8080914b",
"/": "626e64eac600e10850feed8d8080914b",
"main.dart.js": "241b5751847b04b4498f9dde07e0fdd6",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "b3252463fdfb403d072a3bfed2abe89c",
".git/config": "6d4d415a4ba6347493811ecaba6b5e5c",
".git/objects/68/dc59c3de8f4cfb3b7280c96188522c7297eafc": "0de9c94a1ba9504ad545ab0646366410",
".git/objects/57/ee9c351c5192c4d333cb072ccef37c9f944b5e": "ff7ec5966fc2ecfa757ddc7484fb3bf6",
".git/objects/04/c95444225f027c74a393c1945f208cd5b3cb67": "8b1e0aa5728adf9b3014ac113dd9e63f",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/60/78f34647a3079883cd174b3008ba058b0a8b7d": "438e45e8e304b578b475c11bbb5a4bfa",
".git/objects/5a/b7be9ea8b36d41362a8dc12f460110f38ac7c4": "0143eaf354bcde74641b73df8a2201fe",
".git/objects/05/7dd8e12f912ce46440dc428aa06c0df1240f25": "85b557c22ee2f120e9bfa2519e206c07",
".git/objects/9d/1562f3067357b951a251628538fe5c388afb2e": "084b67b3848b8f059365a45613e4fdad",
".git/objects/bb/c1bd5806c000516dbd4e73dfd7aff626342a67": "13cad7b8472bf59d763ef5ec6cce63b5",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/b4/a7f0cb88ba80db24cd01759e19d56b5ce0f93b": "0440ce88d29f2ae0f2eb855f35fd9371",
".git/objects/d1/3b97674f555c723b81790b6155b6d1ed572882": "13c12ffe49b4b02183fd14dacb607285",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/da953fb5b7680842ba3ca6d81f5756b4cbb134": "270baa2a5b4619e2d2149d71e6ff44a3",
".git/objects/eb/a34ef680090f9c48b035b46e9b10ec0ef29baa": "9d69c8385d15900e4a575c1e83b9cd11",
".git/objects/fc/14c5028ac741025a9ec20f4abbe78d423d376b": "7308addf8c5472af19cab769240bb6a4",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/c8/9006c9a6ea8d15e12a2d9b1b0f5631eb11071c": "00f990bd4d557c6946e8c716f2ac29b3",
".git/objects/c6/c5faa3f97e1b33f8c7bb3b2f018119e531e05b": "5e20d296f62c1cb8d0a75550b724aacf",
".git/objects/27/f7ea91bbcc1121ed42befa2c0651a56eb3e3cb": "e9706e01e9d55848a215681aabf50a4c",
".git/objects/89/92e34c461924d14e725909cc23820d6e7ba179": "df1488308dd91aa7ec182af990759896",
".git/objects/45/c6e8d4f1a8b6218791c378c304cd468f106cb2": "df143a921fda2b2cf22b718f67de24e3",
".git/objects/1f/22b901683059fa57bf3174b7a42fb4df2ed990": "24a571a3ee91e732d90538951daf53d2",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/1f/2f284211eb85b31aa457fbeb0a5e39c85c9e54": "8c863f6102639e2bcd2c4d6b8242da52",
".git/objects/74/78766b0c3c145e0a8d0562605f0cc9db0c2034": "f024c28dd2a1629819f486b375925242",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/23b5048ca94da1fc1ffae70d706c1362b5b1c2": "04e1a47b56686a33642237be9a392724",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/dbf2c8d7e05989656865261ba4bad8c454eb02": "cf7375ecc6cb6a7a163f513bc0d7ade1",
".git/objects/9f/ae0f3c5d581356921f84c30729cc46f4635577": "5fc24d75271ecd1a107ff12a5b30cd86",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/00/63b4d77174d1da4847f727d56432dc06738184": "d26d066fc2ec750e9dc4985c8a7313b4",
".git/objects/31/d320814bf017a0544a776415f5e0b70d875317": "3312983dd8c46f126a32645d2f824094",
".git/objects/3a/ec8b1d34a89985510777eee07228f0d4a887e5": "bd6f9d79c62e6ba387402b3abd4053a8",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/53/31931e20380294370e7105087d710d2d0f782f": "4fd58320cda3719aef07c093e82459f7",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/06/5fbd120352e31214fba42ec3287019dd8df2e0": "bb7ec6990293d34292a72caf6b71b894",
".git/objects/39/74fa77a657bea4ce8f2831338b791ec2b3e728": "ce007d0b657ff810f37dbbfb9d732a91",
".git/objects/52/5f8892d82ec9313babc8670293c113208df185": "a3ac2696ad8589a805c01f1bb9b75e9c",
".git/objects/55/7b6db7d46f68f65a315f48884b6a65f5f52e55": "dcd598393f72bf2d4ba76f552ebc42fe",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/90/e6f07453db326f618fa1f64470beb55167aa96": "949d2a8227f9fbc2e0d57d94eb059fb9",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/6ef26bd1001cabe1ed866c9cb42399ba5da804": "e7c67651ec7e45056d65d4de7d913c6c",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/dd/6cdf16ba23f488312346ffd92b0f1d9a1631a1": "ffefb625342d0f796a2106c7bcd307c4",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/fa022e22487380613157d6e2077f16f31ea219": "05f396df999c5c47fd16beb8443d2610",
".git/objects/a8/748fcd2a145567c1cb06063c106320ee13fd95": "354668ef79d8844e1edad1601fedc99d",
".git/objects/b0/353fb81604719273fbaa87a10dfc5e5fa33e02": "bd47b0559397bf36893468c34105098a",
".git/objects/a6/2e84ec57b848dbd3ee426cd703a1cfcee6c033": "c2937a1f3a458032029a0c44211c8df5",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ea/167a44f95efd6dad3c4ede68a2f799af994b04": "b24e684fc4f87d40fdfd86b6a9c33e7c",
".git/objects/e1/3db4f74e42363809fa3d73b5581b5e1c61dc2d": "c22357cf386d4ec3f37bdbd3fcdf80b7",
".git/objects/e6/df7b8cb1b0619ff32494a00c1afb03a086af6c": "0697a025731d1654be8a9e8ad982e007",
".git/objects/f9/5bf930b6847c1b01d43eebd4c7c24fde0f3bd2": "264d266a60b134881be888fe527c22ae",
".git/objects/f7/d2b162dc457b123f3b87419f1086409ffb4f72": "4104584383590132d477548476fd8829",
".git/objects/ff/57b198afd61105526d5c16d78a5d488a81638c": "da21d829d2db79ae241413efc7d6ce1d",
".git/objects/c5/8ee2457377a69425c690d0277d93d270e1ecf8": "9089fe72b04c22bc2567ff7fdfd9ef2b",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/2c/f5cf4ec3840a5007e3cb8e08157ccd0df0c2a7": "d69771542ca0def5912fde984604ac4e",
".git/objects/1b/208b79f419b7f60c691a7c268db551919dc2f1": "9e56c51a1b9b7771e817a472842cdb3e",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/8d/e35c2812809f4f6356c4b34ea360ccf12aa161": "490845cc1ca42042429db0c3533caeb7",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/2e/5d657b528b02a54e0ae65354b3ac5d78dbde8d": "33388f2413e4fce3176e464ab751d910",
".git/objects/13/108995c95d7699d93393f77a4dd54af15a0dc1": "7ee2af1a44d58c0da1bfd2cf905eae7f",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7b63641924936c6ae1a71685543b797d",
".git/logs/refs/heads/main": "7296743d9de03d793a0be1cff6cc4e8f",
".git/logs/refs/remotes/origin/main": "2355cf82e2700f59180fba34e61d6579",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "73fb032ae0f29864a1a53ee57acc59de",
".git/refs/remotes/origin/main": "73fb032ae0f29864a1a53ee57acc59de",
".git/index": "0ed3dea4c13f12fade3c77218033f034",
".git/COMMIT_EDITMSG": "26ab0db90d72e28ad0ba1e22ee510510",
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
