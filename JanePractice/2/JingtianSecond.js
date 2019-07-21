(function learnPageElement(){
    document.getElementById("li1").innerHTML="window.history.state: "+window.history.state
    document.getElementById("li2").innerHTML="document.location.hash: "+document.location.hash
    document.getElementById("li3").innerHTML="document.location.host: "+document.location.host
    document.getElementById("li4").innerHTML="document.location.hostname: "+document.location.hostname
    document.getElementById("li5").innerHTML="document.location.href: "+document.location.href
    document.getElementById("li6").innerHTML="document.location.port: "+document.location.port
    document.getElementById("li7").innerHTML="document.location.protocol: "+document.location.protocol
    document.write("<div>document.location.pathname: "+document.location.pathname+"</div>")
}())