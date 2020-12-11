class Person{
    constructor(name, year){
        this.name = name;
        this.year = year;
    }
    age(){
        return `${this.name} is ${this.year} old`
    }
    age2(){
        return this.year + ' ' + this.name
    }
    age3(){
        let time = new Date().toLocaleTimeString();
        return time;
    }
    
}

let newPerson = new Person("Nikhil", 20)
console.log(newPerson.age())
console.log(newPerson.age2())
console.log(newPerson.age3())