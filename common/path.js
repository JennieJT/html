window.contextRoot=function(){}
require.config(
    {
        baseUrl: '/',
        paths: {
           // basic modal 
           WJTDlg:'common/dialog/wjtdlg'
         },
        waitSeconds: 0,
        shim: {
          
        },
        map: {
          '*': {
            'css': 'requirejs/plugin/require-css/css.min',
            'text': 'requirejs/plugin/text',
            'h5': 'requirejs/plugin/h5'
          }
        }
    }
)