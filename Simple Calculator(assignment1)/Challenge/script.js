var a = '';
var num = [];
var ans;
var test = "";



// All the numbers and operators input will be stored in an array "num" using function "sendNum()"
function sendnum(digit){

	num.push(digit);
  // console.log(num);
   for(i=0; i<num.length ; i++){
         
	a=num[i];
   
}
test=test+a;
document.getElementById('answer').value = test;

}
  
// when the user presses "=", function "equalTo()" is called 
function equalTo(){
	document.getElementById('answer').innerHTML = '';
  		//console.log("inequalto>",test)
	ans = eval(test);	//evaluation of expression
	if(ans=="Infinity"){
		alert("Divion by zero is invalid ,pls enter valid denomenator.");
		ans='';
	}
	test= ans;
	document.getElementById('answer').value = ans;		// result display


}


// When user presses "AC", function "clearScr()" is called
function clearScr(){
	document.getElementById('answer').value = "";
   
	
	while(num.length > 0){
      console.log(num.length)
    	num.pop();				// emptying the array "num"
	}

	a ='';	
	b ='';
   test=''; //reset all variables to null
}


//dividing by zero will return infinity by default.