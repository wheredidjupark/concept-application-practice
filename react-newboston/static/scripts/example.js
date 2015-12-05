var FirstComponent = React.createClass({
    doSomething: function() {
        alert("The text displaying is: "+ this.props.children);
    },

    render: function() {
        return ( 
        	<div onClick = {this.doSomething}>
            	<h2> My name is {this.props.name}</h2> 
            </div>
            );
}

});

ReactDOM.render( 
	<div>
        <FirstComponent name = "Kim" > This paragraph... </FirstComponent>
        <FirstComponent name = "Mich" > Mich stands for Michigan</FirstComponent>
        <FirstComponent name = "Carl" > Carl in Walking Dead!</FirstComponent>
        <FirstComponent name = "Ashe" > Ashe in League of Legends</FirstComponent> 
    </div>,
   	document.getElementById("content"));

when you render twice in the same target element, the second overwrites the first
ReactDOM.render( 
    <div>
        This is a test
    </div>,
    document.getElementById("content"));

Using our data model
Let's say we have a JSON data which we want to use for rendering

var dataArray = [
  {id:1, author: "Pete Hunt", text:"This is one comment"},
  {id:2, author: "Jordan Walke", text: "This is another comment"}
];

var CommentBox = React.createClass({
  
  render: function(){


    return (
      <div className="commentBox">
        <h1>Comments</h1>
        //STEP 2: Pass our data property to CommentList
        <CommentList data={this.props.data} />
      </div>
      );  


    }
    
});


var CommentList = React.createClass({

  render: function(){
    //for each item in our data array


    var commentNodes = this.props.data.map(function(comment){
        // console.log("Comment in node: ", comment);

        return (
            <Comment author={comment.author} key={comment.id}>
                {comment.text}
            </Comment>
        );

    });
    
      
	

    console.log(commentNodes);
	return (
		<CommentList>
			{commentNodes}
		</CommentList>
		);
	}
});
  
  ReactDOM.render(
    <CommentBox data={dataArray} />,
    //STEP 1: as you can see here, the data prop is set equal to dataArray
    document.getElementById('content')
    );



