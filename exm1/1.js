
   (function (){
    var s="hello"
    sss=''
    console.info(s)
       function popDialog() {
           const dialogBox = document.querySelector(".dialog-mask");
           dialogBox.style.display = "block";
           console.info(s)
           var aa="ss"
       }
       
      
       function closeDialog(e) {
           //event.stopPropagation()
           const dialogBox = document.querySelector(".dialog-mask");
           dialogBox.style.display = "none";
       }
      var onloadcallback= function()
       {
           console.info(s)
           var aa='bb'
           console.info(aa)
       //a()
       document.getElementById('openbutton').addEventListener("click", firstObj.c, false);
       document.getElementById('openbutton').addEventListener("click", popDialog, false);
       document.querySelector('#closebutton').addEventListener("click",closeDialog,false)
       }
       //a()
       if (document.all) {
        window.attachEvent("onload", onloadcallback)//对于IE
      }
      else {
        window.addEventListener("load", onloadcallback, false);//对于FireFox
      }
   }())
   //firstObj.c()
