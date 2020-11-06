function Person(name, age) {
    this.name = name
    this.age = age
    this.greet = () => {console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`)}
}

const hans = new Person("Hans", 42)

function Developer(name, age, skillset = []) {
    this.name = name
    this.age = age
    this.skillset = skillset
    Object.create(Person, )
}

const chris = new Developer("Christian", 90, ["Java", "Elixir", "Cow"])

function Manager(name, age, managees = []) {
    Object.create(Person.prototype, {
        
    })
    this.name = name
    this.age = age
    this.managees = managees
}

const joro = new Manager("Jorkata", 19, ["Ruja", "Kamata", "Kiro"])

