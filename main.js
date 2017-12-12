var t = document.querySelector('#t');

t.addEventListener('dom-change', function() {
    // auto-binding template is ready.
    var gMap = document.querySelector('google-map');
    gMap.addEventListener("api-load",function(e){
      //t.key ="AIzaSyC-uc9yzH-GTr4q0uX5YpVXxJH4G0IYId8";
      document.querySelector("google-map-directions").map = this.map;
    });
  });
  
