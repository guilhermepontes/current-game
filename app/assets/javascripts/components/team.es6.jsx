class Team extends React.Component {
 constructor(){
    super();

    this.teamMap = {
      blue: 100,
      red: 200
    };

    this.endpoint  = 'http://ddragon.leagueoflegends.com/cdn/5.18.1/data/en_US/champion.json';
    this.imgPrefix = 'http://ddragon.leagueoflegends.com/cdn/5.18.1/img/champion/';
    this.state     = { champions: '' };
  }

  componentDidMount(){
    $.get(this.endpoint, function(data) {
      this.setState({
        champions: data
      });
    }.bind(this));
  }

  render(){
    let props   = this.props;
    let teamMap = this.teamMap;
    let classes = React.addons.classSet('game', props.color);
    let prefix  = this.imgPrefix;
    let champs  = this.champions;

    return (
      <div className={ classes }>
        <ul>
          {
            props.participants.filter(function(player){
              return player.teamId === teamMap[props.color];
            }).map(function(player){
              return <li>
                { player.summonerName }
              </li>
            })
          }
        </ul>
      </div>
    );
  }
}
