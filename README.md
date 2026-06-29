# Finance Tracker 💰

A simple personal finance tracker web app where you can add your income and expenses, see your balance, and track all your transactions — even after refreshing the page.

---

## Features

- Sign up and sign in with username and password
- Add income and expense transactions
- Edit or delete any transaction
- Balance, total income, and total expense update automatically
- Bar chart showing income vs expense
- Search and filter transactions
- Light and dark theme toggle
- All data saved in localStorage — nothing is lost on refresh
- Reset button to clear everything

---

## How to Use

**1. Sign Up**
Open the app and click the "Sign Up" tab. Enter a username, password, and confirm your password. Click Sign Up.

**2. Sign In**
Go to the "Sign In" tab, enter your username and password, and click Sign In.

**3. Add a Transaction**
Click the **+ Add** button. Fill in the type (income or expense), description, amount, date, and category. Click Save.

**4. Edit a Transaction**
Click the pencil icon on any transaction. The modal will open with the old values pre-filled. Make your changes and click Save — the transaction updates in place.

**5. Delete a Transaction**
Click the bin icon on any transaction to remove it.

**6. Search / Filter**
Use the search bar to search by text, or use the dropdown to filter by income or expense.

**7. Reset**
Click the Reset button to clear all transactions and start fresh.

**8. Change Theme**
Click the toggle button in the sidebar to switch between dark and light mode.

**9. Settings**
Click the Settings icon in the sidebar to change your display name and currency symbol.

---

## Files

```
project/
├── index.html       # Main HTML file
├── style.css        # All styles
└── script.js        # All JavaScript logic
```

---

## Tech Used

- HTML, CSS, JavaScript (no frameworks)
- [Chart.js](https://www.chartjs.org/) — for the bar chart
- [Remix Icon](https://remixicon.com/) — for icons
- localStorage — to save data in the browser

---

## How to Run

No installation needed. Just open `index.html` in any browser and it works.

---

## Notes

- Data is saved in your browser's localStorage. If you clear your browser data, the transactions will be deleted.
- This app stores the password in localStorage in plain text. It is meant for personal/local use only — do not use it as a real login system.# FINTRACK-PRO