
grid(); // initialize grid system



// creating a grid of 16 div's
function grid(){
    var container = document.getElementById("container");
    for (var i = 0; i < 16; i++) {
        var temp = "<div class='item' id='item" + i + "' onmouseover='mouseOver()'>Ready!</div>"        
        container.innerHTML += temp;
        console.log("New div ready to roll!");
    }
}

// Mouse over changes color
function mouseOver(e) {
    this.addEventListener("mouseover", console.log(event.target.id));
    var temp = event.target.id;
    console.log("this is temp " + temp);    
    document.getElementById(temp).classList.add(".hoverItem");
}