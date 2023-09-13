// https://github.com/ganqqwerty/123-Essential-JavaScript-Interview-Questions

// var output = (function(x) {
//     delete x;
//     return x;
//   })(7);
  
//   console.log(output); ------>>>output=7



// var x = 3;
// var output = (function() {
//   delete x;
//   return x;
// })();

// console.log(output);----->>>output=3



var x={jagdish:67};
var output = (function() {
  delete x.jagdish;
  return x.jagdish;
})();

console.log(output);