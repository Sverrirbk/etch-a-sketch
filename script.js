
grid(); // set up  the grid system



// creating a grid of 16 div's
function grid(){
    var container = document.getElementById("container");
    for (var i = 0; i < 16; i++) {
       container.innerHTML += '<div class="item">Ready!</div>';
        console.log("New div ready to roll!");
    }
}
