const totalCost = document.querySelector(`#total-cost`);
const initialFee = document.querySelector(`#an-initial-free`);
const creditTerm = document.querySelector(`#credit-term`);

const totalCostRange = document.querySelector(`#total-cost-range`);
const initialFeeRange = document.querySelector(`#an-initial-free-range`);
const creditTermRange = document.querySelector(`#credit-term-range`);

const totalCredit = document.querySelector(`#amount-of-credit`);
const totalMounth1lyPayment = document.querySelector(`#monthly-payment`);
const totalRecIncome = document.querySelector(`#recommended-income`);

const ranges = document.querySelectorAll(`.input-range`);
const buttonsBanks = document.querySelectorAll(`.banks`);


const setValue = () => {
    totalCost.value = totalCostRange.value;
    initialFee.value = initialFeeRange.value;
    creditTerm.value = creditTermRange.value;
}

const banks = [
    {
        name: `privat`,
        percents: 8.5
    },
    {
        name: `oschad`,
        percents: 7.8
    },
    {
        name: `ukrgaz`,
        percents: 8.1
    }
];

let currentPercent = banks[0].percents;

for(let i = 0; i < buttonsBanks.length; i++) {
    buttonsBanks[i].addEventListener("click", () => {
       for(let i = 0; i < buttonsBanks.length; i++) {
        buttonsBanks[i].classList.remove(`.active`);
       }
        buttonsBanks[i].classList.add('.active');
    });
};

const activeBank = activeButton => {
    const dataValue = activeButton.dataset.name;
    const currentBank = banks.find(bank => bank.name === dataValue);
    currentPercent = currentBank.percents;
    calc(totalCost.value, initialFee.value, creditTerm.value);
};

for(let i = 0; i < ranges.legth; i++) {
    ranges[i].addEventListener("input", () => {
        setValue();
        calc(totalCost.value, initialFee.value, creditTerm.value);
    });
}

const calc = (totalCost = 0, initialFee = 50000, creditTerm = 1) => {
    let amountLoan = totalCost - initialFee;
    let interestRate = currentPercent;
    let amountMonth = 12 * creditTerm;

    let monthlyPayment = (amountLoan + (((amountLoan/100) * interestRate)/12)*amounthMonth)/amountMonth;
    let monthlyPaymentRound = Math.round(monthlyPayment);

    let recIncome = Mqth.round(monthlyPayment + ((monthlyPayment * 35)/100));

    if(monthlyPayment < 0) {
        return false;
    } else {
        totalCredit.innerHTML = `${amountLoan} ₴`;
        totalMonthlyPayment.innerHTML = `${monthlyPaymentRound} ₴`;
        totalRecIncome.innerHTML = `${recIncome} ₴`;
    }
}

setValue();