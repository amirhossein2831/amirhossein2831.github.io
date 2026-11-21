// Desktop - 2 places a 648 × 692 portrait at (720, 195). At its center,
// the curve crosses y=750.855: 80.326% down the image, with 19.674% below.
// Preserve this Figma relationship as background and content scale differently.
const portraitCurveAnchor = (750.8545864023815 - 195) / 692;
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
  const top = boundary.y - heroInner.getBoundingClientRect().top - image.height * portraitCurveAnchor;
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
