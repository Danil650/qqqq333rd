import { randomPosition, getSpeed } from "./functions.js";

//orbits
const centralOrbit = document.getElementById("central-orbit");
const lowOrbit = document.getElementById("low-orbit");
const midOrbit = document.getElementById("mid-orbit");
const highOrbit = document.getElementById("high-orbit");

const orbits = [lowOrbit, midOrbit, highOrbit]

// constants
const maxOrbitSize = 64;
const minOrbitSize = 8;
const halfWidth = Math.ceil(window.innerWidth / 2)
const halfHeight = Math.ceil(window.innerHeight / 2);

// speed
let speed;

const canvas = document.getElementById("canvas");
const g = canvas.getContext("2d");
canvas.width = innerWidth;
canvas.height = innerHeight;
document.querySelector(".circle").style.zIndex = -2;

centralOrbit.style.left = `${halfWidth}px`;
centralOrbit.style.top = `${halfHeight}px`;

for (const orbit of orbits) {
    const [x, y] = randomPosition(halfWidth, halfHeight, halfHeight);
    const orbitX = `${x}px`;
    const orbitY = `${y}px`;

    orbit.style.left = orbitX;
    orbit.style.top = orbitY;

    orbit.style.animationDuration = `${orbit.style.animationDuration / speed}s`;

    const originX = halfWidth - orbitX.split(`px`)[0];
    const originY = halfHeight - orbitY.split(`px`)[0];

    orbit.style.transformOrigin = `${originX}px ${originY}px`;
}

const trails = orbits.map(o => {
    const s = getComputedStyle(o);
    return { el: o, pts: [], col: s.backgroundColor === "rgba(0, 0, 0, 0)" ? s.borderColor : s.backgroundColor };
});

(function loop() {
    g.clearRect(0, 0, canvas.width, canvas.height);
    for (const t of trails) {
        const r = t.el.getBoundingClientRect();
        t.pts.push([r.left + r.width / 2, r.top + r.height / 2]);
        t.pts.length > 60 && t.pts.shift();

        const a = 2 / parseFloat(getComputedStyle(t.el).animationDuration);
        for (let i = 1; i < t.pts.length; i++) {
            g.globalAlpha = Math.min(1, i / (t.pts.length - 1) * (0.2 + a * 0.4));
            g.strokeStyle = t.col;
            g.beginPath();
            g.moveTo(...t.pts[i - 1]);
            g.lineTo(...t.pts[i]);
            g.lineWidth = minOrbitSize;
            g.stroke();
        }
        g.globalAlpha = 1;
    }
    requestAnimationFrame(loop);
})();




