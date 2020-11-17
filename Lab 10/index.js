function greet(a, b) {console.log(`Hi, I'm ${a} and I'm ${b} years old.`)}

const Person = class {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    greet() {
        console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`)
    }
}

const Developer = class extends Person {
    constructor(name, age, skillset = []) {
        super(name, age)
        this.skillset = skillset
    }
    greet() {
        super.greet()
        console.log(`I know ${this.skillset.join(", ")}`)
    }
}

const Manager = class extends Person {
    constructor(name, age, managees = []) {
        super(name, age)
        this.managees = managees
    }
    greet() {
        super.greet()
        console.log(`I manage ${this.managees.join(", ")}`)
    }
}

const hans = new Person("Hans", 42)
const chris = new Developer("Christian", 90, ["Java", "Elixir", "Cow"])
const joro = new Manager("Jorkata", 19, ["Ruja", "Kamata", "Kiro"])

hans.greet()
chris.greet()
joro.greet()

