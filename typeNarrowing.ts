 function check(value: boolean | number) {
  if (typeof value == "boolean") {
    console.log("this is boolean value");
  } else if (typeof value == "number"){
    console.log("this is number value");
  }else{
    throw new Error(`${value} is incorrect`)
  }
}

check(false)