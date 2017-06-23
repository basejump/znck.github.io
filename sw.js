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
    "url": "/_nuxt/0.nuxt.bundle.c7e4cb964ee640d1f460.js",
    "revision": "a8b1df63a15be6810097f7d1802d835d"
  },
  {
    "url": "/_nuxt/1.nuxt.bundle.3795e19f6242f79e7b24.js",
    "revision": "1d406d15f8c768662c25224ea22037c4"
  },
  {
    "url": "/_nuxt/2.nuxt.bundle.1e0a294113db4fdd7948.js",
    "revision": "3ef9e87f9a56692037c55df2c54a30e9"
  },
  {
    "url": "/_nuxt/3.nuxt.bundle.02cdb5bceeb5163c69bc.js",
    "revision": "56d02ea6198069b45629c7d403fe8327"
  },
  {
    "url": "/_nuxt/4.nuxt.bundle.4e723778c19b7f81600b.js",
    "revision": "50405d30e16fff73f4d1d848926e7275"
  },
  {
    "url": "/_nuxt/5.nuxt.bundle.1725e73fb768b58ec15e.js",
    "revision": "6bbdd40c426586c0e53b614ce250809a"
  },
  {
    "url": "/_nuxt/6.nuxt.bundle.e151ec0a9db79ff8ea5d.js",
    "revision": "0ebdcc029373c9dc2738c67654cf03dd"
  },
  {
    "url": "/_nuxt/api/blog/1.json",
    "revision": "51e9cb258027ba614410a5673a3220f6"
  },
  {
    "url": "/_nuxt/api/blog/collections.json",
    "revision": "6d2ca1e2732dcd0a6bedc679740915c1"
  },
  {
    "url": "/_nuxt/api/blog/collections/experience.json",
    "revision": "d39df58578e6ffef04d55494a75ca793"
  },
  {
    "url": "/_nuxt/api/blog/collections/javascript.json",
    "revision": "7ee26e5e0055987d326bef7c24bd7b61"
  },
  {
    "url": "/_nuxt/api/blog/collections/vue.json",
    "revision": "806d31b2abb2a04e58cb30ba75145d9e"
  },
  {
    "url": "/_nuxt/api/blog/posts/2016-06-24-learning-education-this-world-and-beyond.json",
    "revision": "e14b1a81a8ae57f4addba66c7fb91496"
  },
  {
    "url": "/_nuxt/api/blog/posts/2017-03-03-first-day-in-vue-js.json",
    "revision": "591417c5ec554fef50a82ef90f1d8e79"
  },
  {
    "url": "/_nuxt/api/blog/posts/2017-03-05-fiddle-with-vue-js.json",
    "revision": "8bfd6435af80f108fa2a4e5be059d436"
  },
  {
    "url": "/_nuxt/api/blog/posts/2017-03-10-provide-inject-in-vue-2-2.json",
    "revision": "07b09964355abf9a2d90592f30af024c"
  },
  {
    "url": "/_nuxt/api/blog/tags.json",
    "revision": "6d2ca1e2732dcd0a6bedc679740915c1"
  },
  {
    "url": "/_nuxt/api/blog/tags/experience.json",
    "revision": "d39df58578e6ffef04d55494a75ca793"
  },
  {
    "url": "/_nuxt/api/blog/tags/javascript.json",
    "revision": "7ee26e5e0055987d326bef7c24bd7b61"
  },
  {
    "url": "/_nuxt/api/blog/tags/vue.json",
    "revision": "806d31b2abb2a04e58cb30ba75145d9e"
  },
  {
    "url": "/_nuxt/client-manifest.json",
    "revision": "528b529c2c043aa27284fbbb90a012ef"
  },
  {
    "url": "/_nuxt/index.html",
    "revision": "744fb1c184ce0e85af057191b683d6a2"
  },
  {
    "url": "/_nuxt/manifest.d4c6ad6d5f74ecf46434.js",
    "revision": "208bc86a6fba4ee437c7ea67bba95db8"
  },
  {
    "url": "/_nuxt/nuxt.bundle.460778f6f58f6ae8415d.js",
    "revision": "3d8e1ffbb9de742237086b4cdc539962"
  },
  {
    "url": "/_nuxt/server-bundle.json",
    "revision": "9b55727ef552f5d16feb53ff000eac15"
  },
  {
    "url": "/_nuxt/vendor.bundle.4ea82008ba94f7dd76fe.js",
    "revision": "8a345839fc9f78125da1756515513119"
  }
];

const workboxSW = new self.WorkboxSW({
  "cacheId": "test_1.0.0",
  "directoryIndex": "/"
});
workboxSW.precache(fileManifest);
workboxSW.router.registerRoute(/\/_nuxt\/.*/, workboxSW.strategies.cacheFirst());
workboxSW.router.registerRoute(/\/.*/, workboxSW.strategies.networkFirst());
