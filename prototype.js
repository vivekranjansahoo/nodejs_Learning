// Day-6

// ---------------------------------------------


var student =function(){
    this.name="Vivek";
    this.age=19;
    this.email="Vivekranjansahoo@gmail.com";
}

student.prototype={
    address:"rourkela",
    getName:function(){
        return this.name;
    }
}

var stu =new student();
console.log(stu.address);