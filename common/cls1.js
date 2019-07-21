//成员变量和成员函数
//constructor;
define(
    ['cls'], function(a) {
    'use strict';
    var firstcls=function(){
        this.clsobj=new a();
        //private  new  的所有对象都是新的clone这个函数
        console.info('2')
        var tmp=""
        this.privateMember="private"
        this.privateFunction=function(){}
    }
    ///new  的所有对象共用这个函数
    firstcls.prototype.f1=function()
    {
        
    }
    firstcls.prototype.f2=function(a,b,c){
        return true
    }
    ///所有对象共用这个变量
    firstcls.prototype.member='rorker'
    /// 类变量，通过类名引用
    firstcls.staticMember="static member",
    ///类函数 通过类名引用
    firstcls.staticfunction=function(){
    
    }
    return firstcls;
  
});
