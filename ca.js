(function(){
  var CA="0x62bda149280d260cb05dfd3f76e00810c2eb39f5";
  function mk(){
    var a=document.querySelector('.kn-live'); if(!a||document.getElementById('pg-ca')) return !!a;
    var b=document.createElement('button'); b.id='pg-ca'; b.type='button'; b.className='kn-live'; b.title='Copy CA';
    b.style.cssText='cursor:pointer;border:0;margin:8px 0 0 0;font:600 13px/1 inherit;display:inline-flex;align-items:center;gap:8px;height:32px;padding:0 14px 0 12px;border-radius:999px;background:var(--card,#fff);color:var(--ink,#111);box-shadow:inset 0 0 0 1px var(--line,#e5e2dc);white-space:nowrap;max-width:100%';
    b.innerHTML='<span style="opacity:.7">CA</span><b style="color:var(--em-ink,#0a8f4f);font-weight:600;font-family:var(--font-mono,ui-monospace,monospace)">'+CA.slice(0,6)+'…'+CA.slice(-4)+'</b><span id="pg-ca-t" style="opacity:.7">Copy</span>';
    b.onclick=function(){navigator.clipboard.writeText(CA).then(function(){var t=document.getElementById('pg-ca-t');t.textContent='Copied';setTimeout(function(){t.textContent='Copy'},1400)})};
    var w=document.createElement('div');w.style.cssText='width:100%;display:flex';w.appendChild(b);a.parentNode.insertBefore(w,a.nextSibling); return true;
  }
  var n=0,iv=setInterval(function(){ if((mk()&&document.getElementById('pg-ca'))||++n>40) clearInterval(iv); },250);
  new MutationObserver(function(){ if(!document.getElementById('pg-ca')) mk(); }).observe(document.documentElement,{childList:true,subtree:true});
})();
