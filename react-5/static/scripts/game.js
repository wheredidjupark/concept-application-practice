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
    var disabled = (this.props.selectedNumbers.length === 0);
    return (
      <div id="button-frame">
        <button className="btn btn-primary btn-lg" disabled={disabled}>=</button>
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
            numberOfStars:  Math.floor(Math.random()*9)+1}
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
  render: function(){

    var numberOfStars = this.state.numberOfStars;
    var selectedNumbers = this.state.selectedNumbers;
    return (
      <div id="game">
        <h2>Play Nine</h2>
        <hr />
        <div className="clearfix">
          <StarFrame numberOfStars = {numberOfStars}/>
          <ButtonFrame selectedNumbers={selectedNumbers}/>
          <AnswerFrame selectedNumbers={selectedNumbers} unselectNumber={this.unselectNumber}/>
        </div>

          <NumbersFrame selectedNumbers={selectedNumbers} 
          selectNumber= {this.selectNumber}/>
      </div>
      );
  }
});

ReactDOM.render(<Game />, document.getElementById("container"));