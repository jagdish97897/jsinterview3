let a=setTimeout(function(){
    console.log("hello guys")
  },4000)
  let b="y"
  if("n"==b)
  {
    clearTimeout(a)
  }
  console.log(a)