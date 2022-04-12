// constructor
const x = document.querySelector(".box")
x.innerHTML= "<p>aaaaa</p>"
import SingltonInstance from "/singlton.js"
class Car {
    constructor(doors, engine, color) {
        this.doors = doors;
        this.engine = engine;
        this.color = color;
    }
    printProps =()=>{
        return "color is " + this.color + " and eninge is " + this.engine 
    }
}

class SUV extends Car {
    constructor(doors, engine, color) {
        super(doors, engine, color);
        /*The super() method refers to the parent class.By calling the super() 
        method in the constructor method, we call the parent's constructor method and gets 
        access to the parent's properties and methods. */
        this.wheels = 4;
    }
}


const civic = new Car(4, 'V6', 'grey');
const cx5 = new SUV(4, "V8", 'red');

console.log(civic);
console.log(civic.printProps())
console.log(cx5);
console.log(cx5.printProps());
/////////////////Singlton////////////////
console.log("Singlton Patterns")
//we can use class or normal object
let instance = null;
class OnlyCar {
    constructor(doors, engine, color) {
        if(!instance) {       //make sure there is no instance
            this.doors=doors
            this.engine=engine
            this.color=color
            instance = this
        } else {
            return instance
        }
    }
}
const single = new OnlyCar(2, "X6", "Glossy Black")
const single2 = new OnlyCar(244, "X6-2021", "Glossy REd") //this new instance is not going to created
console.log(single)
console.log(single2)


const _data = [];

const UserStore = {
  add: item => _data.push(item),
  get: id => _data.find(d => d.id === id)
}

Object.freeze(UserStore);

let count = 0;

const counter = {
  increment() {
    return ++count;
  },
  decrement() {
    return --count;
  }
};

Object.freeze(counter);
const btn = document.querySelector(".one")
btn.addEventListener("click",(e)=>{
    SingltonInstance.inreament()
    console.log(SingltonInstance.getCount())
})
console.log("prototype pattern")
class Dog {
constructor(name) {
    this.name = name;
}

bark() {
    console.log("Woof!");
}
}

class SuperDog extends Dog {
constructor(name) {
    super(name);
}

fly() {
    console.log(`Flying!`);
}
}

const dog1 = new SuperDog("Daisy");
dog1.bark();
dog1.fly();