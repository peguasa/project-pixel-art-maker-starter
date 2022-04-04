// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
const height = document.getElementById('inputHeight');
const width = document.getElementById('inputWidth');
const cp = document.getElementById('colorPicker');
const form = document.getElementById('sizePicker');
const table = document.getElementById('pixelCanvas');

form.addEventListener('submit', function(event){
     event.preventDefault();
    //  table.innerHTML = '';
     makeGrid();
})

 table.addEventListener('click', function(event){
    if(event.target.nodeName ==='TD'){
      event.target.style.backgroundcolor = colorPicker.value;
    }
 });

function makeGrid() {
        let grid = '';
    for (var i = 1; i <= height.value; i++){
        grid += "<tr>";
        for (var j = 1; j<= width.value; j++){
            grid += "<td></td>";
    }
         grid += "</tr>";
        }
      table.innerHTML = grid;
// Your code goes here!
}
// function addColor(){
//    const cp = document.getElementById('colorPicker').value;  
//    return cp;
// }

