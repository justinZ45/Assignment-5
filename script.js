let numCol = 3; //initial number of columns

function addRow()
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

 
function addCol()
{
  let columns = document.getElementsByClassName("row");
 
   for(let i = 0; i < columns.length; i++)
   {
       let newCol = document.createElement("div");
      newCol.setAttribute("class", "col-sm border border-dark box white");
      columns[i].appendChild(newCol);
      
   }
   numCol++;
}
