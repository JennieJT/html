var treeItem={
    tagName:"",
    classes:["",""],
    style:"",
    id:"id",
    title:"",
    text:"",
    children:[{treeItem}]
  }
  //assume I've defined a class...
  
//recursion
//            <html>
//       <head>        <body>
//   <meta> <style>   <a> <div> <div>...
//
//arraylist...
var outcome=[];
var traverse=function(root){
if(root===null){
    return;
}
outcome.push(root);
//对所有子元素做recursion

}
