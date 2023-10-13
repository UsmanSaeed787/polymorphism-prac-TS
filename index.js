"use strict";
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    getArea() {
        return Math.PI * this.radius ** 2;
    }
}
class RectAngle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    getArea() {
        return this.height * this.width;
    }
}
const shapes = [new Circle(10), new RectAngle(20, 30)];
shapes.forEach((shape) => {
    console.log("Get Area", shape.getArea());
});
