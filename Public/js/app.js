
let client = []

class dataBase {
    constructor(fullName, email, age, password) {
        this.fullName = fullName
        this.email = email
        this.age = age
        this.password = password
    }
}

let users = new dataBase("nassima", "nassima@gmail.com", 21, "123456")

client.push(users)

let user = prompt("Choose sign-up or login or change the password")

let fullName = ""

// *sign-up

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
        let fullName
        while (true) {
            if (/[^a-zA-Z ]/.test(fullName)) {
                alert("Sorry, your name contains special characters")
            } else {
                return fullName
            }
        }
    }
    specialcharacters()



    // ! Email
    let email = prompt("Entrez votre email")
    while (email.includes(" ") || email.length < 10 || !email.includes("@")) {
        email = prompt("Email invalide. Entrez votre email à nouveau")
    }

    for (let cheked of client) {
        if (email === cheked.email) {
            email = prompt("email existe déjà. Entrez un email unique")
        }
    }




    // ! Age
    let age = prompt("Enter your Age")
    while ((age.includes(" ")) || (age == "") || (age.length > 2) || (age == 0) || (isNaN(age))) {
        age = prompt("Try Again")
    }




    // ! Password
    let password = prompt("Enter your password")
    while ((password.includes(" ")) || (password.length <= 7) || password.includes("@" || "#" || "-" || "+" || "*" || "/")) {
        password = prompt("Mot de passe invalide, try again")
    }
    let sign = new dataBase(fullName, email, age, password)
    client.push(sign)
    console.table(client)



    //! Password_confirmed
    function Passwordconfirmed() {
        while (true) {
            let confirm = prompt("Confirm your password");
            if (password === confirm) {
                return password;
            } else {
                alert("Passwords not the same, please try again.");
            }
        }
    }

    Passwordconfirmed()

}


           // *login

function logIn(client) {
    let email = prompt("Enter your Email").trim().toLowerCase();
    let user = client.find(user => user.email === email);

    if (!user) {
        alert("Email not found.");
        return;
    }
    let password = prompt("Enter your Password");

    if (password === user.password) {
        alert("Vous êtes connecté");
    } else {
        alert("Les informations fournies sont incorrectes");
    }
}
let action = prompt("Choose sign-up or login");
if (action === "sign-up") {
    signup(client);
} else if (action === "login") {
    logIn(client);
} else {
    alert("Invalid choice. Please choose 'sign-up' or 'login'.");
}