let firstname= "Adrian";
const states = 50;
let age = 20;
console.log(5 + 4);
//  function helloWorld(alert: "Hello World!");

function alertName() {
  alert("hello world");
}
if (age < 21) {
  alert("Sorry " + firstname + ", you aren't old enough to view this page!");
}

let list = ["Brocoli", "Corn", "Potatoes", "Cauliflower", "Spinach"];
for (let i = 0; i < list.length; i++) {
  console.log(list[i]);
}

let myPet = {
  name: "Panda",
  breed: "Havense",
};
console.log(myPet);

let person = [
  {
    name: "Joe",
    age: 20,
  },
  {
    name: "Josh",
    age: 26,
  },
  {
    name: "Jessica",
    age: 24,
  },
  {
    name: "Brian",
    age: 21,
  },
  {
    name: "Cris",
    age: 24,
  },
];

function checkAge(name:string, age:number) {
  if (age <= 21) {
    alert("Sorry " + name + ", you aren't old enough to view this page!");
  } else {
    alert("Welcome!");
  }
}

checkAge("Charles", 21);

let people = [
  {
    name: "Josh",
    age: 26
  },
  {
    name: "Adrian",
    age: 24
  },
  {
    name: "Kid",
    age: 400
  },
  {
    name: "KidB",
    age: 19
  },
  {
    name: "Person1",
    age: 30
  },
];

for (let i = 0; i < people.length; i++) {
  checkAge(people[i].name, people[i].age);
}

function getLength(word:string) {
  return word.length;
}
let words = getLength("Hello World");

if (words % 2 == 0) {
  console.log("The world is nice and even!");
} else {
  console.log("The world is an odd place.");
}