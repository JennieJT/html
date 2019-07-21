require.config(
    {
        baseUrl: '',
        paths: {
           // 基础模块配置
           cls1:'../common/cls1',
           WJTDlg:'../common/wjtdlg'
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