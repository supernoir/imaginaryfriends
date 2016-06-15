'use strict'

let CharacterList = React.createClass({
  getInitialState: function() {
    return {
      first_name: '',
      last_name: '',
      age: '',
      origin: '',
      gender: ''    
    };
  },

  componentDidMount: function() {
    this.serverRequest = $.get(this.props.source, function (result) {
      let characterData = result[12];
      this.setState({
        first_name: characterData.first_name,
        last_name: characterData.last_name,
        age: characterData.age,
        origin: characterData.origin,
        gender: characterData.gender
      });
    }.bind(this));
  },

  componentWillUnmount: function() {
    this.serverRequest.abort();
  },

  render: function() {
    return (
      <div className="ui card">
        <div className="content">
          <a className="header">{this.state.first_name} {this.state.last_name} <i className={"" + this.state.gender + " icon"}></i></a>
    <div className="meta">
      <span className="date"><strong>Birthday</strong> {this.state.age}<br /><strong>Place of Origin</strong> {this.state.origin}</span>
    </div>
    <div className="description">
      Part of the <a href="#">Nomad</a> Book
    </div>
  </div>
  <div className="extra content">
    <a>
      <i classNam="user icon"></i>
      22 Relations
    </a>
  </div>
</div>
    );
  }
});

ReactDOM.render(
  <CharacterList source="http://localhost:7878/characters" />,
  document.getElementById('component_characters')
);
