let btnStart = document.getElementById('start'),
    resultTable = document.querySelectorAll('.result-table'),
    budgetValue = document.getElementsByClassName('budget-value'),
    daybudgetValue = document.getElementsByClassName('daybudget-value'),
    levelValue = document.getElementsByClassName('level-value'),
    expensesValue = document.getElementsByClassName('expenses-value'),
    optionalexpensesValue = document.getElementsByClassName('optionalexpenses-value'),
    incomeValue = document.getElementsByClassName('income-value'),
    monthsavingsValue = document.getElementsByClassName('monthsavings-value'),
    yearsavingsValue = document.getElementsByClassName('yearsavings-value'),
    timeData = document.querySelectorAll('.time-data'),
    yearValue = document.getElementsByClassName('year-value'),
    monthValue = document.getElementsByClassName('month-value'),
    dayValue = document.getElementsByClassName('day-value'),
    inputexpensesitem = document.querySelectorAll('.expenses-item'),
    btn = document.getElementsByTagName('button'),
    btnApprove1 = btn[0],
    btnApprove2 = btn[1],
    btnCalculate = btn[2],
    chooseincomelabel = document.querySelector('.choose-income-label'),
    checksavings = document.querySelector('.checksavings'),
    sum = document.querySelector('.sum'),
    percent = document.querySelector('.percent'),
    year = document.querySelector('.year'),
    month = document.querySelector('.month'),
    day = document.querySelector('.day');

    console.log(budgetValue);
    console.log(timeData);
    console.log(btnCalculate);
    console.log(inputexpensesitem[2]);
    console.log(year);