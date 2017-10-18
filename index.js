$(window).on("load", function() { 
  // get the reference for the body
  var body = document.getElementsByTagName("body")[0];
  // creates a <table> element and a <tbody> element
  var tbl = document.createElement("table");
  var tblBody = document.createElement("tbody");
 
  // creating all cells
  for (var i = 0; i < 32; i++) {
    // creates a table row
    var row = document.createElement("tr");
 
    for (var j = 0; j < 32; j++) {
      // Create a <td> element and a text node, make the text
      // node the contents of the <td>, and put the <td> at
      // the end of the table row
      var cell = document.createElement("td");
      cell.setAttribute("height", "23px");
      cell.setAttribute("width", "23px");
      row.appendChild(cell);
    }
 
    // add the row to the end of the table body
    tblBody.appendChild(row);
  }
 
  // put the <tbody> in the <table>
  tbl.appendChild(tblBody);
  // appends <table> into <body>
  tbl.setAttribute("border", "1");
  tbl.setAttribute("border-spacing", 0);
  body.appendChild(tbl);

  // sets the border attribute of tbl to 2;
 
});