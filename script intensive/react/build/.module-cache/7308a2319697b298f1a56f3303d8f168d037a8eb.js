var tableSize = 10;
var refreshRate = 100;

var data = [];
for(i=0; i<tableSize; i++) {
  var row = [];
  for(j=0; j<tableSize; j++) {
    row.push("yellow");
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
        React.createElement("td", {className: cell}
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

function startTest(target) {
  function yourFunction(){
      data[0][0] === "blue" ? data[0][0] = "yellow" : data[0][0] = "blue";
      target.setState({data:data});
      setTimeout(yourFunction, refreshRate);
  }

  yourFunction();
}

React.render(React.createElement(Table, null), document.getElementById('content'));
