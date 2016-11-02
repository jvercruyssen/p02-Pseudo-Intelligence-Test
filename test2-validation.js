// Jeff Vercruyssen
function validate(){
  //Grab the user's input and store in variables
  var object1 = document.getElementById("input1").value;
  var object2 = document.getElementById("input2").value;
  var myAnswer = document.getElementById("inputAnswer").value;

  if ((isNaN(object1) == true) || (isNaN(object2) == true)) {
    document.getElementById("numbersError").innerHTML="Field must contain a number";
    document.getElementById("numbersError").classList.remove("hidden-message");
    document.getElementById("numbersError").classList.add("shown-message");
  }
  else {
    document.getElementById("numbersError").classList.remove("shown-message");
    document.getElementById("numbersError").classList.add("hidden-message");
    document.getElementById("numbersGroup").classList.add("has-success");
  }
}

function checkAnswer(){
  //Grab the user's input and verify it against the actual answer
  var object1 = document.getElementById("input1").value;
  var object2 = document.getElementById("input2").value;
  var myAnswer = document.getElementById("inputAnswer").value;
  var answer = Number(object1) * Number(object2) + object2 + object1 +
   (Number(object2) - Number(object1)) + object1;

  if(myAnswer == answer){
    document.getElementById("answerError").innerHTML="That is correct!";
    document.getElementById("answerError").classList.remove("hidden-message");
    document.getElementById("answerError").classList.add("shown-message");
    document.getElementById("answerGroup").classList.add("has-success");
  }
  else{
    document.getElementById("answerError").innerHTML="Sorry, that is incorrect.";
    document.getElementById("answerError").classList.remove("hidden-message");
    document.getElementById("answerError").classList.add("shown-message");
    document.getElementById("answerGroup").classList.remove("has-success");
  }
}
