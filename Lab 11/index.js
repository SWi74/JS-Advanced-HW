{
    // given:
    let users = ["George", "Peter", "Ada", "Maria"]

    console.log(`~~~Task1~~~`)
    // Task 1: list users sorted by first letter, ascending

    let brUsers = users.sort().join("\n")

    console.log(brUsers)

    // DESIRED OUTPUT:
    // ~~~Task1~~~
    // Ada
    // George
    // Maria
    // Peter

    console.log(`~~~Task2 reverse users~~~`)
    // Task 2: list users sorted by letters count (length), ascending

    // Reversing source to match secondary sort of equal element.length as in DESIRED OUTPUT
    let reverseAlphaUsers = users.sort((a, b) => b - a)

    let brUsersByLength = reverseAlphaUsers.sort((a, b) => a.length - b.length).join("\n")

    console.log(brUsersByLength)

    // DESIRED OUTPUT:
    // ~~~Task2~~~
    // Ada
    // Peter
    // Maria
    // George

    console.log(`~~~Task2 reverse equals only~~~`)
    // Task 2: list users sorted by letters count (length), ascending

    let brUsersByLengthThenRevAlpha = users.sort(function(a, b) {
            if (a.length === b.length) {
                return -1
            }
            return a.length - b.length
        }
    ).join("\n")

    console.log(brUsersByLengthThenRevAlpha)

    // DESIRED OUTPUT:
    // ~~~Task2~~~
    // Ada
    // Peter
    // Maria
    // George

    console.log(`~~~Task2 reverse equals only ternary arrow~~~`)
    // Task 2: list users sorted by letters count (length), ascending

    let brUsersByLengthThenRevAlphaTernArrow = users.sort((a, b) => a.length === b.length ? -1 : a.length - b.length).join("\n")

    console.log(brUsersByLengthThenRevAlphaTernArrow)

    // DESIRED OUTPUT:
    // ~~~Task2~~~
    // Ada
    // Peter
    // Maria
    // George

    // HINT: check https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
}

{
    console.log(`~~~Task3~~~`)
    // Given is an array of users: users = ["Maria", "Ada", "Ivan"];
    // Task: write the code which will create a NEW ARRAY (i.e. do not change the users array), with alphabetically sorted (in ascendant order) elements of users array

    let users = ["Maria", "Ada", "Ivan"]

    let usersSortedAlphabetically = [...users].sort()

    // TEST CASE:
    console.log(`users:\n\t${users}\n`);
    console.log(`usersSortedAlphabetically:\n\t${usersSortedAlphabetically}`)

    // OUTPUT:
    // users:
    //		Maria,Ada,Ivan
    //
    // usersSortedAlphabetically:
    //		Ada,Ivan,Maria
}