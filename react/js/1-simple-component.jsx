var App = React.createClass({

    render: function () {
        var that = this;
        return (
            <h1>Hello from component</h1>
        )
    }
})


ReactDOM.render(<App></App>, document.getElementById('myContainer'));
