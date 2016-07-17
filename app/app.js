'use strict'


var CharacterList = React.createClass({
  
  componentDidMount: function() {
    this.serverRequest = $.get(this.props.source, function(result) {
         var characterData = result;
        });
      
      this.setState({
        first_name: characterData.first_name,
        last_name: characterData.last_name,
        age: characterData.age,
        origin: characterData.origin,
        gender: characterData.gender
      });
    }.bind(this);
  },

  componentWillUnmount: function() {
    this.serverRequest.abort();
  },

  render: function() {
    return (
      <div className="card">{
      characterData.map(function (character){
        <div className="card_content">
          <a className="header">Name: {this.state.first_name} {this.state.last_name} <i className={"" + this.state.gender + " icon"}></i></a>
        <div className="meta">
          <span className="date"><strong>Birthday</strong> {this.state.age}<br /><strong>Place of Origin</strong> {this.state.origin}</span>
        </div> 
      </div>
      });
      }


</div>
    );
  }
});

ReactDOM.render(
  <CharacterList source="http://localhost:7878/characters" />,
  document.getElementById('module_characters')
);
