let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?","");
    time = prompt("Введите дату в формате YYY-MM-DD", "");  
    
    while(isNaN(money) || money == "" || money == null) {
    money = +prompt("Ваш бюджет на месяц?","");
    }
}
start();


let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExpenses: function() {
        for (let i = 0; i < 2; i++) {
            let nameExpenses = prompt("Введите обязательную статью расходов в этом месяце", ""),
                moneyExpenses = +prompt("Во сколько обойдется?", "");

            if ( (typeof(nameExpenses))=== 'string' && (typeof(nameExpenses)) != null && (typeof(moneyExpenses)) != null &&
                nameExpenses != '' && moneyExpenses != '' && nameExpenses.length < 50) {
                console.log("done");
                appData.expenses[nameExpenses] = moneyExpenses;
            } else {
             i--
            }
        }
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
    for (let i = 0; i < 3; i++) {
        let optionalExpenses = prompt("Статья необязательных расходов", "");
            appData.optionalExpenses[i] = optionalExpenses;
}
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