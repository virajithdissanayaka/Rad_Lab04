class Dog{
    constructor(Breed, Age, Color){
        this.Breed = Breed;
        this.Age = Age;
        this.Color = Color;
    }

    Eat() {
        return (`${this.Breed} is Eating`)
    }
    Sleep() {
        return (`${this.Breed} is Sleeping`)
    }
    Sit(){
        return (`${this.Breed} is Sitting`)
    }
    Run(){
        return (`${this.Breed} is Running`)
    }
}

const Pug = new Dog('Pug', '3 Years', 'Black');
const Boxer = new Dog('Boxer', '2 Years', 'White');
const Poodle = new Dog('Poodle', '1 Years', 'Brown');

console.log(Pug.Breed);
console.log(Pug.Sleep());

console.log(Boxer.Age);
console.log(Pug.Sit());

console.log(Poodle.Color);
console.log(Poodle.Run());

