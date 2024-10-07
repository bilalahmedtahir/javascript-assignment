for(let i = 1;i<100;i++){
    if(i%2 === 0 && i%5 === 0){
        console.log(i);
        console.log("both");
    }
    else if(i%2 === 0){
        console.log(i);
        console.log("two");
    }
    else if(i%5 === 0){
        console.log(i);
        console.log("five");
    }
    else{
        console.log(i);
        console.log("neither");
    }
}