// global variables
var container = document.getElementById("container");
var width = getComputedStyle(document.getElementById("container"))
        .getPropertyValue('width');
var height = getComputedStyle(document.getElementById("container"))
        .getPropertyValue('height');

// slider variables
var dimensionsSlider = document.getElementById("dimensionsSlider");
var dimensionsOutput = document.getElementById("dimensionsOutput");

grid(16); // initialize grid system

// user input - get size
var submitSize = document.getElementById("submitSize");
submitSize.addEventListener("click", gridSize, false);

// user input - toggle hover
var hoverState = true;
var hoverToggle = document.getElementById("hoverToggle");
hoverToggle = hoverToggle.addEventListener("click", hoverOnOff, true);


function hoverOnOff() {
    if (hoverState == true)
    {
        hoverState = !hoverState;
    }
    else {
        hoverState = !hoverState
    }
    console.log(hoverState);
      }


// user input - reset
var reset =  document.getElementById("resetGrid");
reset.addEventListener("click", gridSize, false);

// submitting size of grid and initializing grid creation function
function gridSize() {
    var inputSize = document.getElementById("inputSize").value;
    resetGrid();
    setDimensions();
    numberOfRows(inputSize); // set number of rows and columns
    grid(inputSize); // initialize div creation

}

function resetGrid() {
    gridItems = document.querySelectorAll(".item");
    gridItems.forEach(item => container.removeChild(item));
}

setDimensions = function() {
    container.style.width = width + "px";
    container.style.height = height + "px";
    console.log(width);
    console.log(height);
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
        const temp = document.createElement("div");
        temp.className = "item";
        temp.setAttribute("id", "item" + i);
        temp.setAttribute("onmouseover", "mouseOver()");
        temp.setAttribute("onmousedown", "mouseClick()");
        temp.style.height = (divSize + "px");
        temp.style.width = (divSize + "px");
        container.appendChild(temp);      
        console.log("New div ready to roll!");
    }
}

function setItemSize(size) {
    width = parseInt(width);
    height = parseInt(height);
    var divSize = (width * height) / (size * size);
    divSize = Math.sqrt(divSize);
    console.log("each div is " + divSize);
    return(divSize);    
}

// mouse click adds color, ignores opacity level

function mouseClick (id) {
    var temp = event.target.id;
    this.addEventListener("onmousedown", changeColor(temp)); 
    document.getElementById(temp).style
        .setProperty('opacity', "1");
    
}

// mouse over changes color to black adding css to generated divs
// possible to add argument that changes color.
function mouseOver() {
    if (hoverState == true) {
        var temp = event.target.id;
         this.addEventListener("mouseover", mouseOverColor(temp)); 
        console.log("this is temp " + temp);  
    }
    else {
        return;
    }
}

// makes it 10% more dark with every use
function mouseOverColor(id) {
    changeColor(id);
    let test = getComputedStyle(document.getElementById(id))
        .getPropertyValue('opacity');
    let opacity = Number(test) + 0.1;
    document.getElementById(id).style
        .setProperty('opacity', opacity);
    
}

// color
function changeColor(id) { 
    document.getElementById(id).style.backgroundColor 
        = document.getElementById( "color").value; 
} 

// slider functions
dimensionsSlider.oninput = function() {
    dimensionsOutput.innerHTML = this.value;
    width = this.value
    height = this.value;
    return width, height;
}

