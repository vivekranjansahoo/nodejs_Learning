
// Day - 5
// -------------------------------


//ECMAscript or ES6 2015
// let,const, templating string, class

// var a=30;
// var a=40;

//let a=20 //error


// function abc(){
//     let a=40;
// console.log(a);
// }

// console.log(a);
// abc();

//----------------------------


// const a=40;
// const b=6;

// const c={
//     "name": "vivek",
//     "age":19
// }

// c.email="vivek@gmail.com";

// console.log(c);


//------------------------------------


// var fname="vivek";
// var age="19";

// console.log(`hi ${fname} ranjan sahoo ${age} age`);


//----------------------------------------

class users{
    constructor(){
        this.name="vivek";
        this.age="19";
    }

    getname(){
        return this.name;
    }

    getage(){
        return this.age;
    }
}

var user=new users();
console.log(user.getname());