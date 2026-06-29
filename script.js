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

    if (localStorage.getItem("username") && localStorage.getItem("loggedIn") === "true") {
        showDashboard();
    }

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
}
completeloginpage();

function settingopenandclosefnc() {
    document.querySelector("#settings").addEventListener("click", function () {
        document.querySelector(".ft-main").style.display = "none";
        document.querySelector("#settings").style.backgroundColor = "var(--active-bg)";
        document.querySelector(".ft-nav-item").style.backgroundColor = "transparent";
        document.querySelector(".settingsection").style.display = "block";
    });
    document.querySelector(".ft-nav-item").addEventListener("click", function () {
        document.querySelector(".ft-main").style.display = "flex";
        document.querySelector("#settings").style.backgroundColor = "transparent";
        document.querySelector(".ft-nav-item").style.backgroundColor = "var(--active-bg)";
        document.querySelector(".settingsection").style.display = "none";
    });
}
settingopenandclosefnc();

function addtransectionbtn() {
    document.querySelector(".ft-add-btn").addEventListener("click", function () {
        document.querySelector(".modal-overlay").style.display = "flex";
    });
    document.querySelector(".modal-close").addEventListener("click", function () {
        document.querySelector(".modal-overlay").style.display = "none";
    });
}
addtransectionbtn();

function logoutbtn() {
    document.querySelector(".ft-logout-btn").addEventListener("click", function () {
        document.querySelector(".loginsection").style.display = "flex";
        document.querySelector(".section").style.display = "none";
    });
}
logoutbtn();

function settingspage() {
    let changeusername = document.querySelector("#saveUsername");
    let currencySelect = document.querySelector("#currencySelect");

    changeusername.addEventListener("click", function () {
        let username = document.querySelector("#newUsername").value.trim();

        if (username === "") {
            alert("Please select a name");
            return;
        }

        document.querySelector("#adminname").textContent = username.toUpperCase();

        document.querySelectorAll(".currency-symbol").forEach(function (symbol) {
            symbol.textContent = currencySelect.value;
        });

        alert("Done!!!");
    });
}
settingspage();

// Chart pehle banao
 function chart(){
    const ctx = document.querySelector("#myChart");
const chart = new Chart(ctx, {
    type: "bar",
    data: {
        labels: ["Income", "Expense"],
        datasets: [{
            label: "Amount",
            data: [0, 0],
            backgroundColor: ["#22C55E", "#EF4444"],
            borderRadius: 8,
            borderWidth: 0,
            barThickness: 150,
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            title: {
                display: true,
                text: "Income vs Expense",
            }
        },
        scales: {
            x: { grid: { display: false } },
            y: {
    beginAtZero: true
}
        }
    }
});
 }
 chart()

// Variables
let curbalance = 0;
let totalincome = 0;
let totalexpenses = 0;
let totaltransection = 0;

// Ek hi updateBalanceDisplay — chart update bhi isme
function updateBalanceDisplay() {
    let currencySymbol = document.querySelector("#currencySelect").value;
    let balanceSymbolEl = document.querySelector(".ft-cards .ft-card:first-child .currency-symbol");
    let balanceAmountEl = document.querySelector(".amount");

    if (curbalance < 0) {
        balanceSymbolEl.textContent = "-" + currencySymbol;
        balanceAmountEl.textContent = Math.abs(curbalance);
    } else {
        balanceSymbolEl.textContent = currencySymbol;
        balanceAmountEl.textContent = curbalance;
    }

    chart.data.datasets[0].data = [totalincome, totalexpenses];
    chart.update();
}

function addition() {
    let transbtn = document.querySelector("#saveTxBtn");
    let type = document.querySelector("#txType");
    let amount = document.querySelector("#txAmount");
    let dis = document.querySelector("#txDesc");
    let det = document.querySelector("#txDate");
    let cat = document.querySelector("#txCat");

    transbtn.addEventListener("click", function () {
        if (type.value.trim() === "expense") {
            if (dis.value.trim() === "") {
                alert("please enter some discription");
            } else if (amount.value.trim() === "") {
                alert("please enter your amount");
            } else if (det.value.trim() === "") {
                alert("please select a date");
            } else if (cat.value.trim() === "") {
                alert("please select a catagory");
            } else {
                curbalance -= Number(amount.value);
                totalexpenses += Number(amount.value);
                updateBalanceDisplay();
                document.querySelector(".amount2").textContent = totalexpenses;
                totaltransection++;
                document.querySelector("#total").textContent = totaltransection;
                document.querySelector(".parenttransection").innerHTML += `<div class="transections" data-type="expense">
                    <div class="date">${det.value}</div>
                    <div class="discripttion">${dis.value}</div>
                    <div class="catagory">${cat.value}</div>
                    <div style="color: red;" class="amaount">
                        <span class="currency-symbol">-$</span><span class="amount-value">${amount.value}</span>
                    </div>
                    <div class="actions">
                        <i class="ri-pencil-fill"></i>
                        <i class="ri-delete-bin-line"></i>
                    </div>
                </div>`;
            }
        } else {
            if (dis.value.trim() === "") {
                alert("please enter some discription");
            } else if (amount.value.trim() === "") {
                alert("please enter your amount");
            } else if (det.value.trim() === "") {
                alert("please select a date");
            } else if (cat.value.trim() === "") {
                alert("please select a catagory");
            } else {
                curbalance += Number(amount.value);
                totalincome += Number(amount.value);
                updateBalanceDisplay();
                document.querySelector(".amount3").textContent = totalincome;
                totaltransection++;
                document.querySelector("#total").textContent = totaltransection;
                document.querySelector(".parenttransection").innerHTML += `<div class="transections" data-type="income">
                    <div class="date">${det.value}</div>
                    <div class="discripttion">${dis.value}</div>
                    <div class="catagory">${cat.value}</div>
                    <div style="color: green;" class="amaount">
                        <span class="currency-symbol">+$</span><span class="amount-value">${amount.value}</span>
                    </div>
                    <div class="actions">
                        <i class="ri-pencil-fill"></i>
                        <i class="ri-delete-bin-line"></i>
                    </div>
                </div>`;
            }
        }
    });
}
addition();

function filter() {
    function filterTransactions() {
        let search = document.querySelector(".ft-search").value.toLowerCase();
        let filter = document.querySelector(".ft-filter-select").value.toLowerCase();
        let transactions = document.querySelectorAll(".transections");

        transactions.forEach(function (t) {
            let text = t.textContent.toLowerCase();
            let type = t.dataset.type;

            if (text.includes(search) && (filter === "all types" || type === filter)) {
                t.style.display = "flex";
            } else {
                t.style.display = "none";
            }
        });
    }

    document.querySelector(".ft-search").addEventListener("input", filterTransactions);
    document.querySelector(".ft-filter-select").addEventListener("change", filterTransactions);
}
filter();

function resetbtn() {
    document.querySelector(".ft-reset-btn").addEventListener("click", function () {
        curbalance = 0;
        totalincome = 0;
        totalexpenses = 0;
        totaltransection = 0;

        document.querySelector(".amount").textContent = "0.00";
        document.querySelector(".amount2").textContent = "0.00";
        document.querySelector(".amount3").textContent = "0.00";
        document.querySelector("#total").textContent = "0";
        document.querySelector(".parenttransection").innerHTML = "";

        chart.data.datasets[0].data = [0, 0];
        chart.update();
    });
}
resetbtn();

