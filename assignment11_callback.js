function LogInOrder(first, second) {
        first(function() {
        console.log("first");
        second(function() {
        console.log("second");
        });
    });
}

var first = function(callback) {
    setTimeout(callback, Math.random() * 1000);
};

var second = function(callback) {
    setTimeout(callback, Math.random() * 1000);
};
LogInOrder(first, second);



