
let result = document.getElementById("inputext");

function calculate(num){

  inputext.value += num;

}
function display(){

  try{
    inputext.value = eval(inputext.value);
  }
  catch(err){
    alert("Invalid");
  }
}

function Clear(){
  inputext.value ="";
}

function Del(){
  inputext.value = inputext.value.slice(0,-1);
}
