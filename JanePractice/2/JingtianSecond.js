(function learnPageElement(){
    document.write("<ul>")
    document.write("<li>window.history.state: "+window.history.state+"</li>")
    document.write("<li>document.location.hash: "+document.location.hash+"</li>")
    document.write("<li>document.location.host: "+document.location.host+"</li>")
    document.write("<li>document.location.hostname: "+document.location.hostname+"</li>")
    document.write("<li>document.location.href: "+document.location.href+"</li>")
    document.write("<li>document.location.port: "+document.location.port+"</li>")
    document.write("<li>document.location.protocol: "+document.location.protocol+"</li>")
    document.write("</ul>")
}())

function goTop(){
    if(document.location.hash==""){
    var curURL=document.location.href;
    document.location.href=curURL+"#top"
    }
}
function windowCallBack(event){
    if(event!=null){
    var newh1=document.createElement("h3")
    var newContent=document.createTextNode("The callback event is: "+ event.type)
    newh1.appendChild(newContent);
    var currentDiv=document.getElementById("problem4")
    currentDiv.insertAdjacentElement("beforeend",newh1)
    }
}
window.addEventListener("load",windowCallBack,false);
window.addEventListener("hashchange",windowCallBack,false);
window.addEventListener("beforeunload",windowCallBack,false);
window.addEventListener("readystatechange",windowCallBack,false);
