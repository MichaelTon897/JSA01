function equation(a,b){
  if(a==0){
    console.log("error")
    return
  }
  return -b/a
}
x = equation(5,8)
console.log(x);


//callback
const equation2 = (a,b) =>{
  if(a==0){
    console.log("error")
    return
  }
  return -b/a
}

x = equation2(5,8)
