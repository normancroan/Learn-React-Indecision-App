class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `${this.name} says hello!`
    }
    getDescription() {
        return `${this.name} ${this.age > 0 ? `is ${this.age} years old` : "doesn't have an age"}`
    }
}

class Student extends Person{
    constructor(name, age, major){
        super(name, age)
        this.major = major
    }
    hasMajor(){
        return !!this.major
    }
    getDescription() {
        let description = super.getDescription()

        if(this.hasMajor()){
            return `${description} and their major is ${this.major}`
        }
        return description
    }
}

class Traveler extends Person{
    constructor(name, age, homeLocation){
        super(name, age)
        this.homeLocation = homeLocation
    }
    getGreeting(){
        let greeting = super.getGreeting()
        return `${!!this.homeLocation ? `${greeting} He's hailing from ${this.homeLocation}` : `${greeting}`}`
    }
}

//const me = new Student("Norman Croan", 28, "Computer Science")
const me = new Traveler("Norman Croan", 28, "New Hampshire")
console.log(me)
//const other = new Student()
const other = new Traveler()
console.log(other)

console.log(me.getGreeting())
console.log(other.getGreeting())

console.log(me.getDescription())
console.log(other.getDescription())

// console.log(me.hasMajor())
// console.log(other.hasMajor())


