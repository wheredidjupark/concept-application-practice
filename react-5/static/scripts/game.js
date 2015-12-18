var StarFrame = React.createClass({
  render: function(){

    return (
      <div id="stars-frame">
        <div className ="well">
          <span className="glyphicon glyphicon-star"></span>
        </div>
      </div>
      );
  }
});

var ButtonFrame = React.createClass({
  render: function(){
    return (
      <div id="button-frame">
        <button className="btn btn-primary btn-lg">=</button>
      </div>
      );
  }
});

var AnswerFrame = React.createClass({
  render: function(){
    return (
      <div id="answer-frame">
        <div className="well"></div>
      </div>
      );
  }
});

var Game = React.createClass({
  render: function(){
    return (
      <div id="game">
        <h2>Play Nine</h2>
        <hr />
        <div className="clearfix">
          <StarFrame />
          <ButtonFrame />
          <AnswerFrame />
        </div>
      </div>
      );
  }
});

ReactDOM.render(<Game />, document.getElementById("container"));