
let contacts = [
    {
        name: "David",
        phone: 123456,
        isFavorite: true,
    },
    {
        name: "Hannah",
        phone: 654321,
        isFavorite: false,
    },
    {
        name: "Juan",
        phone: 456789,
        isFavorite: false,
    }
];
console.log(contacts.length);     //Check how many elements are in the array
console.log(contacts[0].name);

contacts[0].isFavorite = false;
contacts[1].isFavorite = true;

console.log(contacts);
contacts.push({
    name: "Freddy",
    phone: 918273,
    isFavorite: false,
});

console.log(contacts);