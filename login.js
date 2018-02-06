window.onload = function () {
    var linkLogin = document.querySelector('#linkLogin');

    linkLogin.onclick = function () {
        var request = new XMLHttpRequest();
        request.open('GET', 'templates/login.html', true);

        request.onload = function () {
            if (this.status >= 200 && this.status < 400) {
                var resp = this.response;
                document.querySelector('body').innerHTML = resp
            } else {

            }
        };

        request.onerror = function () {
            // There was a connection error of some sort
        };

        request.send();
        return false
    };
};