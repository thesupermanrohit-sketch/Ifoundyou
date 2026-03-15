// Custom cursor
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursorRing');
document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
  setTimeout(() => {
    ring.style.left = e.clientX + 'px';
    ring.style.top = e.clientY + 'px';
  }, 60);
});

// Falling petals
const petalContainer = document.getElementById('petals');
const emojis = ['🌸', '🌺', '✿', '❀', '💮'];
for (let i = 0; i < 18; i++) {
  const p = document.createElement('div');
  p.className = 'petal';
  p.textContent = emojis[Math.floor(Math.random() * emojis.length)];
  p.style.left = Math.random() * 100 + 'vw';
  p.style.animationDuration = (8 + Math.random() * 12) + 's';
  p.style.animationDelay = (Math.random() * 15) + 's';
  p.style.fontSize = (0.8 + Math.random() * 0.9) + 'rem';
  petalContainer.appendChild(p);
}

// Scroll reveal
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); } });
}, { threshold: 0.12 });
reveals.forEach(r => observer.observe(r));

// Ruler bars
const rulerWrap = document.getElementById('rulerWrap');
const bars = [
  { h: 72, label: 'everyone\nelse' },
  { h: 30, label: 'her 💕' },
];
bars.forEach((b, i) => {
  const wrap = document.createElement('div');
  wrap.style.display = 'flex';
  wrap.style.flexDirection = 'column';
  wrap.style.alignItems = 'center';
  wrap.style.gap = '6px';
  wrap.style.margin = '0 5px';
  const bar = document.createElement('div');
  bar.className = 'ruler-bar';
  bar.style.height = b.h + 'px';
  if (i === 1) {
    bar.style.background = 'linear-gradient(to top, #c9837a, #f2cfc4)';
    bar.style.opacity = '1';
    bar.style.width = '28px';
  }
  const lbl = document.createElement('div');
  lbl.style.fontSize = '0.6rem';
  lbl.style.color = i === 1 ? '#c9837a' : '#bfa098';
  lbl.style.whiteSpace = 'pre';
  lbl.style.textAlign = 'center';
  lbl.style.lineHeight = '1.3';
  lbl.style.minHeight = '32px'; /* Fix: Ensure all labels have same minimum height for alignment */
  lbl.style.display = 'flex';
  lbl.style.alignItems = 'flex-start';
  lbl.style.justifyContent = 'center';
  lbl.textContent = b.label;
  wrap.appendChild(bar);
  wrap.appendChild(lbl);
  rulerWrap.appendChild(wrap);
});

// Heart music toggle
const heartBtn = document.getElementById('heartBtn');
const bgMusic = document.getElementById('bgMusic');
let isPlaying = false;
heartBtn.addEventListener('click', () => {
  if (isPlaying) {
    bgMusic.pause();
    heartBtn.classList.remove('playing');
    heartBtn.textContent = '♡';
    isPlaying = false;
  } else {
    bgMusic.play().then(() => {
      heartBtn.classList.add('playing');
      heartBtn.textContent = '♥';
      isPlaying = true;
    }).catch(() => {});
  }
});
