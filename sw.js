const CACHE='meu-treino-local-v1';
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.add('./index.html'))));
self.addEventListener('fetch',e=>{
 if(e.request.method!=='GET')return;
 e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(resp=>{
   const c=resp.clone(); caches.open(CACHE).then(x=>x.put(e.request,c)); return resp;
 }).catch(()=>caches.match('./index.html'))));
});
