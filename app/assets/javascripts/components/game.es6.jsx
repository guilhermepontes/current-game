class Game extends React.Component {
  componentDidMount(){
    console.log(this)
  }

  render() {
    let props = this.props;

    return <div>
        <Info gameId={ props.gameId } gameMode={ props.gameMode } />
        <Time gameStartTime={ props.gameStartTime } />

        <Team color="blue" participants={ props.participants } />
        <Team color="red"  participants={ props.participants } />
    </div>;
  }
}
