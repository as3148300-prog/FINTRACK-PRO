let balance = 0;
let income = 0;
let expense = 0;
let transactionCount = 0;
let chart = null;
let editingRow = null;

document.querySelector("#hamburgerBtn").addEventListener("click", function () {
    document.querySelector("#ftSidebar").classList.toggle("open");
    document.querySelector("#sidebarOverlay").classList.toggle("open");
});

document.querySelector("#sidebarOverlay").addEventListener("click", function () {
    document.querySelector("#ftSidebar").classList.remove("open");
    document.querySelector("#sidebarOverlay").classList.remove("open");
});

function closeSidebar() {
    document.querySelector("#ftSidebar").classList.remove("open");
    document.querySelector("#sidebarOverlay").classList.remove("open");
}

document.querySelector("#Sign-up").addEventListener("click", function () {
    document.querySelector("#signupForm").style.display = "block";
    document.querySelector("#signinForm").style.display = "none";
    document.querySelector(".tab.active").style.borderBottom = "0px solid #4a6cf7";
    document.querySelector("#Sign-up").style.borderBottom = "2px solid #4a6cf7";
    document.querySelector(".tab.active").style.color = "#888";
    document.querySelector("#Sign-up").style.color = "#4a6cf7";
});

document.querySelector("#Sign-in").addEventListener("click", function () {
    document.querySelector("#signupForm").style.display = "none";
    document.querySelector("#signinForm").style.display = "block";
    document.querySelector(".tab.active").style.borderBottom = "2px solid #4a6cf7";
    document.querySelector("#Sign-up").style.borderBottom = "0px solid #4a6cf7";
    document.querySelector(".tab.active").style.color = "#4a6cf7";
    document.querySelector("#Sign-up").style.color = "#888";
});

document.querySelector("#upbtn").addEventListener("click", function () {
    let name = document.querySelector("#signupusername").value.trim();
    let pass = document.querySelector("#signuppassword").value.trim();
    let confirmPass = document.querySelector("#signupconfirmpassword").value.trim();

    if (name === "" && pass === "") {
        alert("Please enter your username and password");
    } else if (name === "") {
        alert("Please enter your username");
    } else if (pass === "") {
        alert("Please enter your password");
    } else if (pass !== confirmPass) {
        alert("Password and confirm password do not match");
    } else {
        localStorage.setItem("username", name);
        localStorage.setItem("password", pass);
        alert("Signup Successful");
        document.querySelector("#signupForm").style.display = "none";
        document.querySelector("#signinForm").style.display = "block";
        document.querySelector(".tab.active").style.borderBottom = "2px solid #4a6cf7";
        document.querySelector("#Sign-up").style.borderBottom = "0px solid #4a6cf7";
        document.querySelector(".tab.active").style.color = "#4a6cf7";
        document.querySelector("#Sign-up").style.color = "#888";
    }
});

document.querySelector("#inbtn").addEventListener("click", function () {
    let name = document.querySelector("#username").value.trim();
    let pass = document.querySelector("#password").value.trim();
    let savedName = localStorage.getItem("username");
    let savedPass = localStorage.getItem("password");

    if (name === "" && pass === "") {
        alert("Please enter your username and password");
    } else if (name === "") {
        alert("Please enter your username");
    } else if (pass === "") {
        alert("Please enter your password");
    } else if (name !== savedName && pass !== savedPass) {
        alert("Username and password both are incorrect");
    } else if (name !== savedName) {
        alert("Username is incorrect");
    } else if (pass !== savedPass) {
        alert("Password is incorrect");
    } else {
        localStorage.setItem("loggedIn", "true");
        showDashboard();
    }
});

function showDashboard() {
    document.querySelector(".loginsection").style.display = "none";
    document.querySelector(".section").style.display = "block";

    let username = localStorage.getItem("username");
    document.querySelector("#adminname").textContent = username.toUpperCase();

    setupTheme();
    setupChart();
    loadFromStorage();
}

if (localStorage.getItem("username") && localStorage.getItem("loggedIn") === "true") {
    showDashboard();
}

function setupTheme() {
    let toggle = document.querySelector(".ft-toggle");
    if (!toggle) return;

    let isLight = localStorage.getItem("theme") === "light";

    function applyTheme(light) {
        let root = document.documentElement;
        if (light) {
            root.style.setProperty("--main-bg", "#f0f2f5");
            root.style.setProperty("--sidebar-bg", "#ffffff");
            root.style.setProperty("--card-bg", "#ffffff");
            root.style.setProperty("--active-bg", "#e8edf5");
            root.style.setProperty("--border-dark", "#d0d7e3");
            root.style.setProperty("--text-white", "#1a2236");
            root.style.setProperty("--text-gray", "#4a5568");
            root.style.setProperty("--text-muted", "#718096");
            root.style.setProperty("--body-bg", "#f0f2f5");
            toggle.style.backgroundColor = "#f6c90e";
            toggle.classList.add("light");
        } else {
            root.style.setProperty("--main-bg", "#151c2c");
            root.style.setProperty("--sidebar-bg", "#1a2236");
            root.style.setProperty("--card-bg", "#1e2a40");
            root.style.setProperty("--active-bg", "#2a3a5c");
            root.style.setProperty("--border-dark", "#3b4f70");
            root.style.setProperty("--text-white", "#fff");
            root.style.setProperty("--text-gray", "#a0aec0");
            root.style.setProperty("--text-muted", "#7a8db0");
            root.style.setProperty("--body-bg", "white");
            toggle.style.backgroundColor = "#3b82f6";
            toggle.classList.remove("light");
        }
        localStorage.setItem("theme", light ? "light" : "dark");
    }

    applyTheme(isLight);

    toggle.addEventListener("click", function () {
        isLight = !isLight;
        applyTheme(isLight);
    });
}

function setupChart() {
    let ctx = document.querySelector("#myChart");
    chart = new Chart(ctx, {
        type: "bar",
        data: {
            labels: ["Income", "Expense"],
            datasets: [{
                label: "Amount",
                data: [0, 0],
                backgroundColor: ["#22C55E", "#EF4444"],
                borderRadius: 8,
                borderWidth: 0,
                barThickness: 80
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
                title: { display: true, text: "Income vs Expense", color: "#a0aec0" }
            },
            scales: {
                x: {
                    grid: { display: false },
                    ticks: { color: "#a0aec0" }
                },
                y: {
                    beginAtZero: true,
                    ticks: { color: "#a0aec0" },
                    grid: { color: "rgba(255,255,255,0.05)" }
                }
            }
        }
    });
}

function updateDisplay() {
    let symbol = document.querySelector("#currencySelect").value;
    let symbolEl = document.querySelector(".ft-cards .ft-card:first-child .currency-symbol");
    let amountEl = document.querySelector(".amount");

    if (balance < 0) {
        symbolEl.textContent = "-" + symbol;
        amountEl.textContent = Math.abs(balance).toFixed(2);
    } else {
        symbolEl.textContent = symbol;
        amountEl.textContent = balance.toFixed(2);
    }

    if (chart) {
        chart.data.datasets[0].data = [income, expense];
        chart.update();
    }
}

function makeTransactionHTML(type, date, desc, cat, amount) {
    let color = type === "expense" ? "#ef4444" : "#22c55e";
    let sign = type === "expense" ? "-" : "+";
    let symbol = document.querySelector("#currencySelect").value;

    return `<tr class="transections" data-type="${type}">
        <td class="date">${date}</td>
        <td class="discripttion">${desc}</td>
        <td class="catagory">${cat}</td>
        <td class="amaount" style="color:${color};">
            <span class="currency-symbol">${sign}${symbol}</span><span class="amount-value">${Number(amount).toFixed(2)}</span>
        </td>
        <td class="actions">
            <i class="ri-pencil-fill"></i>
            <i class="ri-delete-bin-line"></i>
        </td>
    </tr>`;
}

function saveToStorage() {
    let rows = [];
    document.querySelectorAll(".transections").forEach(function (row) {
        rows.push({
            type: row.dataset.type,
            date: row.querySelector(".date").textContent.trim(),
            desc: row.querySelector(".discripttion").textContent.trim(),
            cat: row.querySelector(".catagory").textContent.trim(),
            amount: row.querySelector(".amount-value").textContent.trim()
        });
    });
    localStorage.setItem("transactions", JSON.stringify(rows));
    localStorage.setItem("balance", balance);
    localStorage.setItem("income", income);
    localStorage.setItem("expense", expense);
    localStorage.setItem("transactionCount", transactionCount);
}

function loadFromStorage() {
    let saved = localStorage.getItem("transactions");
    if (!saved) return;

    let rows = JSON.parse(saved);
    balance = Number(localStorage.getItem("balance")) || 0;
    income = Number(localStorage.getItem("income")) || 0;
    expense = Number(localStorage.getItem("expense")) || 0;
    transactionCount = Number(localStorage.getItem("transactionCount")) || 0;

    rows.forEach(function (row) {
        document.querySelector(".parenttransection").insertAdjacentHTML("beforeend", makeTransactionHTML(row.type, row.date, row.desc, row.cat, row.amount));
    });

    document.querySelector(".amount2").textContent = Number(expense).toFixed(2);
    document.querySelector(".amount3").textContent = Number(income).toFixed(2);
    document.querySelector("#total").textContent = transactionCount;
    updateDisplay();
}

document.querySelector("#saveTxBtn").addEventListener("click", function () {
    let type = document.querySelector("#txType").value.trim();
    let amount = document.querySelector("#txAmount").value.trim();
    let desc = document.querySelector("#txDesc").value.trim();
    let date = document.querySelector("#txDate").value.trim();
    let cat = document.querySelector("#txCat").value.trim();

    if (desc === "") { alert("Please enter a description"); return; }
    if (amount === "") { alert("Please enter an amount"); return; }
    if (date === "") { alert("Please select a date"); return; }
    if (cat === "") { alert("Please select a category"); return; }

    if (editingRow) {
        let newHTML = makeTransactionHTML(type, date, desc, cat, amount);
        let temp = document.createElement("tbody");
        temp.innerHTML = newHTML;
        editingRow.replaceWith(temp.firstElementChild);
        editingRow = null;
    } else {
        document.querySelector(".parenttransection").insertAdjacentHTML("beforeend", makeTransactionHTML(type, date, desc, cat, amount));
    }

    if (type === "expense") {
        balance -= Number(amount);
        expense += Number(amount);
        document.querySelector(".amount2").textContent = expense.toFixed(2);
    } else {
        balance += Number(amount);
        income += Number(amount);
        document.querySelector(".amount3").textContent = income.toFixed(2);
    }

    transactionCount++;
    document.querySelector("#total").textContent = transactionCount;
    updateDisplay();
    saveToStorage();

    document.querySelector(".modal-overlay").style.display = "none";
});

document.querySelector(".parenttransection").addEventListener("click", function (e) {
    if (e.target.classList.contains("ri-delete-bin-line")) {
        let row = e.target.closest(".transections");
        let type = row.dataset.type;
        let amount = Number(row.querySelector(".amount-value").textContent);

        if (type === "expense") {
            balance += amount;
            expense -= amount;
            document.querySelector(".amount2").textContent = expense.toFixed(2);
        } else {
            balance -= amount;
            income -= amount;
            document.querySelector(".amount3").textContent = income.toFixed(2);
        }

        transactionCount--;
        document.querySelector("#total").textContent = transactionCount;
        row.remove();
        updateDisplay();
        saveToStorage();
    }
});

document.querySelector(".parenttransection").addEventListener("click", function (e) {
    if (e.target.classList.contains("ri-pencil-fill")) {
        let row = e.target.closest(".transections");

        let type = row.dataset.type;
        let amount = row.querySelector(".amount-value").textContent;
        let desc = row.querySelector(".discripttion").textContent.trim();
        let date = row.querySelector(".date").textContent.trim();
        let cat = row.querySelector(".catagory").textContent.trim();

        document.querySelector("#txType").value = type;
        document.querySelector("#txDesc").value = desc;
        document.querySelector("#txAmount").value = amount;
        document.querySelector("#txDate").value = date;
        document.querySelector("#txCat").value = cat;

        editingRow = row;

        if (type === "expense") {
            balance += Number(amount);
            expense -= Number(amount);
            document.querySelector(".amount2").textContent = expense.toFixed(2);
        } else {
            balance -= Number(amount);
            income -= Number(amount);
            document.querySelector(".amount3").textContent = income.toFixed(2);
        }

        transactionCount--;
        document.querySelector("#total").textContent = transactionCount;
        updateDisplay();

        document.querySelector(".modal-overlay").style.display = "flex";
    }
});

document.querySelector(".ft-add-btn").addEventListener("click", function () {
    editingRow = null;
    document.querySelector(".modal-overlay").style.display = "flex";
    closeSidebar();
});

document.querySelector(".modal-close").addEventListener("click", function () {
    editingRow = null;
    document.querySelector(".modal-overlay").style.display = "none";
});

document.querySelector("#settings").addEventListener("click", function () {
    document.querySelector(".ft-main").style.display = "none";
    document.querySelector("#settings").style.backgroundColor = "var(--active-bg)";
    document.querySelector(".ft-nav-item").style.backgroundColor = "transparent";
    document.querySelector(".settingsection").style.display = "block";
    closeSidebar();
});

document.querySelector(".ft-nav-item").addEventListener("click", function () {
    document.querySelector(".ft-main").style.display = "flex";
    document.querySelector("#settings").style.backgroundColor = "transparent";
    document.querySelector(".ft-nav-item").style.backgroundColor = "var(--active-bg)";
    document.querySelector(".settingsection").style.display = "none";
    closeSidebar();
});

document.querySelector("#saveUsername").addEventListener("click", function () {
    let newName = document.querySelector("#newUsername").value.trim();
    let currency = document.querySelector("#currencySelect").value;

    if (newName === "") {
        alert("Please enter a name");
        return;
    }

    document.querySelector("#adminname").textContent = newName.toUpperCase();

    document.querySelectorAll(".currency-symbol").forEach(function (el) {
        let text = el.textContent;
        if (text.startsWith("+") || text.startsWith("-")) {
            el.textContent = text[0] + currency;
        } else {
            el.textContent = currency;
        }
    });

    alert("Done!");
});

document.querySelector(".ft-logout-btn").addEventListener("click", function () {
    document.querySelector(".loginsection").style.display = "flex";
    document.querySelector(".section").style.display = "none";
});

function filterTransactions() {
    let search = document.querySelector(".ft-search").value.toLowerCase();
    let filterVal = document.querySelector(".ft-filter-select").value.toLowerCase();

    document.querySelectorAll(".transections").forEach(function (row) {
        let text = row.textContent.toLowerCase();
        let type = row.dataset.type;

        if (text.includes(search) && (filterVal === "all types" || type === filterVal)) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    });
}

document.querySelector(".ft-search").addEventListener("input", filterTransactions);
document.querySelector(".ft-filter-select").addEventListener("change", filterTransactions);

document.querySelector(".ft-reset-btn").addEventListener("click", function () {
    balance = 0;
    income = 0;
    expense = 0;
    transactionCount = 0;

    document.querySelector(".amount").textContent = "0.00";
    document.querySelector(".amount2").textContent = "0.00";
    document.querySelector(".amount3").textContent = "0.00";
    document.querySelector("#total").textContent = "0";
    document.querySelector(".parenttransection").innerHTML = "";

    if (chart) {
        chart.data.datasets[0].data = [0, 0];
        chart.update();
    }

    localStorage.removeItem("transactions");
    localStorage.removeItem("balance");
    localStorage.removeItem("income");
    localStorage.removeItem("expense");
    localStorage.removeItem("transactionCount");
});