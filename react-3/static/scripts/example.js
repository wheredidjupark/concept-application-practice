
var Button = React.createClass({
    localHandleClick: function(){
        this.props.localHandleClick(this.props.increment);
    },
    render: function(){
        return (
            <button onClick={this.localHandleClick}>+{this.props.increment}</button>
            );
    }
});

var Result = React.createClass({
	render: function(){
		return (
			<div>{this.props.localCounter}</div>
			);
	}
});


var Main = React.createClass({
	getInitialState: function(){
		return {counter: 0}
	},
	handleClick: function(increment){

		this.setState({counter: this.state.counter+increment});
	},
	render: function(){
		return (
			<div>
				<Button localHandleClick={this.handleClick} increment={1}/>
                <Button localHandleClick={this.handleClick} increment={5}/>
                <Button localHandleClick={this.handleClick} increment={10}/>
                <Button localHandleClick={this.handleClick} increment={50}/>
				<Result localCounter= {this.state.counter} />
			</div>
			);
	}
});

ReactDOM.render(
	<Main />
	, document.getElementById("content"));


/*
var TodoList = React.createClass({
  render: function() {
    var createItem = function(item) {
      return <li key={item.id}>{item.text}</li>;
    };
    return <ul>{this.props.items.map(createItem)}</ul>;
  }
});


var TodoApp = React.createClass({
  getInitialState: function() {
    return {items: [], text: ''};
  },
  onChange: function(e) {
    this.setState({text: e.target.value});
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var nextItems = this.state.items.concat([{text: this.state.text, id: Date.now()}]);
    var nextText = '';
    this.setState({items: nextItems, text: nextText});
  },
  render: function() {
    return (
      <div>
        <h3>TODO</h3>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.onChange} value={this.state.text} />
          <button>{'Add #' + (this.state.items.length + 1)}</button>
        </form>
      </div>
    );
  }
});

ReactDOM.render(<TodoApp />, document.getElementById("content"));
*/