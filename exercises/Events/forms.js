const wes = document.querySelector(".wes");

wes.addEventListener('click', function(event) {
    console.log('you clicked it');
    const shouldChangePage = confirm(
        'This website might be malicious!, do you wish to proceed?'
        );
        if (!shouldChangePage) {
            event.preventDefault();
        }
});

const signupForm = document.querySelector('[name="signup"]');

signupForm.addEventListener('submit', function(event) {
    // console.dir(event.currentTarget.name.value);
    // console.dir(event.currentTarget.email.value);
    // console.dir(event.currentTarget.agree.checked);
    const name = event.currentTarget.name.value;
    if(name.includes('chad'))
        alert('Sorrry bro');
        event.preventDefault();
});

function logEvent(event) {
    console.log(event.type);
    console.log(event.currentTarget.value);
}

// 'keyup'
signupForm.name.addEventListener('keyup', logEvent);
// 'keydown'
signupForm.name.addEventListener('keydown', logEvent);
// 'focus'
signupForm.name.addEventListener('focus', logEvent);
// 'blur'
signupForm.name.addEventListener('blur', logEvent);


const photo = document.querySelector('.photo');

function handlePhotoClick(event) {
    if(event.type === 'click' || event.key === 'enter') {
        console.log('you clicked the photo');
    }
}

photo.addEventListener('click', handlePhotoClick);
photo.addEventListener('keyup', handlePhotoClick);

