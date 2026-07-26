export function randomPosition() {
    const x = Math.ceil(Math.random() * window.innerWidth);
    const y = Math.ceil(Math.random() * window.innerHeight);    

    return [x, y];
}


