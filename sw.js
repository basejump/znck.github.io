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
    "url": "/_nuxt/0.nuxt.bundle.37b4c1a8ac481f4aeb46.js",
    "revision": "f998e197883c591fc6ebd2d2aadca96f"
  },
  {
    "url": "/_nuxt/1.nuxt.bundle.6871005028dac2acd854.js",
    "revision": "05b7bf44fe9a14cefa83031dddaf5fcb"
  },
  {
    "url": "/_nuxt/2.nuxt.bundle.a36c0f46a74fe9980d01.js",
    "revision": "f508718de93e87aada111502269d2796"
  },
  {
    "url": "/_nuxt/3.nuxt.bundle.5a589084326f9bb6f4e4.js",
    "revision": "5ab42d1ca5ddb25048a8973434cc60ff"
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
    "revision": "e63504e0fdb3b234e1443daafd8c911c"
  },
  {
    "url": "/_nuxt/index.html",
    "revision": "744fb1c184ce0e85af057191b683d6a2"
  },
  {
    "url": "/_nuxt/manifest.f99191f7b03a7be35a7e.js",
    "revision": "64b6ca44d38ea5c55e0b87e07e526479"
  },
  {
    "url": "/_nuxt/nuxt.bundle.555099c08fe076e3c291.js",
    "revision": "6ce5cdfe3523406960bd329db63ccfb4"
  },
  {
    "url": "/_nuxt/server-bundle.json",
    "revision": "0eb8c74f740e800763fbc14059d39eba"
  },
  {
    "url": "/_nuxt/vendor.bundle.e55b17f23472c056ccb1.js",
    "revision": "d260d9ee283a4daca9a7dda884c67460"
  }
];

const workboxSW = new self.WorkboxSW({
  "cacheId": "test_1.0.0",
  "directoryIndex": "/"
});
workboxSW.precache(fileManifest);
workboxSW.router.registerRoute(/\/_nuxt\/.*/, workboxSW.strategies.cacheFirst());
workboxSW.router.registerRoute(/\/.*/, workboxSW.strategies.networkFirst());
