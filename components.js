// Portfolio components — plain JS (React.createElement, no JSX)
// Requires: React, ReactDOM, content.js loaded before this file.
// Requires: useTweaks, TweaksPanel, TweakSection, TweakColor, TweakToggle, TweakText
//           defined in the inline Babel script in Portfolio.html.

const { useState, useEffect } = React;
const ce = React.createElement;

function Nav({ lang, setLang, c }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return ce('nav', { style: { borderBottomColor: scrolled ? 'rgba(0,229,255,0.2)' : '' } },
    ce('a', { className: 'nav-logo', href: '#hero' }, '> MORGAN.DEV'),
    ce('ul', { className: 'nav-links' },
      c.nav.map((label, i) =>
        ce('li', { key: i }, ce('a', { href: c.navAnchors[i] }, label))
      )
    ),
    ce('div', { className: 'lang-toggle' },
      ce('button', { className: 'lang-btn' + (lang === 'fr' ? ' active' : ''), onClick: () => setLang('fr') }, 'FR'),
      ce('button', { className: 'lang-btn' + (lang === 'en' ? ' active' : ''), onClick: () => setLang('en') }, 'EN')
    )
  );
}

function Hero({ c, tweaks }) {
  return ce('section', { id: 'hero' },
    ce('div', { className: 'hero-grid' }),
    ce('div', { className: 'hero-glow' }),
    ce('div', { className: 'hero-content' },
      ce('div', { className: 'hero-tag' }, c.heroTag),
      ce('h1', { className: 'hero-name' },
        ce('span', { className: 'accent' }, 'Mo'),
        'rgan'
      ),
      ce('p', { className: 'hero-title' }, tweaks.heroSubtitle || c.heroSub),
      ce('div', { className: 'hero-ctas' },
        ce('a', { className: 'btn-primary', href: '#projects' }, c.heroCta1),
        ce('a', { className: 'btn-ghost', href: '#contact' }, c.heroCta2)
      ),
      ce('div', { className: 'hero-stats' },
        c.stats.map((s, i) =>
          ce('div', { key: i },
            ce('div', { className: 'hero-stat-num' }, s.num),
            ce('div', { className: 'hero-stat-label' }, s.label)
          )
        )
      )
    )
  );
}

function About({ c }) {
  return ce('section', { id: 'about' },
    ce('div', { className: 'section-label' }, c.aboutLabel),
    ce('h2', { className: 'section-title' }, c.aboutTitle),
    ce('div', { className: 'about-grid' },
      ce('div', { className: 'about-text' },
        ce('p', null, c.aboutP1),
        ce('p', { className: 'highlight' }, c.aboutP2),
        ce('p', null, c.aboutP3)
      ),
      ce('div', { className: 'about-side' },
        ce('div', { className: 'info-block' },
          c.infoRows.map((row, i) =>
            ce('div', { className: 'info-row', key: i },
              ce('div', { className: 'info-key' }, row.key),
              ce('div', { className: 'info-val' },
                row.val ? ce('span', null, row.val) : null,
                row.tags.map((t, j) => ce('span', { className: 'tag', key: j }, t))
              )
            )
          )
        )
      )
    )
  );
}

function SkillBar({ level }) {
  return ce('div', { className: 'skill-bar-wrap' },
    ce('div', { className: 'skill-bar-fill', style: { width: level + '%' } })
  );
}

function Skills({ c, tweaks }) {
  if (!tweaks.showSkills) return null;
  return ce('section', { id: 'skills' },
    ce('div', { className: 'section-label' }, c.skillsLabel),
    ce('h2', { className: 'section-title' }, c.skillsTitle),
    ce('div', { className: 'skills-grid' },
      c.skillGroups.map((group, gi) =>
        ce('div', { className: 'skill-group', key: gi },
          ce('div', { className: 'skill-group-title' }, group.title),
          group.skills.map((skill, si) =>
            ce('div', { className: 'skill-item', key: si },
              ce('span', { className: 'skill-name' }, skill.name),
              ce(SkillBar, { level: skill.level })
            )
          )
        )
      )
    )
  );
}

function Timeline({ c, tweaks }) {
  if (!tweaks.showTimeline) return null;
  return ce('section', { id: 'timeline' },
    ce('div', { className: 'section-label' }, c.tlLabel),
    ce('h2', { className: 'section-title' }, c.tlTitle),
    ce('div', { className: 'timeline' },
      c.timeline.map((item, i) =>
        ce('div', { className: 'timeline-item' + (item.active ? ' active' : ''), key: i },
          ce('div', { className: 'tl-date' }, item.date),
          ce('div', { className: 'tl-title' }, item.title),
          ce('div', { className: 'tl-sub' },
            item.sub.split('\n').map((line, j) =>
              ce('div', { key: j, className: 'tl-sub-item' },
                ce('span', { className: 'tl-sub-accent' }, '—'),
                ce('span', null, line)
              )
            )
          )
        )
      )
    )
  );
}

function Lightbox({ src, title, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);
  const isVideo = /\.(mp4|webm|ogg)$/i.test(src);
  return ce('div', { className: 'lightbox', onClick: onClose },
    ce('div', { className: 'lightbox-inner', onClick: (e) => e.stopPropagation() },
      isVideo
        ? ce('video', { src, autoPlay: true, controls: true, loop: true, playsInline: true })
        : ce('img', { src, alt: title })
    )
  );
}

function ProjectCard({ project, lang, c }) {
  const [open, setOpen] = useState(false);
  const [lightbox, setLightbox] = useState(false);
  const isVideo = project.media && /\.(mp4|webm|ogg)$/i.test(project.media);

  return ce('div', { className: 'project-card' + (open ? ' open' : ''), style: { '--card-accent': project.accent } },
    lightbox && ce(Lightbox, { src: project.media, title: project.title, onClose: () => setLightbox(false) }),
    ce('div', { className: 'project-header', onClick: () => setOpen(!open) },
      ce('div', null,
        ce('div', { className: 'project-meta' },
          ce('span', { className: 'project-num' }, '#' + String(project.id).padStart(2, '0')),
          ce('span', { className: 'project-engine-tag' }, project.engine),
          ce('span', { className: 'project-type-tag' }, project.type[lang])
        ),
        ce('div', { className: 'project-title-row' },
          ce('span', { className: 'project-name' }, project.title),
          ce('span', { className: 'project-short' }, project.short[lang])
        )
      ),
      ce('div', { className: 'project-toggle' }, ce('div', { className: 'toggle-icon' }, '+'))
    ),
    ce('div', { className: 'project-body' },
      ce('div', { className: 'project-body-inner' },
        ce('div', null,
          ce('p', { className: 'project-desc' }, project.desc[lang]),
          ce('div', { className: 'project-tech-list' },
            project.tech.map((t, i) => ce('span', { className: 'tag project-tech-tag', key: i }, t))
          ),
          ce('div', { className: 'project-links' },
            project.github   && ce('a', { className: 'link-btn', href: project.github,   target: '_blank', rel: 'noreferrer' }, '⌥ ' + c.links.github),
            project.demo     && ce('a', { className: 'link-btn', href: project.demo,     target: '_blank', rel: 'noreferrer' }, '▶ ' + c.links.demo),
            project.download && ce('a', { className: 'link-btn', href: project.download },                                      '↓ ' + c.links.download),
            project.links.map((l, i) => ce('a', { className: 'link-btn', href: l.url, key: i, target: '_blank', rel: 'noreferrer' }, '↗ ' + l.label))
          )
        ),
        ce('div', {
          className: 'project-media' + (project.media ? ' project-media--zoomable' : ''),
          onClick: project.media ? () => setLightbox(true) : undefined
        },
          project.media
            ? isVideo
              ? ce('video', { src: project.media, autoPlay: true, muted: true, loop: true, playsInline: true })
              : ce('img', { src: project.media, alt: project.title })
            : ce('div', { className: 'media-placeholder' },
                ce('div', { className: 'media-placeholder-icon' }, '◻'),
                ce('div', { className: 'media-placeholder-text' }, 'SCREENSHOT / VIDEO')
              )
        )
      )
    )
  );
}

function Projects({ c, lang, tweaks }) {
  return ce('div', { id: 'projects' },
    ce('div', null,
      ce('div', { className: 'section-label' }, c.projectsLabel),
      ce('h2', { className: 'section-title' }, c.projectsTitle)
    ),
    ce('div', { className: 'projects-list' },
      projects.map((p) =>
        ce(ProjectCard, { key: p.id, project: p, lang, c, accentColor: tweaks.accentColor })
      )
    )
  );
}

function Contact({ c }) {
  return ce('section', { id: 'contact' },
    ce('div', { className: 'section-label' }, c.contactLabel),
    ce('h2', { className: 'section-title' }, c.contactTitle),
    ce('div', { className: 'contact-grid' },
      ce('div', null,
        ce('p', { className: 'contact-lead' }, c.contactLead),
        ce('div', { className: 'contact-links' },
          ce('a', { className: 'contact-link', href: 'mailto:morgan.fourquet@outlook.fr' },
            ce('div', null,
              ce('div', { className: 'contact-link-label' }, 'Email'),
              ce('div', { className: 'contact-link-value' }, 'morgan.fourquet@outlook.fr')
            ),
            ce('span', { className: 'contact-link-arrow' }, '→')
          ),
          ce('a', { className: 'contact-link', href: 'https://www.linkedin.com/in/morgan-fourquet-57148b26a/', target: '_blank' },
            ce('div', null,
              ce('div', { className: 'contact-link-label' }, 'LinkedIn'),
              ce('div', { className: 'contact-link-value' }, 'linkedin.com/in/morgan')
            ),
            ce('span', { className: 'contact-link-arrow' }, '→')
          ),
          ce('a', { className: 'contact-link', href: 'https://github.com/Nagro0m', target: '_blank' },
            ce('div', null,
              ce('div', { className: 'contact-link-label' }, 'GitHub'),
              ce('div', { className: 'contact-link-value' }, 'github.com/morgan')
            ),
            ce('span', { className: 'contact-link-arrow' }, '→')
          )
        )
      ),
      ce('div', null,
        ce('div', { className: 'cv-box' },
          ce('div', { className: 'cv-box-label' }, c.cvTitle),
          ce('div', { className: 'cv-box-title' }, 'Morgan — Game Developer'),
          ce('p', { className: 'cv-box-text' }, c.cvText),
          ce('a', { className: 'btn-primary', href: '#' }, '↓ ' + c.cvBtn)
        )
      )
    )
  );
}

function MyTweaksPanel({ tweaks, setTweak }) {
  return ce(TweaksPanel, null,
    ce(TweakSection, { label: 'Visuals' },
      ce(TweakColor, { label: 'Accent color', value: tweaks.accentColor, onChange: (v) => setTweak('accentColor', v) })
    ),
    ce(TweakSection, { label: 'Sections' },
      ce(TweakToggle, { label: 'Show Skills section',   value: tweaks.showSkills,   onChange: (v) => setTweak('showSkills', v) }),
      ce(TweakToggle, { label: 'Show Timeline section', value: tweaks.showTimeline, onChange: (v) => setTweak('showTimeline', v) })
    ),
    ce(TweakSection, { label: 'Hero' },
      ce(TweakText, { label: 'Subtitle', value: tweaks.heroSubtitle, onChange: (v) => setTweak('heroSubtitle', v) })
    )
  );
}

function App() {
  const [lang, setLang] = useState('fr');
  const [tweaks, setTweakState] = useTweaks(TWEAK_DEFAULTS);
  const c = content[lang];
  const setTweak = (key, val) => setTweakState((prev) => ({ ...prev, [key]: val }));

  useEffect(() => {
    document.documentElement.style.setProperty('--accent', tweaks.accentColor);
    document.documentElement.style.setProperty('--accent-dim', tweaks.accentColor + '1f');
    document.documentElement.style.setProperty('--accent-glow', tweaks.accentColor + '59');
  }, [tweaks.accentColor]);

  return ce(React.Fragment, null,
    ce(Nav,    { lang, setLang, c }),
    ce(Hero,   { c, tweaks }),
    ce(About,  { c }),
    ce(Skills, { c, tweaks }),
    ce(Timeline, { c, tweaks }),
    ce(Projects, { c, lang, tweaks }),
    ce(Contact,  { c }),
    ce('footer', null,
      ce('span', { className: 'footer-text' }, c.footerText),
      ce('span', { className: 'footer-text' }, 'Unreal Engine · Unity · C++ · C# · Python')
    ),
    ce(MyTweaksPanel, { tweaks, setTweak })
  );
}
