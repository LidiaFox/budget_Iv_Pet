let startBtn = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    daybudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalexpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthsavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearsavingsValue = document.getElementsByClassName('yearsavings-value')[0],


    expensesItem = document.getElementsByClassName('expenses-item'),
    expensesBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2],
    optionalExpensesItem = document.querySelector('.optionalexpenses-item'),
    incomeItem = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('#savings'),
    sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

    let money, time;

   
startBtn.addEventListener('click', function() {
    time = prompt("Введите дату в формате YYYY-NN-DD", "");
    money = +prompt("Ваш бюджет на месяц?", "");

    while (isNaN(money) || money =='' || money == null) {
        money = prompt("Ваш бюджет?", "");
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();
});

expensesBtn.addEventListener('click', function() {
    let sum = 0;

    for (let i = 0; i < expensesItem.length; i++) {
        let nameExpenses = expensesItem[i].value,
            moneyExpenses = expensesItem[++i].value;

        if ( (typeof(nameExpenses))=== 'string' && (typeof(nameExpenses)) != null && (typeof(moneyExpenses)) != null &&
            nameExpenses != '' && moneyExpenses != '' && nameExpenses.length < 50) {
            console.log("done");
            appData.expenses[nameExpenses] = moneyExpenses;
        } else {
         i--
        }
    }
    expensesValue.textContent = sum;
});

optionalExpensesBtn.addEventListener('click', function() {
    for (let i = 0; i < optionalExpensesItem.length; i++) {
        let optionalExpenses = optionalExpensesItem[i].value;
            appData.optionalExpenses[i] = optionalExpenses;
            optionalexpensesValue.textContent += appData.optionalExpenses[i] + ' '; 
}
});


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function() {
       
},
detectDayBudget: function() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Ежедневный бюджет" + appData.moneyPerDay);
    
},
detectLevel: function() {
    if(appData.moneyPerDay < 100) {
        console.log("Минимальный уровень достатка");
    }else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
           console.log("Средний уровень достатка");
    }else if(appData.moneyPerDay > 2000) {
               console.log("Высокий уровень достатка");
    }else{
       console.log("Произошла ошибка");
       };
},
checkSavings: function() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?"); 

        appData.monthIncome = save/100/12*percent;
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
}
},
chooseOptExpenses: function() {
    
},
choseIncome: function() {
    let items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", "");

    while(typeof(items)=== 'string' && items == "" || items == null) {
        items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", "");
    appData.income = items.split(", ");
    appData.income.push(prompt("Может что-то ещё?"));
    appData.income.sort();
}
choseIncome.forEach(function(item) {
    alert("Способы доп. заработка: " + item);
})
}
};

for (let key in appData) {
    console.log("Наша программа включает в себя данные: " + key);
}