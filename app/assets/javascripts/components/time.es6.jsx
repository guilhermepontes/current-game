class Time extends React.Component {
  constructor() {
    super();
    this.state  = { currentTime: new Date() };
  }

  componentDidMount(){
    this.timer = setInterval(this.update.bind(this), 1000);
  }

  componentWillUnmount(){
    clearInterval(this.timer.bind(this));
  }

  update(){
    this.setState({ currentTime: new Date() });
  }

  render() {
    let time = new Date(this.state.currentTime - new Date(this.props.gameStartTime));
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    seconds = (seconds < 10) ?  '0' + seconds : seconds;

    return <div className="time">
      <span className="item"><strong>In game time:</strong> { minutes }:{ seconds }</span>
    </div>;
  }
}
