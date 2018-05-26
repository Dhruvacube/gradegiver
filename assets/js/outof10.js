/*Made By Dhruva Shaw
  All Rights Reserved
  It shall not be copied without prior permission of the owner of the website. */  


//JavaScript Code for marks out of 20
//Science
function getgrades() {
  var marks = document.getElementById("marksin1").value;
  switch(marks)
{
    case "0":
    case "0.5":
    case "1":
    case "1.5":
    case "2":
       {
        document.getElementById("grades").innerHTML="Your Grade is E2";
        break;
       }
    case "2.5":
    case "3":
     {
      document.getElementById("grades").innerHTML="Your Grade is E1";
      break;
     }
    case "3.5":
    case "4":
    {
     document.getElementById("grades").innerHTML="Your Grade is D";
      break;
    }
    case "4.5":
    case "5":
     {
      document.getElementById("grades").innerHTML="Your Grade is C2";
      break;
     }
    case "5.5":
    case "6":
     {
      document.getElementById("grades").innerHTML="Your Grade is C1";
      break;
     }
    case "6.5":
    case "7":
     {
      document.getElementById("grades").innerHTML= "Your Grade is B2";
      break;
     }
    case "7.5":
    case "8":
    {
      document.getElementById("grades").innerHTML="Your Grade is B1";
      break;
    }
    case "8.5":
    case "9":
     {
      document.getElementById("grades").innerHTML="Your Grade is A2";
      break;
      }
    case "9.5":
    case "10":
     {
      document.getElementById("grades").innerHTML= "Your Grade is A1";
      break;
     }

    default:
     {
      document.getElementById("grades").innerHTML="Invalid Input !!!!";
      break;
    }
}
}


//Hindi
function getgradesone() {
  var marks = document.getElementById("marksin2").value;
  switch(marks)
{
    case "0":
    case "0.5":
    case "1":
    case "1.5":
    case "2":
       {
        document.getElementById("grades1").innerHTML="Your Grade is E2";
        break;
       }
    case "2.5":
    case "3":
     {
      document.getElementById("grades1").innerHTML="Your Grade is E1";
      break;
     }
    case "3.5":
    case "4":
    {
     document.getElementById("grades1").innerHTML="Your Grade is D";
      break;
    }
    case "4.5":
    case "5":
     {
      document.getElementById("grades1").innerHTML="Your Grade is C2";
      break;
     }
    case "5.5":
    case "6":
     {
      document.getElementById("grades1").innerHTML="Your Grade is C1";
      break;
     }
    case "6.5":
    case "7":
     {
      document.getElementById("grades1").innerHTML= "Your Grade is B2";
      break;
     }
    case "7.5":
    case "8":
    {
      document.getElementById("grades1").innerHTML="Your Grade is B1";
      break;
    }
    case "8.5":
    case "9":
     {
      document.getElementById("grades1").innerHTML="Your Grade is A2";
      break;
      }
    case "9.5":
    case "10":
     {
      document.getElementById("grades1").innerHTML= "Your Grade is A1";
      break;
     }

    default:
     {
      document.getElementById("grades1").innerHTML="Invalid Input !!!!";
      break;
    }
}
}


//Maths
function getgradestwo() {
  var marks = document.getElementById("marksin3").value;
  switch(marks)
{
    case "0":
    case "0.5":
    case "1":
    case "1.5":
    case "2":
       {
        document.getElementById("grades2").innerHTML="Your Grade is E2";
        break;
       }
    case "2.5":
    case "3":
     {
      document.getElementById("grades2").innerHTML="Your Grade is E1";
      break;
     }
    case "3.5":
    case "4":
    {
     document.getElementById("grades2").innerHTML="Your Grade is D";
      break;
    }
    case "4.5":
    case "5":
     {
      document.getElementById("grades2").innerHTML="Your Grade is C2";
      break;
     }
    case "5.5":
    case "6":
     {
      document.getElementById("grades2").innerHTML="Your Grade is C1";
      break;
     }
    case "6.5":
    case "7":
     {
      document.getElementById("grades2").innerHTML= "Your Grade is B2";
      break;
     }
    case "7.5":
    case "8":
    {
      document.getElementById("grades2").innerHTML="Your Grade is B1";
      break;
    }
    case "8.5":
    case "9":
     {
      document.getElementById("grades2").innerHTML="Your Grade is A2";
      break;
      }
    case "9.5":
    case "10":
     {
      document.getElementById("grades2").innerHTML= "Your Grade is A1";
      break;
     }

    default:
     {
      document.getElementById("grades2").innerHTML="Invalid Input !!!!";
      break;
    }
}
}

//S.S.T
function getgradesthree() {
  var marks = document.getElementById("marksin4").value;
  switch(marks)
{
    case "0":
    case "0.5":
    case "1":
    case "1.5":
    case "2":
       {
        document.getElementById("grades3").innerHTML="Your Grade is E2";
        break;
       }
    case "2.5":
    case "3":
     {
      document.getElementById("grades3").innerHTML="Your Grade is E1";
      break;
     }
    case "3.5":
    case "4":
    {
     document.getElementById("grades3").innerHTML="Your Grade is D";
      break;
    }
    case "4.5":
    case "5":
     {
      document.getElementById("grades3").innerHTML="Your Grade is C2";
      break;
     }
    case "5.5":
    case "6":
     {
      document.getElementById("grades3").innerHTML="Your Grade is C1";
      break;
     }
    case "6.5":
    case "7":
     {
      document.getElementById("grades3").innerHTML= "Your Grade is B2";
      break;
     }
    case "7.5":
    case "8":
    {
      document.getElementById("grades3").innerHTML="Your Grade is B1";
      break;
    }
    case "8.5":
    case "9":
     {
      document.getElementById("grades3").innerHTML="Your Grade is A2";
      break;
      }
    case "9.5":
    case "10":
     {
      document.getElementById("grades3").innerHTML= "Your Grade is A1";
      break;
     }

    default:
     {
      document.getElementById("grades3").innerHTML="Invalid Input !!!!";
      break;
    }
}
}

//English
function getgradesfour() {
  var marks = document.getElementById("marksin5").value;
  switch(marks)
{
    case "0":
    case "0.5":
    case "1":
    case "1.5":
    case "2":
       {
        document.getElementById("grades4").innerHTML="Your Grade is E2";
        break;
       }
    case "2.5":
    case "3":
     {
      document.getElementById("grades4").innerHTML="Your Grade is E1";
      break;
     }
    case "3.5":
    case "4":
    {
     document.getElementById("grades4").innerHTML="Your Grade is D";
      break;
    }
    case "4.5":
    case "5":
     {
      document.getElementById("grades4").innerHTML="Your Grade is C2";
      break;
     }
    case "5.5":
    case "6":
     {
      document.getElementById("grades4").innerHTML="Your Grade is C1";
      break;
     }
    case "6.5":
    case "7":
     {
      document.getElementById("grades4").innerHTML= "Your Grade is B2";
      break;
     }
    case "7.5":
    case "8":
    {
      document.getElementById("grades4").innerHTML="Your Grade is B1";
      break;
    }
    case "8.5":
    case "9":
     {
      document.getElementById("grades4").innerHTML="Your Grade is A2";
      break;
      }
    case "9.5":
    case "10":
     {
      document.getElementById("grades4").innerHTML= "Your Grade is A1";
      break;
     }

    default:
     {
      document.getElementById("grades4").innerHTML="Invalid Input !!!!";
      break;
    }
}
}






