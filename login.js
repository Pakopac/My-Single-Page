window.onload = function () {
    if (sessionStorage.length === 0) {
        sessionStorage.setItem('pseudo', '');
        sessionStorage.setItem('password', '');
    }
    if (sessionStorage.getItem('pseudo') === '' || sessionStorage.getItem('password') === ''){
        sessionStorage.setItem('pseudo','pako');
        sessionStorage.setItem('password','123')
    }

    var menu = document.querySelector('#menu');
    var login = document.querySelector('#login');
    var profile = document.querySelector('#profile');
    menu.style.display = 'none';

    var request = new XMLHttpRequest();
    request.open('GET', 'templates/login.html', true);

    request.onload = function () {
        if (this.status >= 200 && this.status < 400) {

            var resp = this.response;
            login.innerHTML = resp;

            document.forms['loginForm'].onsubmit = function () {
                var pseudo = document.querySelector('#pseudo').value;
                var password = document.querySelector('#password').value;

                if (pseudo === sessionStorage.getItem("pseudo") && password === sessionStorage.getItem("password")) {
                    document.querySelector("#userPseudo").innerHTML = pseudo;
                    menu.style.display = 'block';
                    login.style.display = 'none';
                }
                return false
            }
        }
    };

    request.send();

    var home = document.querySelector('#home');
    home.onclick = function () {
        login.style.display = 'none';
        profile.style.display = 'none';
    };

    document.querySelector("#userPseudo").onclick = function () {
    var requestProfile = new XMLHttpRequest();
    requestProfile.open('GET', 'templates/profile.html', true);

    requestProfile.onload = function () {
        if (this.status >= 200 && this.status < 400) {
            var respProfile = this.response;
            profile.innerHTML = respProfile;

            var userPseudoProfile = document.querySelector('#userPseudoProfile');
            userPseudoProfile.value = sessionStorage.getItem("pseudo");
            profile.style.display = 'block';

            var formProfile = document.querySelector('#formProfile');
            formProfile.onsubmit = function () {
                sessionStorage.setItem('pseudo', userPseudoProfile.value);
                profile.style.display = 'none';
                document.querySelector("#userPseudo").innerHTML = userPseudoProfile.value;
                return false
            }

        }
    };
        requestProfile.send();
    };
};