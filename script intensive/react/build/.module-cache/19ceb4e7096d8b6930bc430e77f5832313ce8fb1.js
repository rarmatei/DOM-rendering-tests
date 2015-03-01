var data = [
{author:"Rares Matei", text:"First post"},
{author:"Eddie Stanston", text:"My comment!!"}
];

var CommentBox = React.createClass({displayName: "CommentBox",
  getInitialState: function() {
  	 return ({data:[
{author:"Rares Matei", text:"First post"},
{author:"Eddie Stanston", text:"My comment!!"}
]});
  },
  render: function() {
    return (
      React.createElement("div", {className: "commentBox"}, 
        React.createElement("h1", null, "Comments"), 
        React.createElement(CommentList, {data: this.state.data}), 
        React.createElement(CommentForm, null)
      )
    );
  }
});

var CommentList = React.createClass({displayName: "CommentList",
  render: function() {
    var commentNodes = this.props.data.map(function (comment) {
      return (
        React.createElement(Comment, {author: comment.author}, 
          comment.text
        )
      );
    });
    return (
      React.createElement("div", {className: "commentList"}, 
        commentNodes
      )
    );
  }
});

var CommentForm = React.createClass({displayName: "CommentForm",
  render: function() {
    return (
      React.createElement("div", {className: "commentForm"}, 
        "Hello, world! I am a CommentForm."
      )
    );
  }
});

var Comment = React.createClass({displayName: "Comment",
	render: function() {
		return(
			React.createElement("div", {className: "comment"}, 
				React.createElement("h2", {className: "commentAuthor"}, " ", this.props.author, " "), 
				this.props.children
			)
		);
	}
});

React.render(
  React.createElement(CommentBox, {data: data}),
  document.getElementById('content')
);