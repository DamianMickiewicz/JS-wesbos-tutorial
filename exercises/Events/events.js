const butts = document.querySelector('.butts');
const coolButts = document.querySelector('.cool');

function handleClick() {
    console.log('it got clicked!');
}

const hooray = () => console.log('HOORAY!');

butts.addEventListener('click', hooray);
coolButts.addEventListener('click', handleClick);

// butts.removeEventListener('click', handleClick);

// Listen on multiple items
const buyButtons = document.querySelectorAll('button.buy');

function handleBuyButtonClick(event) {
    console.log('You clicked a button');
    const button = event.target;
    // console.log(button.textContent);
    // console.log(parseFloat(event.target.dataset.price));
    console.log(event.currentTarget);
    console.log(event.target);
    console.log(event.target === event.currentTarget);
    // Stop this event from bubbling up
    // event.stopPropagation();
}

buyButtons.forEach(function(buyButton) {
    buyButton.addEventListener('click', handleBuyButtonClick);
});

window.addEventListener('click', function(event) {
    console.log('you clicked the window');
    console.log(event.target);
    console.log(event.type);
    console.log(event.bubbles);
    // event.stopPropagation();
}
, {capture: true}
);

const photoEl = document.querySelector('.photo');

photoEl.addEventListener('mouseenter', e => {
    console.log(e.currentTarget);
    console.log(this);
});

// LESSON 1: EVENT LISTENER
// function buyItem() {
//     console.log('BUYING ITEM!');
// }

// // console.log(buyButtons);
// // buyButtons.addEventListener('click', buyItem);

// function handleBuyButtonClick(buyButton) {
//     console.log('Binding the buy button');
//     buyButton.addEventListener('click', buyItem);
// }

// // buyButtons.forEach(handleBuyButtonClick);

// buyButtons.forEach((button)=> {
//     button.addEventListener('click', () => {
//         console.log('YOU CLICKED IT');
//     });
// })
