var data = [
  [0,0,0],
  [0,0,0],
  [0,0,0]
];

var rows = 10;
var columns = 10;

for(i=0; i<rows; i++) {
  var row = [];
  for(j=0; j<columns; j++) {
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
        React.createElement("td", null, 
          "hello"
        )
      );
    });

    return (
      React.createElement("tr", null, 
        returnCells
      )
    );
  }
});

React.render(React.createElement(Table, null), document.getElementById('content'));
