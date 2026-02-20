(function(){
  function track(name, data){
    try{ console.log("[track]", name, data || {}); }catch(e){}
  }

  document.querySelectorAll("[data-track]").forEach(function(el){
    el.addEventListener("click", function(){
      track(el.getAttribute("data-track"), {href: el.getAttribute("href") || null});
    });
  });

  var form = document.querySelector("form[data-form]");
  if(form){
    form.addEventListener("submit", function(){
      track("form_submit", {page: location.pathname});
    });
  }
})();
