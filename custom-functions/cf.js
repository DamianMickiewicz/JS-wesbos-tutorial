// this is the function definition
function calculateBill(billAmount, taxRate) {
        // this is the function body
        // eslint-disable-next-line no-console
        console.log('Running calculate bill!!');
        // eslint-disable-next-line no-console
        console.log(billAmount, taxRate);
        const total = billAmount * (1 + taxRate);
        return total;
}
// function call or run
// calculateBill();

const wesTolal = 500;
const wesTaxRate = 0.23;
const myTotal = calculateBill(wesTolal, wesTaxRate);

function sayHiTo(firstName) {
        return `Hello ${firstName}`;
}

// const greating = sayHiTo();
// console.log(greating);

function doctorize(name) {
        return `Dr. ${name}`;
}

function yell(name = `JE Putin Chuj`) {
        return `HEY ${name.toUpperCase()}`;
}
