function Person(name, age) {
    this.name = name
    this.age = age
}
Person.prototype.greet = function () {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`)
}

function Developer(name, age, skillset = []) {
    Person.call(this, name, age)
    this.skillset = skillset
}
Developer.prototype.greet = function () {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old. I know ${this.skillset.join(", ")}`)
}

function Manager(name, age, managees = []) {
    Person.call(this, name, age)
    this.managees = managees
}
Manager.prototype.greet = function () {
    console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old. I manage ${this.managees.join(", ")}`)
}

const hans = new Person("Hans", 42)
const chris = new Developer("Christian", 90, ["Java", "Elixir", "Cow"])
const joro = new Manager("Jorkata", 19, ["Ruja", "Kamata", "Kiro"])

hans.greet()
chris.greet()
joro.greet()
