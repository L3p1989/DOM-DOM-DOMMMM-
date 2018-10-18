var btn = document.createElement('button');
var btnText = document.createTextNode('Add Square');

btn.appendChild(btnText);
document.body.appendChild(btn);

var squareContainer = document.createElement('div')

document.body.appendChild(squareContainer);

btn.addEventListener('click', function() {
    var squareDiv = document.createElement('div');

    squareContainer.appendChild(squareDiv);

    
});