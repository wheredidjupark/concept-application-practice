var StarsFrame = React.createClass({
  render: function(){

    var nStars = Math.floor(Math.random()*9)+1;
    var stars = [];

    for(var i=0; i < nStars; i++){
      stars.push(<span className="glyphicon glyphicon-star"></span>);
    }

    return (
      <div id="stars-frame">
        <div className="well">
        {stars}
        </div>
      </div>
      );
  }
});

var ButtonFrame = React.createClass({
  render: function(){
    return (
      <div id="button-frame">
        <button className="btn btn-primary">=</button>

      </div>
      );
  }
});

var NumbersFrame = React.createClass({
  render: function(){
    var numbers = [];

    for(var i=1; i <=9; i++){
      numbers.push(<div>{i}</div>);
    }
    
    return (
      <div id="numbers-frame">
        <div className="well">
          {numbers}
        </div>
      </div>
      );
  }
});

var Game = React.createClass({
  render: function(){
    return (
      <div id="game">
        <h2>Play Nine</h2>
        <StarsFrame />
        <ButtonFrame />
        <NumbersFrame />
      </div>
      );
  }
});


ReactDOM.render(<Game />, document.getElementById("container"));