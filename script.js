<<<<<<< HEAD
// global variables
var width = getComputedStyle(document.getElementById("container"))
    .getPropertyValue('width');
var height =getComputedStyle(document.getElementById("container"))
    .getPropertyValue('height');
var container = document.getElementById("container");

grid(16); // initialize grid system

=======
grid(64); // initialize grid system
gridItems = document.querySelectorAll(".item");
>>>>>>> 502702a27851fb5d3cc36ec853d68454a6c4baf4

// user input - get size
var submitSize = document.getElementById('submitSize');
submitSize.addEventListener('click', gridSize, false); 

// submitting size of grid and initializing grid creation function
function gridSize(){
<<<<<<< HEAD
    // start by removing all items from grid
    gridItems = document.querySelectorAll(".item");
    gridItems.forEach(item => container.removeChild(item));
    var inputSize = document.getElementById("inputSize").value;
    numberOfRows(inputSize); // set number of rows and columns
    grid(inputSize); // initialize div creation

}

// number of rows and columns
function  numberOfRows(inputSize) {
    var value = inputSize;
    container.style.gridTemplateColumns = ("repeat(" + value + ", 1fr)");
    container.style.gridTemplateRows = ("repeat(" + value + ", 1fr)");

}

// creating  grid of divs with unique item names and hover functionality
function grid(inputSize){
    divSize = setItemSize(inputSize) // set item size
    totalDivs = inputSize * inputSize
    for (var i = 0; i < totalDivs; i++) {
=======
    gridItems.forEach(item => container.removeChild(item));
    var size = document.getElementById("inputSize").value;
    size = size * size
    grid(size); // initialize grid system
}

// creating dynamic grid of divs with unique item names and hover functionality
function grid(size){
    var container = document.getElementById("container");
    for (var i = 0; i < size; i++) {
>>>>>>> 502702a27851fb5d3cc36ec853d68454a6c4baf4
        const temp = document.createElement("div");
        temp.className = "item";
        temp.setAttribute("id", "item" + i);
        temp.setAttribute("onmouseover", "mouseOver()");
<<<<<<< HEAD
        temp.style.height = (divSize + "px");
        temp.style.width = (divSize + "px");
=======
>>>>>>> 502702a27851fb5d3cc36ec853d68454a6c4baf4
        container.appendChild(temp);      
        console.log("New div ready to roll!");
    }
}

<<<<<<< HEAD
function setItemSize(size) {
    width = parseInt(width);
    height = parseInt(height);
    var divSize = (width * height) / (size * size);
    divSize = Math.sqrt(divSize);
    console.log("each div is " + divSize);
    return(divSize);    
}

=======
>>>>>>> 502702a27851fb5d3cc36ec853d68454a6c4baf4
// mouse over changes color to black adding css to generated divs
// possible to add argument that changes color.
function mouseOver(e) {
    color = "blackItem";
    var temp = event.target.id;
    this.addEventListener("mouseover", mouseOverColor(temp, color)); 
    console.log("this is temp " + temp);    
}


// makes it 10% more black with every pass
function mouseOverColor(id, color) {
    let test = getComputedStyle(document.getElementById(id))
        .getPropertyValue('opacity');
    let opacity = Number(test) + 0.1;
    document.getElementById(id).style
        .setProperty('opacity', opacity);
}