function randomDegree() {
    return Math.ceil(Math.random() * 360);
}

export function randomPosition(centerX, centerY, radius) {
    const x = centerX + radius * Math.cos(randomDegree()) * 0.9;
    const y = centerY + radius * Math.sin(randomDegree()) * 0.9;

    return [x, y];
}



