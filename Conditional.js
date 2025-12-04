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

let choice = Number(prompt("[1] - Show the first contact\n[2] - Show the last contact\n[3] - Add new contact\nChoice: "));

switch(choice){
    case 1:
        alert(`Name: ${contacts[0].name}, Phone: ${contacts[0].phone}, Email: ${contacts[0].email}`);
        break;
        
    case 2:
        let last = contacts.length - 1;
        alert(`Name: ${contacts[last].name}, Phone: ${contacts[last].phone}, Email: ${contacts[last].email}`);
        break;
        
    case 3:
        let Name = prompt("Enter a name: ");
        let Phone = prompt("Enter a phone number: ");
        let Email = prompt("Enter an email: ");
        
        contact = {
            name: Name,
            phone: Phone,
            email: Email
        };
        
        contacts.push(contact);
        
        alert("Added successfully");
        break;
        
    default:
    console.log("Invalid choice")
}