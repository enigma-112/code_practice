var num = 12;
var dec = 12.79;
var bool = true;
var str = "London";
var ud = undefined;
var obj = {};
console.log(typeof num, typeof dec, typeof bool, typeof str, typeof(obj), typeof ud);

//objects
var x = {};
var y = {"name" : "Johnny Depp"};
var z = {name : "Johnny Depp"};
x.name = "Johnny Depp";
console.log(x, y, z);

var arr = [1, 2, 3, 4, 5];
console.log(arr, typeof arr);
arr.name = "Johnny Depp";
console.log(arr);
console.log(arr.length);

var fun = function(){};
console.log(fun);
console.log(typeof fun);   


/////////////////////////////////////////////////
console.log(1 + "2");
console.log(1 - "2");
console.log(1 - "Johnny");

var m = Number("487");
var n = Number("Johnny");
var o = NaN;
console.log(m, n, typeof n, typeof o);  
console.log(isNaN(m)); // false
console.log(isNaN(n)); // true
console.log(isNaN("abcd")); // true

// In javascript NaN is the only value which is not equal to itself 
console.log(m === NaN) // false
console.log(n === NaN) // false
console.log(NaN === NaN) // false 

console.log(Number.isNaN(m));
console.log(Number.isNaN(n));
console.log(Number.isNaN("abcd"));

////////////////////////////////////////////

var pzero = 0;
var nzero = -0;  // IEEE 754
console.log(pzero, nzero);
console.log(pzero === nzero); // Instead of this use below thing
console.log(Object.is(pzero, 0));
console.log(Object.is(nzero, -0));
console.log(Object.is(nzero, 0))
