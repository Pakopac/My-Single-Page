var request = new XMLHttpRequest();
request.open('GET', 'templates/login.html', true);

request.onload = function() {
    if (this.status >= 200 && this.status < 400) {
        var resp = this.response;
    } else {

    }
};

request.onerror = function() {
    // There was a connection error of some sort
};

request.send();