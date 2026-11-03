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

(function () {
  var onglets = Array.prototype.slice.call(document.querySelectorAll('.videos__onglets [role="tab"]'));
  if (!onglets.length) return;

  function arreter(panneau) {
    panneau.querySelectorAll('video').forEach(function (v) { v.pause(); });
    panneau.querySelectorAll('iframe').forEach(function (f) { var s = f.src; f.src = s; });
  }

  function choisir(onglet) {
    onglets.forEach(function (o) {
      var panneau = document.getElementById(o.getAttribute('aria-controls'));
      var actif = o === onglet;
      o.setAttribute('aria-selected', actif ? 'true' : 'false');
      o.classList.toggle('bouton--ligne', !actif);
      o.tabIndex = actif ? 0 : -1;
      if (!actif && !panneau.hidden) arreter(panneau);
      panneau.hidden = !actif;
    });
  }

  onglets.forEach(function (o, i) {
    o.addEventListener('click', function () { choisir(o); });
    o.addEventListener('keydown', function (e) {
      var j = null;
      if (e.key === 'ArrowRight') j = (i + 1) % onglets.length;
      if (e.key === 'ArrowLeft') j = (i - 1 + onglets.length) % onglets.length;
      if (j !== null) { e.preventDefault(); onglets[j].focus(); choisir(onglets[j]); }
    });
  });
})();

(function () {
  var survolOk = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  var calme = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!survolOk || calme) return;

  document.querySelectorAll('.autre').forEach(function (ligne) {
    var vignette = ligne.querySelector('.autre__vignette');
    var video = vignette && vignette.querySelector('video');
    if (!video) return;
    ligne.addEventListener('mouseenter', function () {
      var p = video.play();
      if (p && p.catch) p.catch(function () {});
      vignette.classList.add('joue');
    });
    ligne.addEventListener('mouseleave', function () {
      video.pause();
      vignette.classList.remove('joue');
    });
  });
})();

(function () {
  var liens = document.querySelectorAll('.galerie a, .prose img, .autre__vignette--media');
  if (!liens.length) return;

  var fr = document.documentElement.lang === 'fr';
  var fond = document.createElement('div');
  fond.className = 'visionneuse';
  fond.setAttribute('role', 'dialog');
  fond.setAttribute('aria-modal', 'true');
  fond.hidden = true;

  var image = document.createElement('img');
  image.className = 'visionneuse__image';
  image.alt = '';

  var fermer = document.createElement('button');
  fermer.type = 'button';
  fermer.className = 'visionneuse__fermer';
  fermer.setAttribute('aria-label', fr ? 'Fermer' : 'Close');
  fermer.innerHTML = '<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>';

  var lecteur = document.createElement('video');
  lecteur.className = 'visionneuse__image';
  lecteur.controls = true;
  lecteur.playsInline = true;
  lecteur.loop = true;
  lecteur.hidden = true;

  fond.appendChild(image);
  fond.appendChild(lecteur);
  fond.appendChild(fermer);
  document.body.appendChild(fond);

  var declencheur = null;
  var minuteur = null;

  function ouvrir(src, alt, origine, type) {
    clearTimeout(minuteur);
    declencheur = origine;
    var estVideo = type === 'video';
    image.hidden = estVideo;
    lecteur.hidden = !estVideo;
    if (estVideo) {
      lecteur.src = src;
      var p = lecteur.play();
      if (p && p.catch) p.catch(function () {});
    } else {
      image.src = src;
    }
    image.alt = alt || '';
    fond.setAttribute('aria-label', alt || '');
    fond.hidden = false;
    document.body.classList.add('sans-defilement');
    requestAnimationFrame(function () {
      requestAnimationFrame(function () { fond.classList.add('ouverte'); });
    });
    fermer.focus();
  }

  function refermer() {
    if (fond.hidden) return;
    fond.classList.remove('ouverte');
    document.body.classList.remove('sans-defilement');
    lecteur.pause();
    minuteur = setTimeout(function () {
      fond.hidden = true;
      image.removeAttribute('src');
      lecteur.removeAttribute('src');
      lecteur.load();
    }, 250);
    if (declencheur) declencheur.focus();
  }

  liens.forEach(function (el) {
    if (el.dataset.media) {
      el.addEventListener('click', function () {
        ouvrir(el.dataset.media, el.getAttribute('aria-label'), el, el.dataset.type);
      });
    } else if (el.tagName === 'IMG') {
      el.classList.add('zoomable');
      el.tabIndex = 0;
      el.addEventListener('click', function () { ouvrir(el.currentSrc || el.src, el.alt, el); });
      el.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); ouvrir(el.currentSrc || el.src, el.alt, el); }
      });
    } else {
      el.addEventListener('click', function (e) {
        e.preventDefault();
        var vignette = el.querySelector('img');
        ouvrir(el.href, vignette ? vignette.alt : '', el);
      });
    }
  });

  fermer.addEventListener('click', refermer);
  fond.addEventListener('click', function (e) {
    if (e.target === fond) refermer();
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') refermer();
    if (e.key === 'Tab' && !fond.hidden) { e.preventDefault(); fermer.focus(); }
  });
})();
