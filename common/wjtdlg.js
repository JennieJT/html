define(
    [], function() {

    var WjtDlg= function(){
        
    }
    var onClsDlg=function(e)
    {
        const dialogBox = document.querySelector("#"+id);
        dialogBox.style.display = "none";
    }
    WjtDlg.prototype.modal=function(id)
    {
        if(id)
        {
          var btnCls=  document.querySelector('#'+id +' .botton-word') 
          btnCls.addEventListener('click',onClsDlg,false)
          const dialogBox = document.querySelector("#"+id);
          dialogBox.style.display = "block";
        }
    }
    WjtDlg.prototype.close=function()
    {
        onClsDlg()
    }
    return  WjtDlg
});