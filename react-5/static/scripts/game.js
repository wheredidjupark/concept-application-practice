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
    var acceptAnswer = this.props.acceptAnswer;
    var selectedNumbers= this.props.selectedNumbers;
    switch(correct){
      case true:
        button = (<button className="btn btn-lg btn-success">
        <span className="glyphicon glyphicon-ok" onClick={acceptAnswer}></span></button>); //onClick = {acceptAnswer.bind(null, selectedNumbers)}
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
        <br />
        <button className ="btn btn-warning btn-sm" onClick={this.props.redrawStars}>
          <span className="glyphicon glyphicon-refresh"></span>
          {this.props.redraws}
        </button>
      </div>
      );
  }
});

var AnswerFrame = React.createClass({

  render: function(){

    var props = this.props;
    var selectedNumbers = props.selectedNumbers;
    selectedNumbers = props.selectedNumbers.map(function(number){

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
    var usedNumbers = this.props.usedNumbers;

    for(var i=0; i <=9; i++){
      var classVal = "number selected-"+(selectedNumbers.indexOf(i) >= 0);
      classVal += " used-"+(usedNumbers.indexOf(i) >= 0);
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
            numberOfStars: this.generateStars(),
            correct: null,
            usedNumbers: [],
            redraws: 10
          }
  },
  generateStars: function(){
    return (Math.floor(Math.random()*9)+1);
  },
  selectNumber: function(number){
    var selectedNumbers = this.state.selectedNumbers;
    var usedNumbers = this.state.usedNumbers;
    //if not a used number & not selected.
    if(selectedNumbers.indexOf(number) < 0 && usedNumbers.indexOf(number) < 0){
        this.setState({
        selectedNumbers: selectedNumbers.concat(number),
        correct: null
      });
    }
  },
  unselectNumber: function(number){
    var position = this.state.selectedNumbers.indexOf(number);
    var selectedNumbers = this.state.selectedNumbers;

    selectedNumbers.splice(position, 1);
    this.setState({
      selectedNumbers: selectedNumbers,
      correct: null
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
  acceptAnswer: function(){
    //accepting an answer.
    //The used numbers cannot be selected and used again.
    //generate new stars
    //empty selected numbers
    //bring check button back to normal
    var acceptedAnswers = this.state.usedNumbers.concat(this.state.selectedNumbers);
    this.setState({
      correct: null,
      usedNumbers: acceptedAnswers,
      selectedNumbers: [],
      numberOfStars: this.generateStars()
    });
    //accept an answer if the answer is correct.
    //Also, we would like to accept the answer only when the user clicks the btn-success
  },
  redrawStars: function(){
    var redraws = this.state.redraws;
    var newStars;

    if(redraws > 0){
      redraws--;
      newStars = this.generateStars();
    }

    this.setState({
      correct:null,
      selectedNumbers: [],
      numberOfStars: newStars,
      redraws: redraws
    })
  },
  render: function(){

    var numberOfStars = this.state.numberOfStars;
    var selectedNumbers = this.state.selectedNumbers;
    var correct = this.state.correct;
    var usedNumbers = this.state.usedNumbers;
    return (
      <div id="game">
        <h2>Play Nine</h2>
        <hr />
        <div className="clearfix">
          <StarFrame numberOfStars = {numberOfStars}/>
          <ButtonFrame selectedNumbers={selectedNumbers} checkAnswer={this.checkAnswer} correct={correct} acceptAnswer={this.acceptAnswer} redraws={this.state.redraws} redrawStars={this.redrawStars}/>
          <AnswerFrame selectedNumbers={selectedNumbers} unselectNumber={this.unselectNumber}/>
        </div>

          <NumbersFrame selectedNumbers={selectedNumbers} 
          selectNumber= {this.selectNumber} usedNumbers={usedNumbers}/>
      </div>
      );
  }
});

ReactDOM.render(<Game />, document.getElementById("container"));