function signclickfnc(){
    let signin = document.querySelector("#Sign-in")
let signup = document.querySelector("#Sign-up")


 signup.addEventListener("click",function(){
   document.querySelector("#signupForm").style.display = "block"
    document.querySelector("#signinForm").style.display = "none"
    document.querySelector(".tab.active").style.borderBottom = "0px solid #4a6cf7" 
     document.querySelector("#Sign-up").style.borderBottom = "2px solid #4a6cf7" 
     document.querySelector(".tab.active").style.color = "  #888" 
     document.querySelector("#Sign-up").style.color = " #4a6cf7" 
 })
 signin.addEventListener("click",function(){
   document.querySelector("#signupForm").style.display = "none"
    document.querySelector("#signinForm").style.display = "block"
     document.querySelector(".tab.active").style.borderBottom = "2px solid #4a6cf7" 
     document.querySelector("#Sign-up").style.borderBottom = "0px solid #4a6cf7" 
 document.querySelector(".tab.active").style.color = "  #4a6cf7" 
     document.querySelector("#Sign-up").style.color = "  #888" 
 })
 
}
signclickfnc()




