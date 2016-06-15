'use strict'
const greet = "App running with ES2015";

class CharacterCard extends React.Component {
  constructor() {
    super();
  }
  
  render() {
    return (
<div className="ui card">
  <div className="image">
    <img src="http://semantic-ui.com/images/avatar2/large/kristy.png" />
  </div>
  <div className="content">
    <a className="header">Kristy</a>
    <div className="meta">
      <span className="date">Joined in 2013</span>
    </div>
    <div className="description">
      Kristy is an art director living in New York.
    </div>
  </div>
  <div className="extra content">
    <a>
      <i classNam="user icon"></i>
      22 Friends
    </a>
  </div>
</div>
    );
  }
}

ReactDOM.render(
  <CharacterCard />,
  document.getElementById('component_characters')
);


fetch('http://localhost:7878/characters')  
  .then(  
    function(response) {  
      if (response.status !== 200) {  
        console.log('Looks like there was a problem. Status Code: ' +  
          response.status);  
        return;  
      }

      // Examine the text in the response  
      response.json().then(function(data) {
          for (let i = 0; i <= data.length; i++) {


            let node = document.createElement("li");
            let textnode = document.createTextNode(data[i].first_name + " " + data[i].last_name);
            node.appendChild(textnode);
            document.getElementById("character_name").appendChild(node);
            console.log(data[i]);
            }  
      });  
    }  
  )  
  .catch(function(err) {  
    console.log('Fetch Error :-S', err);  
  });




  console.log(greet);