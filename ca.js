(function(){
  var CA="0x62bda149280d260cb05dfd3f76e00810c2eb39f5";
  function mk(){
    var a=document.querySelector('.kn-live'); if(!a||document.getElementById('pg-ca')) return !!a;
    var b=document.createElement('button'); b.id='pg-ca'; b.type='button'; b.className='kn-live'; b.title='Copy CA';
    b.style.cssText='cursor:pointer;border:0;margin-left:8px;font-family:inherit';
    b.innerHTML='<span style="opacity:.7">CA</span><b class="mono" style="font-family:var(--font-mono,ui-monospace,monospace)">'+CA.slice(0,6)+'…'+CA.slice(-4)+'</b><span id="pg-ca-t" style="opacity:.7">Copy</span>';
    b.onclick=function(){navigator.clipboard.writeText(CA).then(function(){var t=document.getElementById('pg-ca-t');t.textContent='Copied';setTimeout(function(){t.textContent='Copy'},1400)})};
    a.parentNode.insertBefore(b,a.nextSibling); return true;
  }
  var n=0,iv=setInterval(function(){ if((mk()&&document.getElementById('pg-ca'))||++n>40) clearInterval(iv); },250);
  new MutationObserver(function(){ if(!document.getElementById('pg-ca')) mk(); }).observe(document.documentElement,{childList:true,subtree:true});
})();
