function randomPosition(max_X, max_Y) {
    const x = Math.ceil(Math.random() * innerWidth);
    const y = Math.ceil(Math.random() * innerHeight);    

    return x, y;
}

console.log(randomPosition);