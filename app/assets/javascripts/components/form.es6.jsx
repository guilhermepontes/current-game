class Form extends React.Component {
  render(){
    let props = this.props;

    return (
      <form action={ props.action } method="post">
        <input type="hidden" name={ props.csrf_param } value={ this.props.csrf_token } />
        <input type="text" name="nick" />
        <button type="submit">OK</button>
      </form>
    );
  }
}
