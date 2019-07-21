 var firstObj={
     //constructor:function(){},
    'a':{"aa":"aa"},
    "b":"bb",
    d:5,
    e:true,
    f:["",""],

}
var  arr=["a","b",'c',"d"]
var  forc= function (params) {
   for(var i in params){
       var key=i
       var value=params[i]
   }
for(var j=0;j<arr.length;j++){}
}
//var tmp=new Object(firstObj)
///tmp.a='new a'
//forc(new firstObj)
forc(arr)


//报错
//var c1=require('cls1')
//异步加载，
require(['cls','../common/cls1.js'],function(a,b){
   var cls=new a();
   var cls1=new b();
   //同步加载,必须在异步加载的callback 函数内部
  var c= require('cls')
})
//有依赖关系
require(['cls'],function(a){
    var cls=new a;
    require(['cls1'],function(b){
        var cls1=new b;
    })
   
    //同步加载,必须在异步加载的callback 函数内部
   var c= require('cls')
 })