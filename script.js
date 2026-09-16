/* =========================================================
   HEADER + MOBILE MENU
   ========================================================= */

const header = document.querySelector('header');
const hamb = document.querySelector('.hamb');

hamb?.addEventListener('click', () => {
    header?.classList.toggle('open');
});


/* =========================================================
   ACTIVE NAVIGATION
   ========================================================= */

const links = [
    ...document.querySelectorAll('nav a[href^="#"]')
];

const sections = links
    .map(link => document.querySelector(link.getAttribute('href')))
    .filter(Boolean);

const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                links.forEach(link => {
                    link.classList.toggle(
                        'active',
                        link.getAttribute('href') === `#${entry.target.id}`
                    );
                });
            }
        });
    },
    {
        rootMargin: '-35% 0px -55%'
    }
);

sections.forEach(section => observer.observe(section));


/* =========================================================
   PURE GRAPHICAL AI MOTION LAYER
   ========================================================= */

const orbLayer = document.querySelector('.visual-orbs');
const cubeLayer = document.querySelector('.visual-cubes');
const hexLayer = document.querySelector('.visual-hexes');
const circuitLayer = document.querySelector('.circuit-field');


/* -------------------------
   AI ORBS
   ------------------------- */

const orbData = [
    [5, 18, 26, -18],
    [12, 62, -18, -25],
    [22, 28, 20, -35],
    [31, 78, -24, -20],
    [42, 18, 22, -28],
    [55, 76, -18, -30],
    [66, 25, 24, -22],
    [76, 66, -20, -34],
    [88, 18, 18, -28],
    [94, 55, -25, -20],
    [81, 88, 20, -25],
    [45, 90, -20, -28],
    [18, 90, 25, -18],
    [70, 46, -16, -30]
];

orbData.forEach(([x, y, dx, dy], i) => {

    const element = document.createElement('i');

    element.className =
        'visual-orb' + (i % 4 === 0 ? ' pink' : '');

    element.style.left = `${x}%`;
    element.style.top = `${y}%`;

    element.style.setProperty('--x', `${dx}px`);
    element.style.setProperty('--y', `${dy}px`);

    element.style.setProperty(
        '--d',
        `${5.5 + (i % 5) * 1.4}s`
    );

    element.style.setProperty(
        '--delay',
        `${-i * 0.55}s`
    );

    orbLayer?.appendChild(element);
});


/* -------------------------
   AI CUBES
   ------------------------- */

const cubeData = [
    [6, 32],
    [18, 76],
    [33, 10],
    [49, 28],
    [69, 12],
    [86, 38],
    [78, 77],
    [28, 58],
    [57, 83],
    [94, 72]
];

cubeData.forEach(([x, y], i) => {

    const element = document.createElement('i');

    element.className = 'visual-cube';

    element.style.left = `${x}%`;
    element.style.top = `${y}%`;

    element.style.setProperty(
        '--d',
        `${14 + (i % 4) * 2}s`
    );

    element.style.setProperty(
        '--delay',
        `${-i * 2.2}s`
    );

    cubeLayer?.appendChild(element);
});


/* -------------------------
   AI HEXAGONS
   ------------------------- */

const hexData = [
    [3, 44, -18, -22],
    [14, 18, 20, -30],
    [28, 36, -22, -20],
    [40, 68, 18, -30],
    [59, 15, -20, -24],
    [72, 34, 24, -22],
    [91, 24, -20, -30],
    [88, 72, 22, -24],
    [52, 54, -18, -32],
    [24, 88, 20, -20]
];

hexData.forEach(([x, y, dx, dy], i) => {

    const element = document.createElement('i');

    element.className = 'hex';

    element.style.left = `${x}%`;
    element.style.top = `${y}%`;

    element.style.setProperty('--x', `${dx}px`);
    element.style.setProperty('--y', `${dy}px`);

    element.style.setProperty(
        '--d',
        `${9 + (i % 4) * 2}s`
    );

    element.style.setProperty(
        '--delay',
        `${-i * 1.1}s`
    );

    hexLayer?.appendChild(element);
});


/* -------------------------
   CIRCUIT ELEMENTS
   ------------------------- */

const circuitData = [
    [2, 22, -20, -18],
    [74, 18, 22, -25],
    [4, 76, 25, -15],
    [68, 74, -22, -25],
    [38, 6, 18, 22]
];

circuitData.forEach(([x, y, dx, dy], i) => {

    const element = document.createElement('i');

    element.className = 'circuit';

    element.style.left = `${x}%`;
    element.style.top = `${y}%`;

    element.style.setProperty('--x', `${dx}px`);
    element.style.setProperty('--y', `${dy}px`);

    element.style.setProperty(
        '--d',
        `${12 + i * 1.5}s`
    );

    element.style.setProperty(
        '--delay',
        `${-i * 2}s`
    );

    circuitLayer?.appendChild(element);
});


/* =========================================================
   POINTER PARALLAX
   ========================================================= */

const fx = document.querySelector('.fx');

fx?.addEventListener('pointermove', event => {

    const rect = fx.getBoundingClientRect();

    const x =
        ((event.clientX - rect.left) / rect.width - 0.5) * 18;

    const y =
        ((event.clientY - rect.top) / rect.height - 0.5) * 18;

    fx.style.setProperty('--px', `${x}px`);
    fx.style.setProperty('--py', `${y}px`);
});


/* =========================================================
   OPTIONAL: RESET PARALLAX WHEN POINTER LEAVES
   ========================================================= */

fx?.addEventListener('pointerleave', () => {

    fx.style.setProperty('--px', '0px');
    fx.style.setProperty('--py', '0px');

});