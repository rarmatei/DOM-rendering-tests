var data = [
  [1,0,0],
  [0,0,0],
  [0,0,0]
];


var Table = React.createClass({displayName: "Table",
  getInitialState: function() {
      return ({
        data:data
      });
  },
  render: function() {

    var returnRows = this.state.data.map(function (row) {
      return (
        React.createElement(TableRow, null)
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
        React.createElement("td", null
          
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
