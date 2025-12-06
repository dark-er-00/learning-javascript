for (i=100; i>=0; i-=10) {
    console.log(i);
}

//

let biggerNum = Number(prompt("Enter an initial value: ", 0));
let finalNum = Number(prompt("Enter a final value: ", 0));

if(biggerNum > finalNum){
    for(i = biggerNum; i >= finalNum; i-=10){
        console.log(i);
    }
} else {
    alert("Initial value must be bigger than the final value.");
}

//

let numbers = [21, 45, 100, 12, 11, 78, 61, 4, 39, 22];

numbers.forEach(e => console.log(e));

numbers.forEach(e => e % 2 === 0 ? console.log(e) : null);

numbers.forEach(num => {
    if(num > 10 && num < 60){
        console.log(num);
    }
});

//

let movies = [];
let title;
let rating;

while(true){
    movieName = prompt("Enter the title: ");
    if(movieName === null) break;

    rating = prompt("Enter rating in imdb: ");
    if(rating === null) break;

    let movie = {
        title: movieName,
        imdb: Number(rating)
    };

    movies.push(movie);
}

movies
    .filter(movie => movie.imdb < 7)
    .forEach(movie => console.log(`${movie.title} (${movie.imdb})`));

movies
    .filter(movie => movie.imdb >= 7)
    .forEach(movie => console.log(`${movie.title} (${movie.imdb})`));

//

let vessel = {
    LATITUDE: 40.07288,
    LONGITUDE: 154.48535,
    COURSE: 285.6,
    SPEED: 14.0,
    IMO: 9175717,
    NAME: "MARENO"
};

for(let key in vessel) { 
    console.log(`${key} -> ${vessel[key]}`); 
}

//

while(true){
    let num1 = Number(prompt("Enter first number: "));
    if(String(num1) === "Q") break;

    let num2 = Number(prompt("Enter second number: "));
    if(String(num2) === "Q") break;

    let operator = prompt("Enter an operator (+, -, *, /): ");
    if(operator === "Q") break;

    if(!Number.isNaN(num1) && !Number.isNaN(num2)){
        switch(operator){
            case "+":
                alert(num1 + num2);
                break;
                
            case "-":
                alert(num1 - num2);
                break;
                
            case "*":
                alert(num1 * num2);
                break;
                
            case "/":
                alert(num1 / num2);
                break;
                
            default:
                alert("Invalid operator");
        }
    } else {
        alert("You input an invalid operand.");
    }
}

//

let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
    }, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
    }, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
}];

while(true){
    console.log("[1] - Display the first contact");
    console.log("[2] - Display the last contact");
    console.log("[3] - Display all contacts");
    console.log("[4] - Add a new contact");
    console.log("[5] - Exit the program");
    let choice = Number(prompt("Enter your choice: "));

    switch(choice){
        case 1:
            alert(`Name: ${contacts[0].name}`)
            break;

        case 2:
            break;
            
        case 3:
            break;

        case 4:
            break;

        case 5:
            break;

        default:
            console.log("Invalid choice")
    }
}