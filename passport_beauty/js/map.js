Element.prototype.Map = function() {
  var map = this;

  this.init = function() {

    console.log(d3.select("path")); //this gives me the full svg DOM
    var svg = d3.select("#map svg");
    var countries = svg.selectAll("path");
    console.log(countries);

//Loading the JSON

this.connect = function () {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "./models/countries.json", true);
  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.onreadystatechange = function () {
    if (xhr.readystate == 4) {
      var response = JSON.parse(xhr.responseText);
      displayName = response.displayName;
    }
  }
  xhr.send();
};




// CREATING THE POP UP BOX

    for(var i=0; i<countries.length; i++)(function(i){
      for(var j=0; j<countries[i].length; j++)(function(j){
        var country = countries[i][j];
        country.addEventListener('click', function(){
          // alert('hello from '+ country.id);

          var modal = document.getElementById('modal');
          modal.style.visibility = "visible";

          // var xhr = new XMLHttpRequest();
          // xhr.open("GET", "./models/countries.json", true);
          // xhr.setRequestHeader("Content-Type", "application/json");

          var p = document.createElement('p');
          p.innerHTML = "hello from " + country.id;
          modal.appendChild(p);

          var close = document.getElementById('close');
          close.addEventListener('click', function(){
            modal.style.visibility = "hidden";
            document.getElementById('p');
            p.innerHTML = '';
          });

          // var p = document.createElement('p'); // this is where the modal begins
          // p.innerHTML = "hello from "+ country.id;
          // var modal =  document.getElementById('modal');
          // modal.appendChild(p);
          // //modal.style.display = 'block';
          // var close = document.getElementById('close');
          // close.addEventListener('click', function(){
          //     modal.style.display = 'none';
          // });

        });
      })(j)
    })(i);


  //  console.log(myCountries);
  }


  this.init();

};
