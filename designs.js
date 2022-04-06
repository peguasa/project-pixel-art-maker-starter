// Select color input
// Select size input

const height = document.getElementById('inputHeight');
const width = document.getElementById('inputWidth');
const form = document.getElementById('sizePicker');
const table = document.getElementById('pixelCanvas');


form.addEventListener('submit', function(event){
     event.preventDefault();
     makeGrid(height, width);
})


// creating the makeGrid function

function makeGrid() {
        let grid = '';
    for (var i = 1; i <= height.value; i++){
        grid += "<tr>";
        for (var j = 1; j<= width.value; j++){
            grid += "<td class='block'></td>";
        }
         grid += "</tr>";
    }
      table.innerHTML = grid;


}


// adding color to the grid

function addColor() {
    const cp = document.getElementById('colorPicker');
    document.getElementById('pixelCanvas').addEventListener('click', function(evt) {
        if(evt.target.classList.contains('block')) {
            const event = evt.target
        
            if(event.hasAttribute('style')) {
                event.removeAttribute('style');

            }else{
                event.style.backgroundColor = cp.value;
            }
        }
    });
}
addColor();
