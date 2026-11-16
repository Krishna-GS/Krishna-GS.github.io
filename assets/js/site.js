/* Small, dependency-free responsive navigation. */
(() => {
  const b = document.querySelector('[data-menu-toggle]');
  if (!b) return;

  const close = () => {
    document.body.classList.remove('nav-open');
    b.setAttribute('aria-expanded', 'false');
  };

  b.addEventListener('click', () => {
    let open = document.body.classList.toggle('nav-open');
    b.setAttribute('aria-expanded', String(open));
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') close();
  });

  document.addEventListener('click', e => {
    if (
      document.body.classList.contains('nav-open') &&
      !e.target.closest('.sidebar') &&
      !e.target.closest('[data-menu-toggle]')
    ) close();
  });

  document.querySelectorAll('.sidebar a').forEach(a => a.addEventListener('click', close));
})();

/* Independent, keyboard-accessible research slide carousels. */
(() => {
  document.querySelectorAll('[data-carousel]').forEach(carousel => {
    const slides = Array.from(carousel.querySelectorAll('.carousel-slide'));
    const pips = Array.from(carousel.querySelectorAll('[data-slide-to]'));
    const prev = carousel.querySelector('[data-carousel-prev]');
    const next = carousel.querySelector('[data-carousel-next]');
    const counter = carousel.querySelector('[data-carousel-position]');

    if (!slides.length || !prev || !next) return;
    let active = 0;

    function show(index) {
      active = (index + slides.length) % slides.length;
      slides.forEach((slide, i) => {
        slide.hidden = i !== active;
      });
      pips.forEach((pip, i) => {
        if (i === active) pip.setAttribute('aria-current', 'true');
        else pip.removeAttribute('aria-current');
      });
      if (counter) counter.textContent = `${active + 1} / ${slides.length}`;
    }

    prev.addEventListener('click', () => show(active - 1));
    next.addEventListener('click', () => show(active + 1));
    pips.forEach((pip, i) => pip.addEventListener('click', () => show(i)));

    carousel.addEventListener('keydown', event => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        show(active - 1);
      }
      if (event.key === 'ArrowRight') {
        event.preventDefault();
        show(active + 1);
      }
    });

    carousel.classList.add('is-ready');
    show(0);
  });
})();
