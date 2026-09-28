function openSearch(){
    document.getElementById('searchModal').style.display='block';
    setTimeout(()=>document.getElementById('searchInput').focus(),50);
  }

  function closeSearch(){
    document.getElementById('searchModal').style.display='none';
  }

  function toggleMobileNav(){
    const nav=document.getElementById('nav');
    const visible=getComputedStyle(nav).display!=='none';
    if(visible){
      nav.style.display='none';
      return;
    }
    nav.style.display='flex';
    nav.style.position='absolute';
    nav.style.top='62px';
    nav.style.left='11px';
    nav.style.right='11px';
    nav.style.padding='14px';
    nav.style.background='#fff';
    nav.style.border='1px solid #e8edf4';
    nav.style.borderRadius='10px';
    nav.style.flexDirection='column';
    nav.style.alignItems='flex-start';
    nav.style.boxShadow='0 12px 30px rgba(15,23,42,.10)';
  }

  document.getElementById('searchModal').addEventListener('click', function(e){
    if(e.target===this) closeSearch();
  });
