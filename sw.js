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
    "url": "/_nuxt/0.nuxt.bundle.c9e1416a85b36e3a2162.js",
    "revision": "45c0256f1e5378d892515cd3b153cbcf"
  },
  {
    "url": "/_nuxt/1.nuxt.bundle.8aa5db83d112dce82a9c.js",
    "revision": "6ac1fced29fee36d50783800a3c0664f"
  },
  {
    "url": "/_nuxt/2.nuxt.bundle.22b3f509a852f9ed1bc1.js",
    "revision": "148fb6cfcc3230562c1d985a455d7c1e"
  },
  {
    "url": "/_nuxt/3.nuxt.bundle.01cf7cde8553999b8c6d.js",
    "revision": "04661a50af1a0aca14584a62699880c2"
  },
  {
    "url": "/_nuxt/4.nuxt.bundle.03be2b50db310cd1a320.js",
    "revision": "d6c41f7ee2010dc9b4c32db1a4ad745e"
  },
  {
    "url": "/_nuxt/5.nuxt.bundle.457d3b2344e54bd6f383.js",
    "revision": "2cf6e8ac04ac15c491f3feb074c77901"
  },
  {
    "url": "/_nuxt/6.nuxt.bundle.c9f639c685b29f73cb4d.js",
    "revision": "2f093885d3a408224f4b2a59b1a7446d"
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
    "revision": "b28ebf83a945ab6e162307df07a35b5b"
  },
  {
    "url": "/_nuxt/index.html",
    "revision": "744fb1c184ce0e85af057191b683d6a2"
  },
  {
    "url": "/_nuxt/manifest.02b15aa51ede44393b3f.js",
    "revision": "ceaa9dd215990c6deed845859797e3fd"
  },
  {
    "url": "/_nuxt/nuxt.bundle.10493048c64bc62e53b0.js",
    "revision": "adb92c507dd696c5eeec51d334792c13"
  },
  {
    "url": "/_nuxt/server-bundle.json",
    "revision": "d403e973e5775f4e3cc7aced807e23ad"
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
