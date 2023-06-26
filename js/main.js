
var user;
var regName = document.getElementById('regName');
var regMail = document.getElementById('regMail');
var regPass = document.getElementById('regPass');
var userContainer;
if (localStorage.getItem('usersAssi10') != null) {
    userContainer = JSON.parse(localStorage.getItem('usersAssi10'));
}
else {
    userContainer = [];
}
console.log(userContainer);

document.querySelector('#signUp').addEventListener('click', function () {
    document.getElementById('emailExist').classList.add('d-none');
    document.getElementById('required').classList.add('d-none');
    document.getElementById('success').classList.add('d-none');
    if (regName.value == '' || regMail.value == '' || regPass.value == '') {
        document.getElementById('required').classList.remove('d-none');
    }
    else {
        if (checkingEmail(regMail.value)) {
            user = {
                name: regName.value,
                email: regMail.value,
                password: regPass.value
            }
            userContainer.push(user);
            localStorage.setItem('usersAssi10', JSON.stringify(userContainer));
            console.log(userContainer);
            document.getElementById('success').classList.remove('d-none');
            clearReg();
        }
        else {
            document.getElementById('emailExist').classList.remove('d-none');
        }
    }
})
function checkingEmail(email) {
    var emailVal = true;
    for (var i = 0; i < userContainer.length; i++) {
        if (email == userContainer[i].email) {
            emailVal = false;
        }
    }
    return emailVal;
}

function clearReg(){
    regName.value = '';
    regMail.value = '';
    regPass.value = '';
}
