let numCol = 3; //initial number of columns

function addRow() //function to add row
{ 
    let table = document.getElementById("grid");  //obtains grid element and sets it to variable
   let rowClass = document.createElement("div");  //creates a new div element
   rowClass.setAttribute("class", "row"); //sets attributes of row class
    addRowClass = table.appendChild(rowClass); //adds new row div class to grid

    for(let i = 0; i < numCol; i++) //loops through the number of columns, to create the correct number of cells
    {
   let newRow = document.createElement("div");  //creates new div element, which will become row
   newRow.setAttribute("class", "col-sm border border-dark box white");  //sets attributes of new row
   addRowClass.appendChild(newRow);  //adds new row to the grid, and shows on screen
    }
}

 
function addCol() //function to add column
{
  let columns = document.getElementsByClassName("row"); //obtains array of row elements, set to columns variable
 
   for(let i = 0; i < columns.length; i++) //traverses columns array
   {
       let newCol = document.createElement("div");  //creates new div element
      newCol.setAttribute("class", "col-sm border border-dark box white"); //sets attributes of div element
      columns[i].appendChild(newCol); //appends new column to grid
      
   }
   numCol++; //increases column count
}

function removeRow() //function to remove row 
{
let delRows = document.getElementsByClassName("row");  //array of row elements 
delRows[0].remove(); //removes first row element of grid
}

 
function removeCol() //function to remove column
{
   let delColumns = document.getElementsByClassName("row");  //row array set equal to variable
   for(let i = 0; i < delColumns.length; i++) //traverses delColumns array
   {
           delColumns[i].removeChild(delColumns[i].lastElementChild); //removes last column of each group of rows
 
   }
   numCol--; //decreases column count by one 
}


let colorSelect = ""; //default colorSelect
let mouseHold = false;  //default mouseHold
let curColor = "";  //default current color



function newColor(choice) 
{
    colorSelect=choice;  //sets color to new choice for click function
    addEvent();
}

function colorSet()
    {
        this.style.backgroundColor = colorSelect;  //sets color using background color

    }

function canChangeColor(box)
{
    box.addEventListener("click", colorSet); //adds click event listener to element

}

function colorAll() //function to color all boxes
{
   let boxes = document.getElementsByClassName("col-sm border border-dark box white"); //obtains all cells
   for(let i = 0; i < boxes.length; i++)  //traverses through every cell
   {
       let box = boxes[i];
    box.style.backgroundColor = colorSelect; //sets cell to the chosen color
 
   }
  
}




function colorAllEmpty() //function to color all white boxes
{
    let boxes2 = document.getElementsByClassName("col-sm border border-dark box white"); //obtains all cells
    for(let i = 0; i < boxes2.length; i++)  //traverses through every cell
    {
        if(boxes2[i].style.backgroundColor == "")  //checks if box is white
        {
            boxes2[i].style.backgroundColor = colorSelect; //if so, sets box to selected color
        }
  
    }

}

function addEvent() //function to add event listeners
{
    let boxes3 = document.getElementsByClassName("col-sm border border-dark box white"); //obtains all cells
    for(let i = 0; i < boxes3.length; i++)  //traverses through every cell
   {
       let box = boxes3[i];
       canChangeColor(box);  //adds event listeners to every cell
   }
}