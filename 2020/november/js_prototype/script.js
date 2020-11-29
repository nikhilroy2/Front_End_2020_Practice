function Person(name,age){
    this.name = name;
    this.age = age;
    
}

Person.prototype.hello = function(){
    return this.name + ' ' + this.age

}

var a1 = new Person("Nikhil", 20)
var a2 = new Person("Sonchoy", 18)

console.log(a2.hello())