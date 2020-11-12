function Person(name, age) {
    this.name = name
    this.age = age
    this.greet = () => {console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`)}
}

function Developer(name, age, skillset = []) {
    Person.call(this, name, age)
    this.skillset = skillset
    // How to put space after commas in list?
    let formattedSkillset = skillset.join(", ")
    this.greet = () => {console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old. I know ${formattedSkillset}`)}
}

function Manager(name, age, managees = []) {
    Person.call(this, name, age)
    this.managees = managees
    // How to put space after commas in list?
    let formattedManagees = managees.join(", ")
    this.greet = () => {console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old. I manage ${formattedManagees}`)}
}


const hans = new Person("Hans", 42)
const chris = new Developer("Christian", 90, ["Java", "Elixir", "Cow"])
const joro = new Manager("Jorkata", 19, ["Ruja", "Kamata", "Kiro"])

hans.greet()
chris.greet()
joro.greet()
