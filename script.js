
function compute()
{
    //declare the variables needed to calculate interest
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    //interest calculation
    var interest = principal*years*rate/100;
    var year = new Date().getFullYear()+parseInt(years);
    document.getElementById("result").innerHTML="If you deposit "+principal+", \<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+interest+",\<br\>in the year "+year+"\<br\>"
    //make sure the input is not negative and not zero
    if(principal<=0){ 
        alert("Enter a Positive number");
        principal.focus();
        return false;

    }
    //if numbers are valid
    alert("Calculation successful");
    return true;
}
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
    
 }
