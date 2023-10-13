// Polymorphism Practice
interface Shape {
    getArea():number
}

class Circle implements Shape {
    constructor (public radius:number){}
    getArea(): number {
        return Math.PI * this.radius **2
    }
}
class RectAngle implements Shape {
    constructor (public height:number,public width:number){}
    getArea(): number {
        return this.height * this.width
    }
}

const shapes:Shape [] = [new Circle(10) , new RectAngle(20,30)]

shapes.forEach((shape)=>{
    console.log("Get Area",shape.getArea());
})