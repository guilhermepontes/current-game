class Info extends React.Component {
  render(){
    let props = this.props;

    return (
      <div className="info">
        <p className="item"><strong>ID:</strong> { props.gameId}</p>
        <p className="item"><strong>Mode:</strong> { props.gameMode}</p>
      </div>
    );
  }
};
