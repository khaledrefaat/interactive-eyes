const eye1 = document.getElementById('eye-1');
const eye2 = document.getElementById('eye-2');
const pupil1 = document.getElementById('pupil-1');
const pupil2 = document.getElementById('pupil-2');
const eyeOuter1 = document.getElementById('eye-outer-1');
const eyeOuter2 = document.getElementById('eye-outer-2');
const eyelid1 = document.getElementById('eyelid-1');
const eyelid2 = document.getElementById('eyelid-2');

document.addEventListener('mousemove', (event) => {
  [eye1, eye2].forEach((eye, index) => {
    if (!eye) return;
    const rect = eye.getBoundingClientRect();
    const eyeCenterX = rect.left + rect.width / 2;
    const eyeCenterY = rect.top + rect.height / 2;
    const deltaX = event.clientX - eyeCenterX;
    const deltaY = event.clientY - eyeCenterY;
    const distance = Math.min(8, Math.sqrt(deltaX ** 2 + deltaY ** 2));
    const angle = Math.atan2(deltaY, deltaX);

    const pupil = index === 0 ? pupil1 : pupil2;
    const outerEye = index === 0 ? eyeOuter1 : eyeOuter2;

    if (pupil) {
      pupil.style.transform = `translate(${Math.cos(angle) * distance}px, ${
        Math.sin(angle) * distance
      }px)`;
    }
    if (outerEye) {
      outerEye.style.transform = `translate(${Math.cos(angle) * distance}px, ${
        Math.sin(angle) * distance
      }px)`;
    }
  });
});

function blink() {
  [eyelid1, eyelid2].forEach((eyelid) => {
    if (!eyelid) return;
    eyelid.style.top = '0%';
    setTimeout(() => {
      eyelid.style.top = '-100%';
    }, 100);
  });
}

document.addEventListener('click', blink);

setInterval(blink, 3000);
