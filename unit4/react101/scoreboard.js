// uppercase indicates component...
// all components must return a single DOM element
function Header(props){
    return(
        <div className="header">
            <h1>{props.title}</h1>
        </div>
    )
}

function Counter(props){
    return(
        <div className="counter">
            <button className="minus waves-effect waves-light btn">-</button>
            <div className="player-score">0</div>
            <button className="plus waves-effect waves-light btn">+</button>
        </div>
    )
}

function Player(props){
    return(
        <div className="player">
            <div className="player-name">{props.name}</div>
            <Counter />
        </div>    
    )
}

function Application(props){
    return (
        <div className="container">
            <div className="row">
                <div className="col s6 s3-offset board">
                    <Header title={props.title} />
                    <div className="players">
                        <Player name="Micahel" />
                        <Player name="Jim" />
                    </div>
                </div>
            </div>
        </div>
    )
}

ReactDOM.render(
    <Application title="Ping Pong Tournament" />,
    document.getElementById('root')
);