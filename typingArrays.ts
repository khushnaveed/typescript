let ages : number[] = [45,69,12,3];


//create an array of student objects
type Student = {
    name: string;
    age: number;
    isStudent: boolean;
    address?: address; //  optional(?)
  };
  
  let student1: Person = {
    name: "Joe",
    age: 42,
    isStudent: true,
    address:{
      street: "123 main",
      city: "berlin",
      country: "Germany",
    }
  };
  
  let student2: Person = {
    name: "Jill",
    age: 66,
    isStudent: false,
  };


  let students: Student[] = [student1, student2];