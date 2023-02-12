// Make a div
const myDiv = document.createElement('div');

// add a class of wrapper to it
myDiv.classList.add('wrapper');
console.log(myDiv);

// put it into the body
document.body.appendChild(myDiv);

// make an unordered list
const list = document.createElement('ul');
const li = document.createElement('li');
list.appendChild(li);
li.textContent = 'one';

myDiv.appendChild(list);


// add three list items with the words "one, two, three" in them
const li2 = document.createElement('li');
li2.textContent = 'two';
list.append(li2);

const li3 = document.createElement('li');
li3.textContent = 'three';
list.append(li3);

// put that list into the above wrapper

myDiv.insertAdjacentElement('afterbegin', list);

// create an image
let img = document.createElement('img');
console.log(img);

// set the source to an image
function imgSize(sizeOfImage = '300x300', img) {
    img.src = `https://source.unsplash.com/random/${sizeOfImage}`;
    img.alt = 'Nice photo';
    return img
}

document.body.appendChild(img);
img = imgSize('300x300', img);

// set the width to 250
img = imgSize('250x250', img);

// add a class of cute
img.classList.add('cute');

// add an alt of Cute Puppy
img.alt = 'Cute Puppy';
console.log(img);

// Append that image to the wrapper
myDiv.appendChild(img);

// with HTML string, make a div, with two paragraphs inside of it
const myHTML = `
    <div class="myHtmlDiv">
        <p>Paragraph 1</p>
        <p>Paragraph 2</p>
    </div>
`;
//console.log(list);
const ulElement = document.querySelector('ul');
//console.log(ulElement);

//const myHtmlFragment = document.createRange().createContextualFragment(myHTML);
// document.body.appendChild(myHtmlFragment);

// put this div before the unordered list from above
//list.appendChild(myHtmlFragment);
//myDiv.appendChild(myHtmlFragment)
ulElement.insertAdjacentHTML('afterbegin', myHTML);
console.log(myHTML);

// add a class to the second paragraph called warning
const myHtmlDiv = myDiv.querySelector('.myHtmlDiv');
console.log(myHtmlDiv.children[1]);
myHtmlDiv.children[1].classList.add('warning');

// remove the first paragraph
myHtmlDiv.firstElementChild.remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>
function generatePlayerCard(name, age, height, myHTML) {
    myHTML = 
    `<div class="playerCard">
        <h2>${name} — ${age} <button class="delete" type="button">&times; Remove Player</button></h2>
        <p>They are ${height} and ${age} years old. In Dog years this person would be ${age * 7}. That would be a tall dog!</p>
    </div>`;
    return myHTML;
}

console.log(generatePlayerCard);

// make a new div with a class of cards
const cardsDiv = document.createElement('div');
cardsDiv.classList.add('cards');
document.body.appendChild(cardsDiv);

// make 4 player cards using generatePlayerCard
const playerOne = generatePlayerCard(`Damian`, `29`, `178`, myHTML);
const playerTwo = generatePlayerCard(`Gosia`, `28`, `170`, myHTML);
const playerThree = generatePlayerCard(`Mateusz`, `27`, `190`, myHTML);
const playerFour = generatePlayerCard(`Ola`, `26`, `180`, myHTML);
console.log(playerFour);
// append those cards to the div
cardsDiv.insertAdjacentHTML('beforeend', playerOne);
cardsDiv.insertAdjacentHTML('beforeend', playerTwo);
cardsDiv.insertAdjacentHTML('beforeend', playerThree);
cardsDiv.insertAdjacentHTML('beforeend', playerFour);
// put the div into the DOM just before the wrapper element
// const cardsBeforeWrapper = document.querySelector('.wrapper');
myDiv.insertAdjacentElement('afterbegin', cardsDiv);

// Bonus, put a delete Button on each card so when you click it, the whole card is removed


// function deletePlayersButton(player) {
//     const btn = document.createElement('button');
//     btn.innerHTML = 'Remove Player';
//     player.insertAdjacentElement('afterbegin', btn);
// }

// function addRemoveButton(where, btn) {
//     btn = document.createElement('button');
//     btn.innerHTML = 'Remove';
//     const markAPlace = document.getElementsByClassName(where);
//     console.log(markAPlace);
//     for (const element of markAPlace) {
//         element.appendChild(btn);
//     }
//     // markAPlace.appendChild(btn);
// }

const markAButton = document.getElementsByTagName('button');

// addRemoveButton('playerOne');
// const markAPlayer = document.addEventListener('click', )
console.log(markAButton);

//cardsDiv.addEventListener('click', removeCard(player = markAButton));
// for (const playerCard of markAButton) {
//     playerCard.addEventListener('click', function remove(event) {
//         const value = event.target.remove();
//         console.log(value)
//     })
//     }

// select all the buttons!
const buttons = document.querySelectorAll('.delete');
console.log(buttons);

// make out delete function
function deleteCard(event) {
    const buttonThatGotClicked = event.currentTarget;
    // buttonThatGotClicked.parentElement.remove();
    buttonThatGotClicked.closest('.playerCard').remove();
}
// loop over them and attach a listener
buttons.forEach(button => button.addEventListener('click', deleteCard));
