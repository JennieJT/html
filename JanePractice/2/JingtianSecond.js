(function () {
    document.write("<ul>")
    document.write("<li>window.history.state: " + window.history.state + "</li>")
    document.write("<li>document.location.hash: " + document.location.hash + "</li>")
    document.write("<li>document.location.host: " + document.location.host + "</li>")
    document.write("<li>document.location.hostname: " + document.location.hostname + "</li>")
    document.write("<li>document.location.href: " + document.location.href + "</li>")
    document.write("<li>document.location.port: " + document.location.port + "</li>")
    document.write("<li>document.location.protocol: " + document.location.protocol + "</li>")
    document.write("</ul>")
    function goTop() {
        if (document.location.hash == "") {
            var curURL = document.location.href;
            document.location.href = curURL + "#top"
        }
    }
    function windowCallBack(event) {
        if (event != null) {
            var newh1 = document.createElement("h3")

            var newContent = document.createTextNode("The callback event is: " + event.type)
            newh1.appendChild(newContent);
            var currentDiv = document.getElementById("problem4")
            currentDiv.insertAdjacentElement("beforeend", newh1)
        }
    }


    window.addEventListener("load", windowCallBack, false);
    window.addEventListener("hashchange", windowCallBack, false);
    window.addEventListener("beforeunload", windowCallBack, false);
    window.addEventListener("readystatechange", windowCallBack, false);

    var call = function (who, boo) {
        var newDiv = document.createElement("div")
        var newText = document.createTextNode("click in " + who + " is " + boo)
        newDiv.appendChild(newText)
        document.getElementById("forPosi").appendChild(newDiv)
    }
    var sss = {}
    sss.a = "aa"
    sss['a'] = "aa"
    sss = {
        a: "aa"
    }
    var divs = {

        grandpa: {
            name: "grandpa",
            callbackF: function (e) {

                call("grandpa", "false")

            },
            callbackT: function (e) {

                call("grandpa", "true")
                return false
            }
        },
        papa: {
            name: "papa",
            callbackF: function (e) {
                event.stopPropagation()
                event.preventDefault()
                call("papa", "false")
            },
            callbackT: function (e) {
                call("papa", "true")
            }
        },
        girl: {
            name: "girl",
            callbackF: function (e) {
                call("girl", "false")
            },
            callbackT: function (e) {
                call("girl", "true")
            }
        }


    }

    for (var key in divs) {
        var curId = document.getElementById(key)
        curId.addEventListener("click", divs[key].callbackT, true)
        curId.addEventListener("click", divs[key].callbackF, false)
    }

}())
