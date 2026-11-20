let todo = ["Study JS", "Eat lunch"];
// checks if the task is not in the array and adds it to the beginning
if (!todo.includes("Eat lunch")) {
    todo.unshift("Eat lunch");
} else {
    console.log("The to do array already has an 'Eat lunch' task.");
}
if (!todo.includes("Review SQL")) {
    todo.unshift("Review SQL");
} else {
    console.log("The to do array already has a 'Review SQL' task.");
}   
console.log(todo.pop());    // removes the last task and prints it
console.log(todo.join(" | "));  // print the tasks as a single string separated by spaces and pipe