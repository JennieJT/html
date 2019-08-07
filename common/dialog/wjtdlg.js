define([], function () {
    // global variable
    const defArgs = {
        id: "",
        topLeft: { top: 5, left: 5 },
        size: { height: 100, width: 100 },
        smlSize: "middle",
        title: "dialog",
        content: "",
        contentUrl: "",
        dialUrl: "common/dialog/dialog.html",
        cssUrl:"common/dialog/dialog.css"
    }
    var small={height:400,width:400}
    var middle={height:500,width:500}
    var large={height:600,width:600}
    
    var factory = function (args) {
        var config = Object.assign({}, defArgs, args)
        var WjtDlg = function () {

        }
        var onClsDlg = function (e) {
            const dialogBox = document.querySelector("#" + config.id);
            dialogBox.style.display = "none";
        }
        WjtDlg.prototype.modal = function () {
            require(["text!" + config.dialUrl,"css!"+config.cssUrl], function (dialogText) {

                dialogText=dialogText.replace("{{id}}",config.id)
                dialogText=dialogText.replace("{{title}}",config.title)
                var width=small.width
                var height=small.height
                if(config.smlSize=="middle"){
                    width=middle.width;
                    height=middle.height;
                }else if(config.smlSize=="large"){
                    width=large.width;
                    height=large.height;
                }
                dialogText=dialogText.replace("{{width}}",width)
                dialogText=dialogText.replace("{{height}}",height)
                
               var div=document.createElement('div')
                div.innerHTML=dialogText
                div=div.children[0]
                document.body.appendChild(div)
                if (config.id) {
                    var btnCls = document.querySelector('#' + config.id + ' .botton-word')
                    btnCls.addEventListener('click', onClsDlg, false)
                    const dialogBox = document.querySelector("#" + config.id);
                    dialogBox.style.display = "block";
                }
            })
        }
        WjtDlg.prototype.close = function () {
            onClsDlg()
        }
        return new WjtDlg()
    }
    return factory
});