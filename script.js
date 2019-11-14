grid(64); // initialize grid system
gridItems = document.querySelectorAll(".item");

// user input - get size
var submitSize = document.getElementById('submitSize');
submitSize.addEventListener('click', gridSize, false); 

// submitting size of grid and initializing grid creation function
function gridSize(){
    gridItems.forEach(item => container.removeChild(item));
    var size = document.getElementById("inputSize").value;
    size = size * size
    grid(size); // initialize grid system
}

// creating dynamic grid of divs with unique item names and hover functionality
function grid(size){
    var container = document.getElementById("container");
    for (var i = 0; i < size; i++) {
        const temp = document.createElement("div");
        temp.className = "item";
        temp.setAttribute("id", "item" + i);
        temp.setAttribute("onmouseover", "mouseOver()");
        container.appendChild(temp);      
        console.log("New div ready to roll!");
    }
}

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