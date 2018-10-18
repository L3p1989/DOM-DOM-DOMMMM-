var btn = document.createElement('button');
var btnText = document.createTextNode('Add Square');

btn.appendChild(btnText);
document.body.appendChild(btn);

btn.addEventListener('click', function() {
    var squareDiv = document.createElement('div');

    document.body.appendChild(squareDiv)
});