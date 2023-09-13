var salary = "1000$";

(function () {
  
  console.log("Original salary was " + salary);//undefined

  var salary = "5000$";

  console.log("My New Salary " + salary);//5000
})();