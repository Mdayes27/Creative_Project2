document.getElementById("definitionSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("definitionInput").value;
  if (value === "")
    return;
  console.log(value);
  const url = "https://www.dictionaryapi.com/api/v3/references/collegiate/json/" + value + "?key=5ff7d06b-fd77-4c58-8d2b-260cc5ac1a7d";
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      console.log(json);
  let results = "";
      results +='<h2>' + value + " " +  " (" + json[0].fl + "):</h2>";
      results +='<ol>'
      for(let i = 0; i < json[0].shortdef.length; i++) {
        results += '<li>' + json[0].shortdef[i] + "</li>";
      }
      results +='</ol>'
      document.getElementById("definitionResults").innerHTML = results;
    });
});
