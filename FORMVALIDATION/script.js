
function formvalidation(){
    const variableone = document.getElementById("one");
    const variabletwo = document.getElementById("two");
    const variablethree = document.getElementById("three");
    const variablethreeone = document.getElementById("threeone");
    const maleRadioButton = document.getElementById("maleRadio");
    const femaleRadioButton = document.getElementById("femaleRadio");
    const variablefive = document.getElementById("five");
    const variablesix = document.getElementById("six");
    const variableseven = document.getElementById("seven");
    const variableeight = document.getElementById("eight");
    const variablenine = document.getElementById("nine");
    const selectedQualification = document.getElementById("ten");
    const variabletwelve = document.getElementById("twelve");

    
    if(variableone.value === ''){
      alert("please enter your first name")
       variableone.focus()
       return false;
    }
    if(variabletwo.value === ''){
        alert("please enter your last name")
        variabletwo.focus()
        return false;   

    }
    if(variablethree.value === ''){
        alert("please enter your email")
        variablethree.focus()
        return false;   

    }
    if(variablethreeone.value === ''){
        alert("please enter your mobile number")
        variablethreeone.focus()
        return false;   

    }
    if (!maleRadioButton.checked && !femaleRadioButton.checked) {
        alert("Please select your gender");
        return false;
    }
    if(variablefive.value === ''){
        alert("please enter your date of birth")
        variablefive.focus()
        return false;   

    }
    if(variablesix.value === ''){
        alert("please enter your address")
        variablesix.focus()
        return false;   

    }
    if(variableseven.value === ''){
        alert("please enter your city")
        variableseven.focus()
        return false;   

    }
    if(variableeight.value === ''){
        alert("please enter your area pin")
        variableeight.focus()
        return false;   

    }
    if(variablenine.value === ''){
        alert("please enter your state")
        variablenine.focus()
        return false;   

    }
    if (selectedQualification.value === '') {
        alert("Please select your qualification");
        selectedQualification.focus()
        return false;
    }
    if(variabletwelve.value === ''){
        alert("please enter your password")
        variabletwelve.focus()
        return false;   

    }
    return true;
}
document.querySelector('form').onsubmit = function() {
    return formvalidation();
  };
  






