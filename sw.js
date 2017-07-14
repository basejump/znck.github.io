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
    "url": "/_nuxt/0.nuxt.bundle.4bac4a3a15eacbe6e3b9.js",
    "revision": "7dfa9c17448970cf935851993fa5ae81"
  },
  {
    "url": "/_nuxt/1.nuxt.bundle.c80de3bad9d9dd8a429e.js",
    "revision": "85319a2fd6e84b5a4f58606362314108"
  },
  {
    "url": "/_nuxt/2.nuxt.bundle.0d3e2fbaab828f525cd6.js",
    "revision": "9f7fc1920fa28fb5cd0d802b5fb96a88"
  },
  {
    "url": "/_nuxt/3.nuxt.bundle.dbad4ba5904f44035ed0.js",
    "revision": "d73f83763a90ce646c49815ff6509994"
  },
  {
    "url": "/_nuxt/4.nuxt.bundle.d96af056c86ddbb9ba74.js",
    "revision": "1ef8a8f11aba9d097e082f9434c8a1df"
  },
  {
    "url": "/_nuxt/5.nuxt.bundle.8e076fb7aca1f521c1fc.js",
    "revision": "9d964a8cc59f73a3e7949d68c0f76f73"
  },
  {
    "url": "/_nuxt/6.nuxt.bundle.b2946597d0a27356a3ff.js",
    "revision": "ff1fe795301cbcc40375915c733407a8"
  },
  {
    "url": "/_nuxt/api/blog.json",
    "revision": "302c6bec98dd0ce2f1d050217a6363c0"
  },
  {
    "url": "/_nuxt/api/blog/collections.json",
    "revision": "f7d079cd296bde426b615511aecef0ab"
  },
  {
    "url": "/_nuxt/api/blog/collections/new-in-vue.json",
    "revision": "f0b347995143404d7aab059c1c22f4fb"
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
    "revision": "1409ebec7a8d6e003c9cb307236d0248"
  },
  {
    "url": "/_nuxt/api/blog/posts/2017-07-12-vue-v2-4.json",
    "revision": "abbe06a219cd8b185f4fd28772e79fab"
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
    "revision": "f214468e8deed16b5e7d7af4b40270e0"
  },
  {
    "url": "/_nuxt/client-manifest.json",
    "revision": "d910f0481bcd972b94afbeba7fb44c2c"
  },
  {
    "url": "/_nuxt/index.html",
    "revision": "744fb1c184ce0e85af057191b683d6a2"
  },
  {
    "url": "/_nuxt/manifest.19d4881160b39acf7255.js",
    "revision": "f21cb066f3efa3b291e0bbc07a993a7e"
  },
  {
    "url": "/_nuxt/nuxt.bundle.22968ec5586c863d5cd3.js",
    "revision": "adb92c507dd696c5eeec51d334792c13"
  },
  {
    "url": "/_nuxt/server-bundle.json",
    "revision": "73e45ece96581b80107a7fc7ebf53acc"
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
