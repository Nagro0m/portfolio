(function () {
  var survolOk = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  var calme = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!survolOk || calme) return;

  document.querySelectorAll('.carte').forEach(function (carte) {
    var video = carte.querySelector('video[data-apercu]');
    if (!video) return;

    function lancer() {
      if (!video.src) video.src = video.dataset.apercu;
      var p = video.play();
      if (p && p.catch) p.catch(function () {});
      video.classList.add('joue');
    }
    function arreter() {
      video.pause();
      video.classList.remove('joue');
    }

    carte.addEventListener('mouseenter', lancer);
    carte.addEventListener('mouseleave', arreter);
    carte.addEventListener('focusin', lancer);
    carte.addEventListener('focusout', arreter);
  });
})();
