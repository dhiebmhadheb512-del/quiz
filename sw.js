/* Service worker: يخلّي اللعبة تفتح بسرعة وتخدم بالقليل من الإنترنت.
   كل ما تبدّل النسخة، بدّل رقم VERSION. */
const VERSION = 'v29';
const CACHE = 'chnwa-ta3ref-' + VERSION;
const SHELL = ['./', 'index.html', 'config.js', 'manifest.webmanifest', 'icon-192.png', 'icon-512.png', 'apple-touch-icon.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  // مكتبات Firebase: نجيبو من الكاش ونحدّثو في الخلفية
  if (url.hostname === 'www.gstatic.com') {
    e.respondWith(
      caches.open(CACHE).then(cache =>
        cache.match(req).then(hit => {
          const net = fetch(req).then(res => { cache.put(req, res.clone()); return res; }).catch(() => hit);
          return hit || net;
        })
      )
    );
    return;
  }

  // ملفات اللعبة: الإنترنت أولا (باش تجي النسخة الجديدة)، والكاش كان ما فماش إنترنت
  if (url.origin === location.origin) {
    e.respondWith(
      fetch(req).then(res => {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(req, copy));
        return res;
      }).catch(() => caches.match(req).then(hit => hit || caches.match('index.html')))
    );
  }
});
