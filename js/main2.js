
var logEmail = document.getElementById('logEmail');
var logPass = document.getElementById('logPass');
var userContainer;
if (localStorage.getItem('usersAssi10') != null) {
    userContainer = JSON.parse(localStorage.getItem('usersAssi10'));
}
else {
    userContainer = [];
}
console.log(userContainer);

document.getElementById('logIn').addEventListener('click', function () {
    document.getElementById('logRequired').classList.add('d-none');
    document.getElementById('invalidUser').classList.add('d-none');
    if (logEmail.value == '' || logPass.value == '') {
        document.getElementById('logRequired').classList.remove('d-none');
    }
    else {
        user = {
            email: logEmail.value,
            password: logPass.value
        }
        if (checkingUser(user)) {
            window.location.href="home.html";
            sessionStorage.setItem("username", username);
        }
        else{
            document.getElementById('invalidUser').classList.remove('d-none');
        }
    }
    clearLog();
})
var username;
function checkingUser(u) {
    var validation = false;
    for (var i = 0; i < userContainer.length; i++) {
        if (u.email == userContainer[i].email && u.password == userContainer[i].password) {
            validation = true;
            username = userContainer[i].name;
        }
    }
    return validation;
}

function clearLog(){
    logEmail.value = '';
    logPass.value = '';
}