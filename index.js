
function scuberGreetingForFeet(ride){
  // Write your code here!
  if (ride <= 400){
    ride = "This one is on me!";
  } else if (ride > 2000 && ride <= 2500){
    ride = 'I will gladly take your thirty bucks.'
  } else{
    ride = 'No can do.'
  }
 return ride;   
}

function ternaryCheckCity(city){
  // Write your code here!
return city == 'NYC' ? "Ok, sounds good." : "No go." ;
 
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  switch(tip){
    case "generous":
      return "Thank you so much.";
    case "not as generous":
      return "Thank you.";
    default:
      return 'Bye.'
  }
}