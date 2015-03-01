window.onload = function() {
	typeof window !== "undefined" && (window.React = React);
};


var data = [
					{author:"Rares Matei", text:1},
					{author:"Eddie Stanston", text:2}
				];

var CommentBox = React.createClass({displayName: "CommentBox",
  getInitialState: function() {
  	 return ({
  	 			data:data
			});
  },
  componentDidMount: function() {
		test(this);
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
  React.createElement(CommentBox, null),
  document.getElementById('content')
);

function test(target) {


	function yourFunction(){
	    data[0].text+=1;
	    target.setState({data:data});
	    setTimeout(yourFunction, 1);
	}

	yourFunction();
}


