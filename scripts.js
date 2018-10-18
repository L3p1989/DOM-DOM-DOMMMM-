var btnDiv = document.createElement('div');

document.body.appendChild(btnDiv);//this adds a div to house the button

var btn = document.createElement('button');
var btnText = document.createTextNode('Add Square');

btn.appendChild(btnText);//this adds btnText to btn
btnDiv.appendChild(btn);//this adds btn to btnDiv

var btnClick = 0;

var squareContainer = document.createElement('div')

document.body.appendChild(squareContainer);

btn.addEventListener('click', function() {
    var squareDiv = document.createElement('div');
    var testText = document.createTextNode('test')

    btnClick++;

    squareContainer.appendChild(squareDiv);
    // squareDiv.appendChild(testText)

    squareDiv.className = 'square'

    squareDiv.id = ('s' + btnClick)

    var divText = document.createTextNode('s' + btnClick)

    squareDiv.appendChild(divText)

});