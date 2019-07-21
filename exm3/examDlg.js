


require(['WJTDlg'],function(Dlg){
    var dlg;
    function popDialog() {
       dlg=new Dlg()
       dlg.modal('wjt_dlg')
    }
    var onload=function()
    {
        document.getElementById('openbutton').addEventListener("click", popDialog, false);
    }
    onload();
    // if (document.all) {
    //     window.attachEvent("onload", onload)//对于IE
    //   }
    //   else {
    //       if(document.readyState=='')
    //     window.addEventListener("load", onload, false);//对于FireFox
    //   }
  
 })