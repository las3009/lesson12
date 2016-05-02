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

    render: function () {
        return (
            <div>
                <h2>{this.props.name}</h2>
                <img src={this.props.avatar} alt={this.props.name} />
            </div>
        )
    }
})

var App = React.createClass({
    getInitialState: function () {
        return {
            people: people
        }
    },

    render: function () {
        return (
            <div>
                {this.state.people.map(function (person) {
                    return (
                        <Card name={person.name} avatar={person.avatar}></Card>
                    )
                })}
            </div>
        )
    }
})


ReactDOM.render(<App></App>, document.getElementById('myContainer'));
