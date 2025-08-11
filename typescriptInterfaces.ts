interface User{

   name: string ;
   age:number;
   EmailId?:string;

   greet(message:string):void;

   getName():string;
}


let user1: User = {
  name: "Rahul",
  age: 23,
  
  greet(message: string) {
    console.log(`${message}, my name is ${this.name} and I am ${this.age} years old.`);
  },

   getName(){
    return this.name;
  }
};

user1.greet("Hello");

console.log("Name is : " +user1.getName());

