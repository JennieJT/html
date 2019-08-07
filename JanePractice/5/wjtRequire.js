(function(global){
    var allModel={}
    var define=function(name,dependence,callback){
        allModel[name]={
            name:name,
            dependence:dependence,
            callback:callback,
            path:'',
            return:null
        }
    }
    var getResult=function(modelName){
        var result=allModel[modelName]
        if(result.return!=null){
            return result.return;
        }else{
            var args=[]
            for(i=0;i<result.dependence.length;i++){
                var tmp=getResult(result.dependence[i])
                args.push(tmp)
            }

            var cur=result.callback.apply(result,args)
            
            result.return=cur;
            return cur
        }       
    }
    /**
     * 
     * @param {Array<string>} models 
     * @param {Function} callback 
     */
    var require=function(models,callback){
        var args=[]
        for(i=0;i<models.length;i++){
            var result=getResult(models[i])
            args.push(result)
        }
        callback.apply({},args)
    }
    global.define=define;
    global.require=require;
}(window))
