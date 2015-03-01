var tableSize = 200;
var refreshRate = 16;

var number_of_lines = 10;
var line_distance = 12;

var data = [];
for(i=0; i<tableSize; i++) {
  var row = [];
  for(j=0; j<tableSize; j++) {
    if(j===4) row.push("yellow");
    else row.push("blue");

  }
  data.push(row);
}


var myView = function() {
	return m("html", [
		m("body",[
            m("table", data.map(function(item) {
            	return(
	            		m("tr",item.map(function(innerItem) {
	            			return(
	            					m("td",{class: innerItem})
	            				)
	            		}))
            		)
            }))
		])
	]);
};

m.render(document.getElementById("content"), myView());

startTest();

function startTest() {


  var startOfLines = 0;

  function yourFunction(){
      
      for(i=0; i<tableSize; i++) {
        for(j=0; j<tableSize; j++) {
          data[i][j] = "blue";
        }
      }

      var startJ = startOfLines;
      for(q=0; q<number_of_lines; q++) {

        var j = startJ;
        for(i=0; i<tableSize; i++) {
          data[i][j] = "yellow";
          j++;
          if(j === tableSize) {
            j = 0;
          }
        }
        startJ+=line_distance;

      }
      
      m.render(document.getElementById("content"), myView());

      startOfLines += 1;
      if(startOfLines=== tableSize - (number_of_lines -1)*line_distance) {
        startOfLines = 0;
      }
      setTimeout(yourFunction, refreshRate);
  }

  yourFunction();
}
