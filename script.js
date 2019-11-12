grid(64); // initialize grid system

// get size
var submitSize = document.getElementById('submitSize');
submitSize.addEventListener('click', gridSize, false); 

// user input - submitting size of grid
function gridSize(){
    var size = document.getElementById("inputSize").value;
    console.log(size + " is a good size");
    grid(size); // initialize grid system
}

// creating dynamic grid of divs with unique item
function grid(size){
    var container = document.getElementById("container");
    for (var i = 0; i < size; i++) {
        var temp = "<div class='item' id='item" + i + "' onmouseover='mouseOver()'>Ready!</div>"        
        container.innerHTML += temp;
        console.log("New div ready to roll!");
    }
}

// mouse over changes color by adding class to generated divs
function mouseOver(e) {
    this.addEventListener("mouseover", console.log(event.target.id));
    var temp = event.target.id;
    console.log("this is temp " + temp);    
    document.getElementById(temp).classList.add("hoverItem");
}