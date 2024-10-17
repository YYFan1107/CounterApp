// School Counter App
let count = 0;

function increment() {
    count++;
    console.log(count);
    document.getElementById("count-el").innerHTML = count;
}


function save() {
    let saved = count;
    let savedNums = document.getElementById("saved-el");
    savedNums.innerHTML += saved + " - ";
}