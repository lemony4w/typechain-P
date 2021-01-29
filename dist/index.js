"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Human {
    constructor(name, age, gender) {
        this.name = name; // class의 속성 name과 생성자 name은 동일함.
        this.age = age;
        this.gender = gender;
    } // 생성자, class가 호출될 때 마다 실행이 됨.
}
class Man {
} // javascript에서 일반적인 class 
/*
const person = {
    name: "pluralmajor",
    age: 24,
    gender: "male",
};

 const sayHello = (name, age, gender) => {
    console.log(`hello ${name}, you are ${age}, you are ${gender}`);
};

sayHello(name, age, gender);
 // This execute on javascript too.


const sayHello = (name:string, age:number, gender:string): void => {
    console.log(`hello ${name}, you are ${age}, you are ${gender}`);
}; //if return something const type cannot be void.

sayHello(name, age, gender); // on typescript grammar. ? means this parameter is optional.
*/
const plural = new Human("plular", 20, "male");
const sayHello = (person) => {
    return `hello ${person.name}, you are ${person.age}, you are ${person.gender}`;
}; //if return something const type cannot be void.
console.log(sayHello(plural));
//# sourceMappingURL=index.js.map