//swap two number 
var a, b, c;

function jagdish(x, y) {
    c = x + y;  //same variable not working
    a = c - x;
    b = c - y;
}

jagdish(5, 4);

console.log("a =", a); // This will print "a = 4"
console.log("b =", b); // This will print "b = 5"

