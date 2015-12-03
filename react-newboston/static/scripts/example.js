var FirstComponent = React.createClass({
    doSomething: function() {
        alert("The text displaying is: "+ this.props.children);
    },

    render: function() {
        return ( < div onClick = {this.doSomething} >
            < h2 > My name is {
                this.props.name
            } < /h2> < /div > );
}

});


ReactDOM.render( < div >
        < FirstComponent name = "Kim" > This paragraph... < /FirstComponent> < FirstComponent name = "Mich" > < /FirstComponent > < FirstComponent name = "Carl" > < /FirstComponent> < FirstComponent name = "Ashe" > < /FirstComponent > < /div>, document.getElementById("content"));
