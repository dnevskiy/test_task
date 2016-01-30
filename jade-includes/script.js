  function addScript(src){
  var script = document.createElement('script');
  script.src = src;
  script.async = false; // чтобы гарантировать порядок
  document.head.appendChild(script);
}
addScript('//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js');
addScript('lib/BcgImgToFitScr/jquery.background-fit.min.js');
addScript('lib/owlcarousel/owl.carousel.min.js');
addScript('js/frostbite.js');