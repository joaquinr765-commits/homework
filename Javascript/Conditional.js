let userAge = 17;
let hasTicket = true;
let isMember = true;

// ---Looking for success---
// if (userAge >= 18 && hasTicket && isMember) {
//     console.log("Access granted. Enjoy the event!");
// } else {
//     console.log("You have no permission");
// }


// ---Looking for error---
if (userAge < 18) {
    console.log("You must be 18 or older to join the event");
} else if (hasTicket === false) {
    console.log("You need a ticket");
} else if (isMember === false) {
    console.log("You need to be member");
} else {
    console.log("Welcome to the Event!");
}

