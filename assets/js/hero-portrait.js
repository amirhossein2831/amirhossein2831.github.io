// Anchor 70% down the portrait to the actual SVG boundary: its bottom 30%
// stays below the curve even when the background and content scale differently.
const hero = document.querySelector('.hero');
const heroInner = document.querySelector('.hero-inner');
const portrait = document.querySelector('.portrait');
const curve = document.querySelector('#portrait-curve');

function alignPortrait() {
  const matrix = curve.getScreenCTM();
  if (!matrix) return;

  const image = portrait.getBoundingClientRect();
  const centerX = image.left + image.width / 2;
  let start = 0;
  let end = curve.getTotalLength();

  // This boundary runs monotonically left to right. Find the point directly
  // beneath the portrait's center in screen space, including browser zoom.
  for (let step = 0; step < 24; step++) {
    const distance = (start + end) / 2;
    const point = curve.getPointAtLength(distance).matrixTransform(matrix);
    if (point.x < centerX) start = distance;
    else end = distance;
  }

  const boundary = curve.getPointAtLength((start + end) / 2).matrixTransform(matrix);
  const top = boundary.y - heroInner.getBoundingClientRect().top - image.height * 0.7;
  heroInner.style.setProperty('--portrait-top', `${top}px`);
}

let frame;
function scheduleAlignment() {
  cancelAnimationFrame(frame);
  frame = requestAnimationFrame(alignPortrait);
}

const heroResizeObserver = new ResizeObserver(scheduleAlignment);
heroResizeObserver.observe(hero);
heroResizeObserver.observe(heroInner);
heroResizeObserver.observe(portrait);
window.addEventListener('resize', scheduleAlignment);
alignPortrait();
