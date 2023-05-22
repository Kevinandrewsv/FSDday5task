// For the given JSON iterate over all the for loops (for, for in, for of, forEach)

let names = ["kevin", "Karthi", "kholi", "Partha", "Rohit"];

// for loop

for (let i = 0; i <names.length; i++) {
    console.log("The name is", names[i]);
}

// for of loop

for (let name of names) {
    console.log("The name is", name);
}

// forEach loop

names.forEach(function(name) {
    console.log("The name is", name);
})

// for in loop

let details = {
    firstName: "kevin",
    lastName: "Rahul",
    gender: "Male",
    age: 27,
    place: "Erode"    
}

for (let key in details) {
    console.log(`${key}: ${details[key]}`);
}