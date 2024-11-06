function aa(){
    console.log("First")
}
aa();

(function (){
    console.log("Second")
})();

//arrow function
() => {
    console.log("Third")
}

//variable
let a=new Function(`console.log("Forth");`);
