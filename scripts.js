var btnDiv = document.createElement('div');

document.body.appendChild(btnDiv);//this adds a div to house the button

btnDiv.className = 'btn-div'

var btn = document.createElement('button');
var btnText = document.createTextNode('Add Square');

btn.appendChild(btnText);//this adds btnText to btn
btnDiv.appendChild(btn);//this adds btn to btnDiv

var btnClick = 0;

var squareContainer = document.createElement('div');

document.body.appendChild(squareContainer);//this adds squareContainer to body

squareContainer.className = 'square-container'

btn.addEventListener('click', function () {
    var squareDiv = document.createElement('div');
    // var testText = document.createTextNode('test');

    btnClick++;

    squareContainer.appendChild(squareDiv);//this adds squareDiv to squareContainer
    // squareDiv.appendChild(testText)

    squareDiv.className = 'square';

    squareDiv.id = ('s' + btnClick);//this adds ids based on btnClick

    var divText = document.createTextNode('s' + btnClick);

    // squareDiv.appendChild(divText);//this adds divText to squareDivs

    squareContainer.addEventListener('mouseover', showDiv, false);

    function showDiv(e) {
        if (e.target !== e.currentTarget) {
            e.target.textContent = e.target.id
        }
    };

    squareContainer.addEventListener('mouseout', hideDiv, false);

    function hideDiv(e) {
        if (e.target !== e.currentTarget) {
            e.target.textContent = ''
        }
    };

    squareContainer.addEventListener('click', squareClick, false);

    function squareClick(e) {
        if (e.target !== e.currentTarget) {
            e.target.style.backroundColor = randomColor()
        };
    }

});
