window.onload = function () {
    document.querySelector('#menu').style.display = 'none';

        var request = new XMLHttpRequest();
        request.open('GET', 'templates/login.html', true);

        request.onload = function () {
            if (this.status >= 200 && this.status < 400) {

                var resp = this.response;
                document.querySelector('#login').innerHTML = resp;

                document.forms['loginForm'].onsubmit = function () {
                    var pseudo = document.querySelector('#pseudo').value;
                    var password = document.querySelector('#password').value;
                    //sessionStorage.clear();
                    //sessionStorage.setItem('pseudo', pseudo);
                    //sessionStorage.setItem('password', password);

                    if (pseudo === sessionStorage.getItem("pseudo") && password === sessionStorage.getItem("password")){
                        console.log(document.querySelector('body').innerHTML);
                        var login = document.querySelector('#login');
                        login.replaceWith(document.querySelector('#menu').innerHTML);
                    }
                    return false
                }
            } else {

            }
        };

        request.onerror = function () {
            // There was a connection error of some sort
        };

        request.send();

};