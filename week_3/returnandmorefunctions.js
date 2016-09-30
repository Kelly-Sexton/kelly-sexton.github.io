function add(a,b) {
    var sum = a + b;
    return next(sum);    
    
}

function next(sum2) {
    var sum = sum2 + 4;
    return sum;
}

var result = add(2,4);
console.log(result);


