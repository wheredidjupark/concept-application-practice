var StarFrame = React.createClass({
  render: function(){

    var stars = [];
    for(var i=0; i < this.props.numberOfStars; i++){
      stars.push(
        <span className="glyphicon glyphicon-star"></span>
        );
    }

    return (
      <div id="stars-frame">
        <div className ="well">
          {stars}
        </div>
      </div>
      );
  }
});

var ButtonFrame = React.createClass({
  render: function(){
    var correct = this.props.correct;
    var disabled = (this.props.selectedNumbers.length === 0);
    var button;

    switch(correct){
      case true:
        button = (<button className="btn btn-lg btn-success">
        <span className="glyphicon glyphicon-ok"></span></button>);
        break;
      case false:
        button = (<button className="btn btn-lg btn-danger">
        <span className="glyphicon glyphicon-remove"></span></button>);
        break;
      default:
        button = <button className="btn btn-primary btn-lg" disabled={disabled} onClick={this.props.checkAnswer}>=</button>
    };

    return (
      <div id="button-frame">
        {button}
      </div>
      );
  }
});

var AnswerFrame = React.createClass({

  render: function(){

    var props = this.props;
    var selectedNumbers = props.selectedNumbers.map(function(number){

      return (
        <span onClick={props.unselectNumber.bind(null, number)}>{number}</span>
        // <span onClick={this.props.unselectNumber.bind(null, number)}>{number}</span>
        // above will not work because the value of 'this' has changed 
        );

    });

    return (
      <div id="answer-frame">
        <div className="well">
          {selectedNumbers}
        </div>
      </div>
      );
  }
});

var NumbersFrame = React.createClass({
  render: function(){

    var numbers = [];
    var selectedNumbers = this.props.selectedNumbers;
    var selectNumber = this.props.selectNumber;

    for(var i=0; i <=9; i++){
      var classVal = "number selected-"+(selectedNumbers.indexOf(i) >= 0);
      numbers.push(
        <div className={classVal} onClick={selectNumber.bind(null ,i)}>
        {i}
        </div>
        );
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
  getInitialState: function(){
    return {selectedNumbers: [],
            numberOfStars:  Math.floor(Math.random()*9)+1,
            correct: null}
  },
  selectNumber: function(number){
    if(this.state.selectedNumbers.indexOf(number) < 0){
        this.setState({
        selectedNumbers: this.state.selectedNumbers.concat(number)
      });
    }
  },
  unselectNumber: function(number){
    var position = this.state.selectedNumbers.indexOf(number);
    var selectedNumbers = this.state.selectedNumbers;

    selectedNumbers.splice(position, 1);
    this.setState({
      selectedNumbers: selectedNumbers
    });
  },
  checkAnswer: function(){
    var selectedNumbers = this.state.selectedNumbers;
    var sum = selectedNumbers.reduce(function(a,b){
      return a+b;
    }, 0);
    var numberOfStars = this.state.numberOfStars;
    var correct = (numberOfStars === sum);
    this.setState({correct: correct});
  },
  render: function(){

    var numberOfStars = this.state.numberOfStars;
    var selectedNumbers = this.state.selectedNumbers;
    var correct = this.state.correct;
    return (
      <div id="game">
        <h2>Play Nine</h2>
        <hr />
        <div className="clearfix">
          <StarFrame numberOfStars = {numberOfStars}/>
          <ButtonFrame selectedNumbers={selectedNumbers} checkAnswer={this.checkAnswer} correct={correct}/>
          <AnswerFrame selectedNumbers={selectedNumbers} unselectNumber={this.unselectNumber}/>
        </div>

          <NumbersFrame selectedNumbers={selectedNumbers} 
          selectNumber= {this.selectNumber}/>
      </div>
      );
  }
});

ReactDOM.render(<Game />, document.getElementById("container"));