function loanCal(){
	//get the values from the user
  let amount = document.getElementById('amount').value;
	let interest_rate = document.getElementById('interest_rate').value;
	let months = document.getElementById('months').value;
	//calculate the interest for the loan
  let interest = (amount * (interest_rate * .01)) / months;
  //toFixed(2) --> demical num with 2 digits
	let payment = ((amount / months) + interest).toFixed(2);
    //add a , every three digits
    
  payment = payment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  //render to the html
	document.getElementById('payment').innerHTML = "Monthly Payment = $"+payment;
}
