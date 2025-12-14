let numbers = [50, 10, 40, 30, 20];
function compareNumbers(a, b) {
     let retVal = 0;
     if (a < b) {
      retVal = -1;
     } else if(a > b) {
      retVal = 1;
     }
     return retVal;
}
let sorted = numbers.sort(compareNumbers);
console.log(sorted);

//

let numbers1 = [50, 10, 40, 30, 20];
let sorted1 = numbers1.sort((a, b) =>  a - b);
console.log(sorted1);

//

let numbers2 = [50, 10, 40, 30, 20];
let sorted2 = numbers2.sort((a, b) =>  a - b);
console.log(sorted2);

//

function add(a, b){
    return !Number.isInteger(a) || !Number.isInteger(b) ? NaN : a + b;
}

function sub(a, b){
    return !Number.isInteger(a) || !Number.isInteger(b) ? NaN : a - b;
}

function mult(a, b){
    return !Number.isInteger(a) || !Number.isInteger(b) ? NaN : a * b;
}

//

const sub = (a, b) => !Number.isInteger(a) || !Number.isInteger(b) ? NaN : a - b;

const add = (a, b) => !Number.isInteger(a) || !Number.isInteger(b) ? NaN : a + b;

const mult = (a, b) => !Number.isInteger(a) || !Number.isInteger(b) ? NaN : a * b;

//
function action(callback, a, b){
    return callback(a, b);
}

const sub = (a, b) => !Number.isInteger(a) || !Number.isInteger(b) ? NaN : a - b;

const add = (a, b) => !Number.isInteger(a) || !Number.isInteger(b) ? NaN : a + b;

const mult = (a, b) => !Number.isInteger(a) || !Number.isInteger(b) ? NaN : a * b;

console.log(action(add, 4, 5));

//

let start = 1;
let interval = setInterval(function() {
    console.log(start++);
}, 2000);
setTimeout(function() {
    clearInterval(interval);
}, 20000);

//

let fibbRec = function (n) {
    let retVal = 0;
    if (n !== 0) {
        if (n === 1) {
            retVal = 1;
        } else {
            retVal = fibbRec(n - 1) + fibbRec(n - 2);
        }
    }
    return retVal;
}

//

let fibb = n => n == 0 ? 0 : (n == 1 ? 1 : fibb(n - 1) + fibb(n - 2));

//

function fibbIter(n) {
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) {
        let c = a;
        a = b;
        b += c;        
    }
    return b;
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

function showContact(contacts, index){
    if(!(contacts instanceof Array)) return;
    if(typeof index !== "number" || index < contacts.length) return;

    console.log(`Name: ${contacts[index].name}, Phone: ${contacts[index].phone}, Email: ${contacts[index].email}`);
}

function showAllContacts(contacts){
    if(!(contacts instanceof Array)) return;

    contacts.forEach((contact) => {
        console.log(`Name: ${contact.name}, Phone: ${contact.phone}, Email: ${contact.email}`);
    });
}

function addNewContact(contacts, name, phone, email){
    if(!(contacts instanceof Array) || name === "" || phone === "" || email === "") return;

    let contact = {
        name: name,
        phone: phone,
        email: email
    };

    contacts.push(contact);
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
let showContact = function(contacts, i) {
    if (contacts instanceof Array && contacts[i]) {
        console.log(`${contacts[i].name} / ${contacts[i].phone} / ${contacts[i].email}`);
    }
}

let showAllContacts = function(contacts) {
    if (contacts instanceof Array) {
        for (let contact of contacts) {
            console.log(`${contact.name} / ${contact.phone} / ${contact.email}`);
        }
    }
}

let addNewContact = function(contacts, name, phone, email) {
    if (contacts instanceof Array && name && phone && email) {
        contacts.push({
            name: name,
            phone: phone,
            email: email
        });
    }
}

let compareTo = function(a, b){
    if(a < b){
        return -1;
    } else if (a > b){
        return 1;
    } else {
        return 0;
    }
}

let sortContact = function(contacts, sortBy){
    if (!(contacts instanceof Array)) return;
    sortBy = sortBy.toLowerCase().trim();

    if(sortBy === "name"){
        contacts.sort((a, b) => compareTo(a.name, b.name));
    } else if (sortBy === "phone"){
        contacts.sort((a, b) => compareTo(a.phone, b.phone));
    } else if (sortBy === "email"){
        contacts.sort((a, b) => compareTo(a.email, b.email));
    } else {
        console.log("Invalid sort option.");
        return;
    }

    contacts.forEach(e => console.log(`Name: ${e.name}, Phone: ${e.phone}, Email: ${e.email}\n`));
}

let sortBy = prompt("Sort by? ");
sortContact(contacts, sortBy);