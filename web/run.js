console.log("以Ajax方式，请求后端接口");
(function () {
    var httpRequest;
    document.getElementById("ajaxButton").addEventListener('click', makeRequest);

    function makeRequest() {
        httpRequest = new XMLHttpRequest();

        if (!httpRequest) {
            alert('Giving up :( Cannot create an XMLHTTP instance');
            return false;
        }
        httpRequest.onreadystatechange = alertContents;
        httpRequest.open('GET', '/ajax/get');
        httpRequest.send();
    }

    function alertContents() {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
                // alert(httpRequest.responseText);
                document.getElementById("ajaxButton").innerText = "服务器，处理完成时间  " + httpRequest.responseText;
            } else {
                alert('There was a problem with the request.');
            }
        }
    }
})();




(function () {
    var httpRequest;
    document.getElementById("ajaxButtonPost").addEventListener('click', makeRequest);

    function makeRequest() {
        httpRequest = new XMLHttpRequest();

        if (!httpRequest) {
            alert('Giving up :( Cannot create an XMLHTTP instance');
            return false;
        }
        httpRequest.onreadystatechange = alertContents;
        httpRequest.open('POST', '/ajax/post');
        //   httpRequest.open('POST', url);
        httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        httpRequest.send('userName=' + encodeURIComponent("刘洋"));
    }

    function alertContents() {
        if (httpRequest.readyState === XMLHttpRequest.DONE) {
            if (httpRequest.status === 200) {
                // alert(httpRequest.responseText);
                // {"userData":"Jane","computedString":"Hi, Jane!"}
                var response = JSON.parse(httpRequest.responseText);
                document.getElementById("ajaxPostResponseData").innerHTML += `<li>${response.computedString}</li>`;
            } else {
                alert('There was a problem with the request.');
            }
        }
    }
})();
