function signclickfnc() {
    let signin = document.querySelector("#Sign-in");
    let signup = document.querySelector("#Sign-up");

    signup.addEventListener("click", function () {
        document.querySelector("#signupForm").style.display = "block";
        document.querySelector("#signinForm").style.display = "none";
        document.querySelector(".tab.active").style.borderBottom = "0px solid #4a6cf7";
        document.querySelector("#Sign-up").style.borderBottom = "2px solid #4a6cf7";
        document.querySelector(".tab.active").style.color = "#888";
        document.querySelector("#Sign-up").style.color = "#4a6cf7";
    });

    signin.addEventListener("click", function () {
        document.querySelector("#signupForm").style.display = "none";
        document.querySelector("#signinForm").style.display = "block";
        document.querySelector(".tab.active").style.borderBottom = "2px solid #4a6cf7";
        document.querySelector("#Sign-up").style.borderBottom = "0px solid #4a6cf7";
        document.querySelector(".tab.active").style.color = "#4a6cf7";
        document.querySelector("#Sign-up").style.color = "#888";
    });
}
signclickfnc();

function completeloginpage() {

    let signinbtn = document.querySelector("#inbtn");
    let signupbtn = document.querySelector("#upbtn");

    let nameinp = document.querySelector("#username");
    let passinp = document.querySelector("#password");

    let signupusername = document.querySelector("#signupusername");
    let signuppassword = document.querySelector("#signuppassword");
    let signupconfirmpassword = document.querySelector("#signupconfirmpassword");

    // SIGN UP
    signupbtn.addEventListener("click", function () {

        if (signupusername.value.trim() === "" && signuppassword.value.trim() === "") {
            alert("please enter your username and password");

        } else if (signupusername.value.trim() === "" && signuppassword.value.trim() !== "") {
            alert("please enter your username");

        } else if (signupusername.value.trim() !== "" && signuppassword.value.trim() === "") {
            alert("please enter your password");

        } else if (signuppassword.value.trim() !== signupconfirmpassword.value.trim()) {
            alert("your password and confirm password is different");

        } else {

            // Local Storage
            localStorage.setItem("username", signupusername.value.trim());
            localStorage.setItem("password", signuppassword.value.trim());

            alert("Signup Successful");

            document.querySelector("#signupForm").style.display = "none";
            document.querySelector("#signinForm").style.display = "block";
            document.querySelector(".tab.active").style.borderBottom = "2px solid #4a6cf7";
            document.querySelector("#Sign-up").style.borderBottom = "0px solid #4a6cf7";
            document.querySelector(".tab.active").style.color = "#4a6cf7";
            document.querySelector("#Sign-up").style.color = "#888";
        }

    });

    // SIGN IN
    signinbtn.addEventListener("click", function () {

        let savedName = localStorage.getItem("username");
        let savedPass = localStorage.getItem("password");

        if (nameinp.value.trim() === "" && passinp.value.trim() === "") {
            alert("enter your username and password");

        } else if (nameinp.value.trim() !== "" && passinp.value.trim() === "") {
            alert("enter your password");

        } else if (nameinp.value.trim() === "" && passinp.value.trim() !== "") {
            alert("enter your username");

        } else if (nameinp.value.trim() !== savedName && passinp.value.trim() !== savedPass) {
            alert("username and password both are incorrect");

        } else if (nameinp.value.trim() !== savedName) {
            alert("your username is incorrect");

        } else if (passinp.value.trim() !== savedPass) {
            alert("your password is incorrect");

        } else {
            document.querySelector(".loginsection").style.display = "none";
            document.querySelector(".section").style.display = "block";
            let username = localStorage.getItem("username"); 
document.querySelector("#adminname").textContent = username.toUpperCase();
        }

    });

}
completeloginpage();
 
