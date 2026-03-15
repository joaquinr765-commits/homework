
let tasks = [
    "Study JavaScript",
    "Drink Water",
    "Go for a walk"
];

tasks.push("Do the Laundry")

console.log("Add Task", tasks);

tasks.unshift("Finish homework");

console.log("Add task to prior", tasks);

let removedTask = tasks.pop();
console.log("Removed Task:", removedTask);
console.log(tasks); 

tasks.forEach((task, index) => {
   console.log(`${index + 1}. ${task}`);
});

let longTasks = tasks.filter(task => task.length > 15);
console.log("Longest Task",longTasks);