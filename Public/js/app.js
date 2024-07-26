
let users = []
class dataBase {
    constructor(fullName, email, age, password) {
        this.fullName = fullName
        this.email = email
        this.age = age
        this.password = password
    }
}
let user = prompt("signup or login or change the password")

let fullName = ""

if (user == "signup") {
    let name = prompt("Enter your Full name")
    let space = name.trim()
    let split = space.split(" ")
    let letter = split.map(element => element[0].toUpperCase() + element.slice(1).toLowerCase()).join(" ")

    if (/[^a-zA-Z ]/.test(letter)) {
        alert("sorry thers a special char in your name");
    }
    let name2 = prompt("Enter your Full name")

    if (name.length < 5) {
        prompt("Enter your Full name")
    }
    let email = prompt("Enter your Email")
    let age = prompt("Enter your Age")
    let password = prompt("Enter your password")
    
    let space2 = name2.trim()
    let split2 = space2.split(" ")
    let letter2 = split2.map(element => element[0].toUpperCase() + element.slice(1).toLowerCase()).join(" ")
    fullName = letter2
    let sign = new dataBase(fullName, email, age, password)
    users.push(sign)
    console.table(users)
}
