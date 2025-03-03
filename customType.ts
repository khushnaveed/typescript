type Marks = number;

let myMarks: Marks = 50;

console.log(myMarks);



type Food = string;

let favoriteFood: Food = "pizza";

console.log(favoriteFood);



type address = {
    street: string;
    city: string;
    country: string;
}

type Person = {
  name: string;
  age: number;
  isStudent: boolean;
  address?: address; //  optional(?)
};

let person1: Person = {
  name: "Joe",
  age: 42,
  isStudent: true,
  address:{
    street: "123 main",
    city: "berlin",
    country: "Germany",
  }
};

let person2: Person = {
  name: "Jill",
  age: 66,
  isStudent: false,
};


