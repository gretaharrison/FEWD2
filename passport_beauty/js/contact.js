
var x = document.getElementById('contactForm');
var createForm = document.createElement('form');
createForm.setAttribute("action, ");
createForm.setAttribute("method", "post");
x.appendChild(createForm);

var heading = document.createElement('h2');
heading.innerHTML = "Contact Form ";
createForm.appendChild(heading);

var line = document.createElement('hr');
createForm.appendChild(line);

var lineBreak = document.createElement('br');
createForm.appendChild(lineBreak);

var nameLabel = document.createElement('label');
nameLabel.innerHTML = "Your Name : ";
createForm.appendChild(nameLabel);

var inputElement = document.createElement('input');
inputElement.setAttribute("type", "text");
inputElement.setAttribute("name", "dname");
createForm.appendChild(input);




//http://www.formget.com/javascript-contact-form/
