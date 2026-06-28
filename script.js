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

function themetoggle() {
    const toggle = document.querySelector('.ft-toggle');
    if (!toggle) return;

    const style = document.createElement('style');
    style.textContent = `
        .ft-toggle::after {
            transition: left 0.3s ease, right 0.3s ease;
        }
        .ft-toggle.light::after {
            right: auto;
            left: 3px;
        }
    `;
    document.head.appendChild(style);

    toggle.style.cursor = 'pointer';
    toggle.style.transition = 'all 0.3s ease';

    let isLight = localStorage.getItem('theme') === 'light';

    function applyTheme(light) {
        const root = document.documentElement;
        if (light) {
            root.style.setProperty('--main-bg', '#f0f2f5');
            root.style.setProperty('--sidebar-bg', '#ffffff');
            root.style.setProperty('--card-bg', '#ffffff');
            root.style.setProperty('--active-bg', '#e8edf5');
            root.style.setProperty('--border-dark', '#d0d7e3');
            root.style.setProperty('--text-white', '#1a2236');
            root.style.setProperty('--text-gray', '#4a5568');
            root.style.setProperty('--text-muted', '#718096');
            root.style.setProperty('--body-bg', '#f0f2f5');
            toggle.style.backgroundColor = '#f6c90e';
            toggle.classList.add('light');
        } else {
            root.style.setProperty('--main-bg', '#151c2c');
            root.style.setProperty('--sidebar-bg', '#1a2236');
            root.style.setProperty('--card-bg', '#1e2a40');
            root.style.setProperty('--active-bg', '#2a3a5c');
            root.style.setProperty('--border-dark', '#3b4f70');
            root.style.setProperty('--text-white', '#fff');
            root.style.setProperty('--text-gray', '#a0aec0');
            root.style.setProperty('--text-muted', '#7a8db0');
            root.style.setProperty('--body-bg', 'white');
            toggle.style.backgroundColor = '#3b82f6';
            toggle.classList.remove('light');
        }
        localStorage.setItem('theme', light ? 'light' : 'dark');
    }

    applyTheme(isLight);

    toggle.addEventListener('click', () => {
        isLight = !isLight;
        applyTheme(isLight);
    });
}

function showDashboard() {
    document.querySelector(".loginsection").style.display = "none";
    document.querySelector(".section").style.display = "block";
    let username = localStorage.getItem("username");
    document.querySelector("#adminname").textContent = username.toUpperCase();
    themetoggle();
}

function completeloginpage() {

    let signinbtn = document.querySelector("#inbtn");
    let signupbtn = document.querySelector("#upbtn");
    let nameinp = document.querySelector("#username");
    let passinp = document.querySelector("#password");
    let signupusername = document.querySelector("#signupusername");
    let signuppassword = document.querySelector("#signuppassword");
    let signupconfirmpassword = document.querySelector("#signupconfirmpassword");

    // Page load par check
    if (localStorage.getItem("username") && localStorage.getItem("loggedIn") === "true") {
        showDashboard();
    }

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
            localStorage.setItem("loggedIn", "true");
            showDashboard();
        }
    });

    // LOGOUT
    document.querySelector("#logoutBtn").addEventListener("click", function () {
        localStorage.setItem("loggedIn", "false");
        document.querySelector(".loginsection").style.display = "flex";
        document.querySelector(".section").style.display = "none";
    });
}
completeloginpage();