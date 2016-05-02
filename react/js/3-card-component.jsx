var people = [
    {
        "name": "Anderson Turner",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/craigrcoles/128.jpg",
        "id": 0
    },
    {
        "name": "Freddy Jones",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/ivanfilipovbg/128.jpg",
        "id": 1
    },
    {
        "name": "Angus Baumbach",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/abovefunction/128.jpg",
        "id": 2
    },
    {
        "name": "Sister Altenwerth",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/ryandownie/128.jpg",
        "id": 3
    }
]

var Card = React.createClass({

    getInitialState: function () {
        return people[0];
    },

    render: function () {
        return (
            <div>
                <h2>{this.state.name}</h2>
                <img src={this.state.avatar} alt={this.state.name} />
            </div>
        )
    }
})

var App = React.createClass({

    render: function () {
        var that = this;
        return (
            <div>
                <Card></Card>
            </div>
        )
    }
})


ReactDOM.render(<App></App>, document.getElementById('myContainer'));
