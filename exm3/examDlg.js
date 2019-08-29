
require(['WJTDlg'],function(Dlg){
    var dlg;
    function popDialog() {
       dlg=Dlg({id:'wjt_dlg'})
       dlg.modal('wjt_dlg')
    }
    var onload=function()
    {
        document.getElementById('openbutton').addEventListener("click", popDialog, false);
    }
    onload(); 
 })