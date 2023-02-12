// function doctorize(firstName) {
//         return `Dr. ${firstName}`;
// }

// Anon Function
// function doctorize(firstName) {
//         return `Dr. ${firstName}`;
// }

// Function Expression
// const doctorize = function(firstName) {
//         return `Dr. ${firstName}`;
// }

// Anon Function
// function inchToCM(inches) {
//         const cm = inches * 2.54;
//         return cm;
// }

// Arrow Function
const inchToCM = (inches) => inches * 2.54;

// function add(a,b = 3) {
//         const total = a + b;
//         return total;
// }

// const add = (a, b = 3) => a + b; 

// returning an object

// function makeABaby(first, last) {
//     const baby = {
//         name: `${first} ${last}`,
//         age: 0
//     }
//     return baby;
// }

const makeABaby = (first, last) => ({ name: `${first} ${last}`, age: 0 });

// IIFE
// Immediately Invoked Function Expression

(function (age) {
        return `you are cool and age ${age}`;
})(10);

// Methods!!
const wes = {
        name: 'Damian Bos',
        // Method!!
        sayHi: function() {
                console.log(`Hey ${this.name}`);
                return 'Hey Wes';
        },
        // Short hand Method
        yellHi() {
            console.log('HEY WESSSS');
        },
        // Arrow function Method
        wisperHi: () => {
            console.log(`hi wess im a mouse`);
        }
};

// Callback Functions
// Click Callback
const button = document.querySelector(`.clickMe`);

function handleClick() {
    console.log(`Great Clicking!!`);
}

button.addEventListener(`click`, function() {
    console.log(`Nice Job!!`);
});

// Timer Callback
setTimeout(() => {
    console.log(`Time to eat`);
}, 1000);
