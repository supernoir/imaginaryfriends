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
          for (let i = 1; i <= data.length; i++) {
              let characters = document.getElementById("characters").innerHTML = data[i];
                    console.log(data[i]);
            }  
        console.log(data[1]);
      });  
    }  
  )  
  .catch(function(err) {  
    console.log('Fetch Error :-S', err);  
  });




  console.log(greet);