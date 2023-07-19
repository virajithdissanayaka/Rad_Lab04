class Rectangle{
    constructor(id,width,height){
        this.id = id;
        this.width = width;
        this.height = height;
    }

    getArea() {
        return(`Area of the rectangle ${this.id} is ${this.height*this.width}`)
    }
}

const rec1 = new Rectangle(1,10,20)
const rec2 = new Rectangle(2,60,10)

console.log(rec1.getArea());
console.log(rec2.getArea());
