function randomDegree() {
    return Math.ceil(Math.random() * (2 * Math.PI));
}

export function randomPosition(centerX, centerY, radius) {
    const degree = randomDegree();
    const x = centerX + (radius * Math.random() + 10) * Math.cos(degree);
    const y = centerY + (radius * Math.random() + 10) * Math.sin(degree);

    return [x, y];
}

export function getSpeed(maxSpeed, radius, vectorLenght) {
    return maxSpeed * (vectorLenght/radius);
}

