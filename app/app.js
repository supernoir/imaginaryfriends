const greet = "App running with ES2015";



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