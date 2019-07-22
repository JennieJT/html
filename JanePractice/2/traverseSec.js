var root={
    tagName:"",
    classes:[],
    style:"",
    id:"id",
    title:"",
    text:"",
    children:[]
  }
  //assume I've defined a class...
  
//recursion
//            <html>
//       <head>        <body>
//   <meta> <style>   <a> <div> <div>...
//
//arraylist...

var outcome=[];
var  eHtml=document.getElementsByTagName('html');
/**
 * 
 * @param {} theElement 
 * @param {} treeItem 
 */
var traverse=function(theElement,treeItem){
//对所有子元素做recursion
treeItem.id=theElement.id;
treeItem.title=theElement.attributes["title"]
treeItem.style=theElement.attributes["style"]
var tmp=theElement.classList
for(var i=0;i<tmp.length;i++){
  treeItem.classes.push(tmp[i])
}
treeItem.tagName=theElement.tagName
treeItem.text=theElement.textContent
//base case
var children=theElement.children
if(children.length==0){
  return;
}

for(var i=0;i<children.length;i++){
  var randomName={classes:[],children:[]}
  traverse(children[i],randomName)
  treeItem.children.push(randomName)
}

}

traverse(eHtml[0],root);
