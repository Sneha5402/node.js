// ES6 Class Example
class Person {
    // Constructor function to initialize properties
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    // Method to display person's information
    greet() {
      console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
    // Static method (can be called without an instance)
    static species() {
        return 'Human';
      }
  }
    const person1 = new Person('Sneha', 22);
  
  person1.greet(); 
  
  console.log(Person.species());

//   inheritance

class Animal{
    constructor(name,sound){
        this.name=name;
        this.sound=sound;
    }

    makeSound(){
        console.log(`${this.name} says ${this.sound}`);

    }
}

class Dog extends Animal{
    constructor(name,breed){
        super(name,'woof');
        this.breed=breed;
    }
    describe(){
        console.log(`${this.name} is a ${this.breed} and goes "${this.sound}".`);
    }
}

const animal1=new Animal('Cow','Moo');
animal1.makeSound();

const dog1=new Dog('Buddy','Golden retriever');
dog1.makeSound();
dog1.describe();