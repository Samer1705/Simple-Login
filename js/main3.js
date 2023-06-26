document.getElementById('logOut').addEventListener('click', function(){
    window.location.replace('index.html');
})

document.getElementById('userName').innerHTML = sessionStorage.getItem('username');