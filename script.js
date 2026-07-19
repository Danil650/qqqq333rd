const centralOrbit = document.getElementById("central-orbit");
const lowOrbit = document.getElementById("low-orbit");
const midOrbit = document.getElementById("mid-orbit");
const highOrbit = document.getElementById("high-orbit");


// constants
const maxOrbitSize = 64;
const minOrbitSize = 8;

function randomPosition() {
    const x = Math.ceil(Math.random() * window.innerWidth);
    const y = Math.ceil(Math.random() * window.innerHeight);    

    console.log(`x is ${x}\ny is ${y}`);
}

function randomSize() {
    return Math.ceil(Math.random() * (maxOrbitSize - minOrbitSize)) + minOrbitSize;
} 

