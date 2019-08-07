require(["book","bookrack",'bookstore',"text!JanePractice/5/wjtRequire.1.html"],function(book,bookrack,bookstore,randomname){
    var bookstore1=bookstore("Tsinghua")
    var bookstore2=new bookstore("Peking")
    console.info('require')  
    var a={dad:'dad',name:'yong',hobby:'runner'}
    var b={mom:'mom',name:'jing', hobby:c}
    var c=function(who){
        console.info(this)
        console.info(who)
    }
    c.call(a,'a')
    c.call(b,'bfjklkjgldkfg')
    c(a)
    b.hobby()
})

var s='hell0o';
console.info(s)