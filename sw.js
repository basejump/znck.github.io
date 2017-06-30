importScripts('workbox-sw.prod.v1.0.1.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "/_nuxt/0.nuxt.bundle.07b6af4f161d854f2663.js",
    "revision": "1edeb24bbbad8726ee9d349dbc7b5686"
  },
  {
    "url": "/_nuxt/1.nuxt.bundle.afbce129bd4ab2e34daa.js",
    "revision": "ca1c28207df29254e6d22ed20af9e7eb"
  },
  {
    "url": "/_nuxt/2.nuxt.bundle.dcde196465e3f68f2037.js",
    "revision": "c51c5312c2e871a9d23fc1cb9f44fd18"
  },
  {
    "url": "/_nuxt/3.nuxt.bundle.7e697415c2d0863ac3f6.js",
    "revision": "f8522c4f00de92a1b4ad0ac593b891a6"
  },
  {
    "url": "/_nuxt/4.nuxt.bundle.e946f30d08c853050163.js",
    "revision": "5deacd3cca73c976692fab225e5e592b"
  },
  {
    "url": "/_nuxt/5.nuxt.bundle.88266fe2fecbbc5a53c8.js",
    "revision": "60e74ffe52b9aafc5d1bbd4aa2285976"
  },
  {
    "url": "/_nuxt/6.nuxt.bundle.ef82e97fdc29662a0681.js",
    "revision": "6d2cf457c4d67771080ea902839a61e5"
  },
  {
    "url": "/_nuxt/api/blog.json",
    "revision": "8172a4f1551e1463fff9ee4281d46e91"
  },
  {
    "url": "/_nuxt/api/blog/collections.json",
    "revision": "f7d079cd296bde426b615511aecef0ab"
  },
  {
    "url": "/_nuxt/api/blog/collections/new-in-vue.json",
    "revision": "565d93ba07ce18b246e3aa0e6160a188"
  },
  {
    "url": "/_nuxt/api/blog/collections/vue.json",
    "revision": "114de4621253c6b714fd09e6d78bcf39"
  },
  {
    "url": "/_nuxt/api/blog/posts/2017-03-03-first-day-in-vue-js.json",
    "revision": "974392c6377d739ffe11de575843dd54"
  },
  {
    "url": "/_nuxt/api/blog/posts/2017-03-05-fiddle-with-vue-js.json",
    "revision": "1481f1f465b72132fda1f5433863bae6"
  },
  {
    "url": "/_nuxt/api/blog/posts/2017-03-10-provide-inject-in-vue-2-2.json",
    "revision": "86a4f45c2f600017773db899134cdc50"
  },
  {
    "url": "/_nuxt/api/blog/posts/2017-06-28-vue-loader-v13-vue-router-v2-7.json",
    "revision": "ce1156f257f70bcdd30f0530831f6740"
  },
  {
    "url": "/_nuxt/api/blog/tags.json",
    "revision": "0dbdfa699c684c23515ab9db5f9a7963"
  },
  {
    "url": "/_nuxt/api/blog/tags/experience.json",
    "revision": "2efad756522e436193611da631c4c278"
  },
  {
    "url": "/_nuxt/api/blog/tags/javascript.json",
    "revision": "630d0bffd8f8bbf0bd5c11bad2e4497f"
  },
  {
    "url": "/_nuxt/api/blog/tags/vue-loader.json",
    "revision": "3054ca982fb397832925ad6a954e4828"
  },
  {
    "url": "/_nuxt/api/blog/tags/vue-router.json",
    "revision": "4d65983502ed27c282d49b06456791ca"
  },
  {
    "url": "/_nuxt/api/blog/tags/vue.json",
    "revision": "55d4c6eb9e057a168fc2fb822004a941"
  },
  {
    "url": "/_nuxt/client-manifest.json",
    "revision": "9d6243b80e64af9817fc5405ded08de7"
  },
  {
    "url": "/_nuxt/index.html",
    "revision": "744fb1c184ce0e85af057191b683d6a2"
  },
  {
    "url": "/_nuxt/manifest.acf203d5c680a8d966ba.js",
    "revision": "0dbb99556711919178cddfdc183494b2"
  },
  {
    "url": "/_nuxt/nuxt.bundle.10493048c64bc62e53b0.js",
    "revision": "adb92c507dd696c5eeec51d334792c13"
  },
  {
    "url": "/_nuxt/server-bundle.json",
    "revision": "f83b5ad30e2f0a4fec31d327c21d5131"
  },
  {
    "url": "/_nuxt/vendor.bundle.5ce052020f311fb8148e.js",
    "revision": "080a77ff810157c222a29ecb867c4189"
  }
];

const workboxSW = new self.WorkboxSW({
  "cacheId": "test_1.0.0",
  "directoryIndex": "/"
});
workboxSW.precache(fileManifest);
workboxSW.router.registerRoute(/\/_nuxt\/.*/, workboxSW.strategies.cacheFirst());
workboxSW.router.registerRoute(/\/.*/, workboxSW.strategies.networkFirst());
