var tableSize = 100;
var refreshRate = 100;

var number_of_lines = 7;
var line_distance = 10;

var data = [];
for(i=0; i<tableSize; i++) {
  var row = [];
  for(j=0; j<tableSize; j++) {
    row.push(0);
  }
  data.push(row);
}


var Table = React.createClass({displayName: "Table",
  getInitialState: function() {
      return ({
        data:data
      });
  },
  componentDidMount: function() {
    startTest(this);
  },
  render: function() {

    var returnRows = this.state.data.map(function (row) {
      return (
        React.createElement(TableRow, {arr: row})
      );
    });
    return (
      React.createElement("div", null, 
        React.createElement("table", null, 
          returnRows
        )
      )
    );
  }
});

var TableRow = React.createClass({displayName: "TableRow",
  render: function() {
    var returnCells = this.props.arr.map(function(cell) {
      return (
        React.createElement(TableCell, {name: cell})
      );
    });

    return (
      React.createElement("tr", null, 
        returnCells
      )
    );
  }
});

var TableCell = React.createClass({displayName: "TableCell",
  render: function() {
    return (
      React.createElement("td", {className: this.props.name})
    );
  }
});

function startTest(target) {


  var startOfLines = 0;

  function yourFunction(){
      
      for(i=0; i<tableSize; i++) {
        for(j=0; j<tableSize; j++) {
          data[i][j] = 0;
        }
      }

      var startJ = startOfLines;
      for(m=0; m<number_of_lines; m++) {

        var j = startJ;
        for(i=0; i<tableSize; i++) {
          data[i][j] = 1;
          j++;
          if(j === tableSize) {
            j = 0;
          }
        }
        startJ+=line_distance;

      }
      target.setState({data:data});

      startOfLines += 1;
      if(startOfLines=== tableSize - (number_of_lines -1)*line_distance) {
        startOfLines = 0;
      }
      setTimeout(yourFunction, refreshRate);
  }

  yourFunction();
}

React.render(React.createElement(Table, null), document.getElementById('content'));
