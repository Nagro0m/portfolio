// Aperçu vidéo au survol des cartes projet (desktop uniquement).
// Désactivé sur mobile/tactile et si l'utilisateur a réduit les animations.
(function () {
  var survolOk = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  var calme = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!survolOk || calme) return;

  document.querySelectorAll('.carte').forEach(function (carte) {
    var video = carte.querySelector('video[data-apercu]');
    if (!video) return;

    function lancer() {
      // La vidéo n'est téléchargée qu'au premier survol
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
