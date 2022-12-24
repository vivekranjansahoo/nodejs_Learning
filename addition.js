// function add(){
//     console.log("this is addditon module");
// }

function add(){
    return "this is addditon module";
}

var a=20;

module.exports.addition=add; 
//module.exports.addition1=add1;
module.exports.val=a;

module.exports={
    addition:function(){
        console.log("this is addditon module");
    }
    ,
    val:20
}