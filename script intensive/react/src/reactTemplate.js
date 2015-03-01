


var data = [
					{author:"Rares Matei", text:1},
					{author:"Eddie Stanston", text:2}
				];

var CommentBox = React.createClass({
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
      <div className="commentBox">
        <h1>Comments</h1>
        <CommentList data={this.state.data} />
        <CommentForm />
      </div>
    );
  }
});

var CommentList = React.createClass({
  render: function() {
    var commentNodes = this.props.data.map(function (comment) {
      return (
        <Comment author={comment.author}>
          {comment.text}
        </Comment>
      );
    });
    return (
      <div className="commentList">
        {commentNodes}
      </div>
    );
  }
});

var CommentForm = React.createClass({
  render: function() {
    return (
      <div className="commentForm">
        Hello, world! I am a CommentForm.
      </div>
    );
  }
});

var Comment = React.createClass({
	render: function() {
		return(
			<div className="comment">
				<h2 className="commentAuthor"> {this.props.author} </h2>
				{this.props.children}
			</div>
		);
	}
});

React.render(
  <CommentBox/>,
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


