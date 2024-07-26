
let users = []
class dataBase {
    constructor(fullName, email, age, password) {
        this.fullName = fullName
        this.email = email
        this.age = age
        this.password = password
    }
}
let user = prompt("Choose sign-up or login or change the password")

let fullName = ""

if (user == "sign-up") {
    // ! Name
    let name = prompt("Enter your Full name")
    let space = name.trim()
    let split = space.split(" ")
    let fullName = split.map((element => element[0].toUpperCase() + element.slice(1).toLowerCase())).join(" ")

    let namelenght = ""
    while (namelenght < 5) {
        namelenght = prompt("Enter your Full name")
        namelenght = namelenght.split(" ").join("").length
    }
    function specialcharacters() {
        let fullName;
        while (true) {
            fullName = prompt("Enter your Full name");
            if (/[^a-zA-Z ]/.test(fullName)) {
                alert("Sorry, your name contains special characters");
            } else {
                return fullName;
            }
        }
    }
    specialcharacters()
    // ! Email
    let email = prompt('Entrez votre email');
    while (email.includes(" ") || email.length < 10 || !email.includes("@")) {
        email = prompt('Email invalide. Entrez votre email à nouveau');
    }

    for (let cheked of users) {
        if (email === cheked.email) {
            email = prompt('email existe déjà. Entrez un email unique');
        }
    }
    let age = prompt("Enter your Age")
    let password = prompt("Enter your password")

    let sign = new dataBase(fullName, email, age, password)
    users.push(sign)
    console.table(users)
}
