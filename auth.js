(function(){
  const KEY='sangharsh_user';
  function getUser(){try{return JSON.parse(localStorage.getItem(KEY)||'null')}catch{return null}}
  function saveUser(u){localStorage.setItem(KEY,JSON.stringify(u))}
  function clearUser(){localStorage.removeItem(KEY)}
  window.SangharshAuth={getUser,saveUser,clearUser,isLoggedIn:()=>!!getUser()};
  document.addEventListener('DOMContentLoaded',()=>{
    const u=getUser();
    document.querySelectorAll('[data-auth-link]').forEach(el=>{
      if(u){el.href='dashboard.html';el.textContent='👤 '+(u.name||'Dashboard')}
      else {el.href='login.html';el.textContent='👤 Login'}
    });
    document.querySelectorAll('[data-user-name]').forEach(el=>{el.textContent=u?.name||'Student'});
    document.querySelectorAll('[data-logout]').forEach(el=>el.addEventListener('click',e=>{e.preventDefault();clearUser();location.href='login.html'}));
  });
})();
