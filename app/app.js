'use strict'

var CharacterList = React.createClass({
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
    this.serverRequest = $.get(this.props.source, function(result) {
        var characterData = result.map(function(character){
          return character
        });
      
      this.setState({
        characters: characterData
      });
    }.bind(this));
  },

  componentWillUnmount: function() {
    this.serverRequest.abort();
  },

  render: function() {
    return (

      <div className="card">
        <img src="public/harrypotter.jpg" className="card_image" />
        <div className="card_header">
          <a className="card_name">{this.state.first_name} {this.state.last_name}</a>
          <p className="card_birthday"><strong>Birthday</strong> {this.state.age}</p>
          <p className="card_origin"><strong>Origin</strong> {this.state.origin}</p>
        </div>
      <div className="card_body">
      <p>A young wizard who will save the World. And London.</p>
    </div>
  </div>
    );
  }
});

ReactDOM.render(
  <CharacterList source="http://localhost:7878/characters" />,
  document.getElementById('module_characters')
);
