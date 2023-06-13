function updateRate(){
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
}

document.getElementById("rate").onchange = updateRate;

function compute(){
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
      
    if (parseFloat(principal) <= 0 || isNaN(principal)) {
        alert("Enter a valid positive number");
        document.getElementById("principal").focus();
        return;
    }
      
    var interest = principal * years * rate / 100;
    var amount = parseFloat(principal) + parseFloat(interest);
      
    var currentYear = new Date().getFullYear();
    var futureYear = currentYear + parseInt(years);
      
    var resultText = "If you deposit <mark>" + principal + "</mark>,<br>" +
        "at an interest rate of <mark>" + rate + "%</mark>.<br>" +
        "You will receive an amount of <mark>" + amount + "</mark>,<br>" +
        "in the year <mark>" + futureYear + "</mark>.";
    document.getElementById("result").innerHTML = resultText;   
}