// signin
var signInEmail = document.getElementById("signinEmailInp");
var signInPass = document.getElementById("signinPassInp");
var signIn = document.getElementById("signinBtn");

// signup
var signUpName = document.getElementById("signupNameInp");
var signUpEmail = document.getElementById("signupEmailInp");
var signUpPass = document.getElementById("signupPassInp");
var signUp = document.getElementById("signupBtn");
var signupArr = [];

//----------------------------------------------------------------------------

// signup link in signin code
    function signupLink(){
        document.getElementById("signupDiv").classList.replace("d-none" , "d-block");
        document.getElementById("signinDiv").classList.replace("d-block" , "d-none")  
    }

// localStorage for signup
    if(localStorage.getItem("signupArr") != null){
        signupArr = JSON.parse(localStorage.getItem("signupArr"))
    }

// signup button
signUp.addEventListener("click" , function(){
   
    var signupData = {
        upName : signUpName.value , 
        upEmail : signUpEmail.value ,
        upPass : signUpPass.value
    }

    if(signUpName.value == "" || signUpEmail.value == "" || signUpPass.value == ""){
        document.getElementById("signupWarning").innerHTML = "All inputs are required"
    }
    else{
            if(emailRepeat() ==  true){
                document.getElementById("signupWarning").innerHTML = "email already exists";
                // document.getElementById("signupWarning").innerHTML = "";
            }
            else{
                document.getElementById("signupWarning").innerHTML = "Success";  
                document.getElementById("signupWarning").classList.replace("text-danger" , "text-success");  
                signupArr.push(signupData);
                localStorage.setItem("signupArr" , JSON.stringify(signupArr)); 
                console.log(signupArr)         
            }
        
    }
}) 

function emailRepeat(){
    var repeat = false;
    for(var i=0 ; i<signupArr.length ; i++){
        if(signupArr[i].upEmail == signUpEmail.value ){
            repeat = true
        }
    }
    return repeat
}

// signin link in signup code
function signinLink(){
    document.getElementById("signupDiv").classList.replace("d-block" , "d-none");
    document.getElementById("signinDiv").classList.replace("d-none" , "d-block")  
}

// signin button
signIn.addEventListener("click" , function(){
    // email signin == email signup
    // not empty
    if(signInEmail.value == "" || signInPass.value == ""){
        document.getElementById("signinWarning").innerHTML = "All inputs are required" 
    }
        // not repeated 
    else{ 
        if (signEqual() == true){
            document.getElementById("signinDiv").classList.replace("d-block" , "d-none");
            document.getElementById("home").classList.replace("d-none" , "d-block");
        }
        else{
            document.getElementById("signinWarning").innerHTML = "incorrect email or password" 
        }
    }
})

function signEqual(){
    var equal = false
    for( var i=0 ; i < signupArr.length ; i++){
        if(signupArr[i].upEmail == signInEmail.value && signupArr[i].upPass == signInPass.value){
            equal = true;
            document.getElementById("homeSpan").innerHTML = signupArr[i].upName;
        }

    }
    return equal;
}



// logout
var logOut = document.getElementById("logoutBtn");
logOut.addEventListener("click", function(){
    document.getElementById("home").classList.replace("d-block" , "d-none");
    document.getElementById("signinDiv").classList.replace("d-none" , "d-block");
    signInEmail.value = "";
    signInPass.value = "";
})


