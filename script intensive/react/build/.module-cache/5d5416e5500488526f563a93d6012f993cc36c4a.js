var Table = React.createClass({displayName: "Table",
  render: function() {
    return (
      React.createElement("div", null, 
        "My table!"
      )
    );
  }
});

React.render(React.createElement(Table, null), document.getElementById('content'));
