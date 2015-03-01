var data = [
  [1,0,0],
  [0,0,0],
  [0,0,0]
];

alert(data[0][0]);
alert(data[0][1]);

var Table = React.createClass({displayName: "Table",
  getInitialState: function() {
      return ({
        data:data
      });
  },
  render: function() {
    return (
      React.createElement("div", null, 
        "My table!"
      )
    );
  }
});

React.render(React.createElement(Table, null), document.getElementById('content'));
