function LogInOrder(first, second){
    first().then(() => {
        console.log("first");
        return second();  
    }).then(() =>{
        console.log("second");
    });
}

var first = function(){
    return new Promise((resolve) =>{
        setTimeout(resolve,Math.random() * 1000);
    });
};

var second = function(){
    return new Promise((resolve) =>{
    });
};
LogInOrder(first, second);
