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

function randomColor() {
    var colorArray = ['green', 'purple', 'orange', 'red', 'blue', 'yellow', 'aqua'];
    var randomizer = Math.floor((Math.random() * colorArray.length));
    return colorArray[randomizer];
};  //this function will allow you to change the color of anything randomly between all listed colors

btn.addEventListener('click', function () {
    var squareDiv = document.createElement('div');
    // var testText = document.createTextNode('test');

    btnClick++;

    squareContainer.appendChild(squareDiv);//this adds squareDiv to squareContainer
    // squareDiv.appendChild(testText)

    squareDiv.className = 'square';

    squareDiv.id = (btnClick);//this adds ids based on btnClick

    var divText = document.createTextNode('s' + btnClick);

    // squareDiv.appendChild(divText);//this adds divText to squareDivs

    squareContainer.addEventListener('mouseover', showDiv, false);//adds mouseover event for `.square`s

    function showDiv(e) {
        if (e.target !== e.currentTarget) {
            e.target.textContent = e.target.id
        }
    };//adds function to event to add text content num of whatever id div is

    squareContainer.addEventListener('mouseout', hideDiv, false);//adds mouseout event for `.square`s

    function hideDiv(e) {
        if (e.target !== e.currentTarget) {
            e.target.textContent = ''
        }
    };//adds function to event to remove text

    squareDiv.addEventListener('click', function(e) {
        e.target.style.backgroundColor = randomColor()
    });//adds 'click' event listener to squareDiv that changes the background-color to one of the colors in the randomColor function

    squareDiv.addEventListener('dblclick', function(e) {
        if (e.target.id % 2 == 0 && e.target !== squareContainer.lastChild) {
            squareContainer.removeChild(e.target.nextSibling);
        } else if (e.target.id % 2 == 1 && e.target !== squareContainer.firstChild) {
            squareContainer.removeChild(e.target.previousSibling);
        } else return alert("No square to remove!");
    }); //adds 'dblclick' event listener to `.square`s

});
