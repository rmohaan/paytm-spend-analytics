import faker from  'faker';
export const currency = "\u20B9";

export const getAreasOfExpenditure = (splitArray, spent) => {
    const expenditureDepartments = ["Travel", "Food & Beverages", "Shopping", "Entertainment", "Recharge & Bill Payment", "Others"];
    let n = splitArray.length;
    let areasOfExpenditure = [];
    for( let i = 0; i < n; i++) {
        areasOfExpenditure.push({"department": expenditureDepartments[i], "spent": (splitArray[i] / spent).toPrecision(2)  * 100})
    }

    if (n < expenditureDepartments.length) {
        for( let i = n; i < expenditureDepartments.length; i++) {
            areasOfExpenditure.push({"department": expenditureDepartments[i], "spent": 0})
        }
    }
    return areasOfExpenditure;
}

export const getAreasOfReceiving = (splitArray, received) => {
    const receivedDepartments = ["Cashback", "Friends & Family", "Refunds", "Food Wallet"];
    let n = splitArray.length;
    let areasReceived = [];
    for( let i = 0; i < n; i++) {
        areasReceived.push({"department": receivedDepartments[i], "spent": (splitArray[i] / received).toPrecision(2)  * 100})
    }

    if (n < receivedDepartments.length) {
        for( let i = n; i < receivedDepartments.length; i++) {
            areasReceived.push({"department": receivedDepartments[i], "spent": 0})
        }
    }
    return areasReceived;
}

export const simulateSplit = (num, departments) => {
    let a = [], cnt = Math.floor((Math.random() * departments) + 1);
    for (let i=0; i<cnt; i++) {
        a.push(num /cnt );
    }
    return a;
}

export const getMonthName = (currMonthNum) => {
    const allMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return allMonths[currMonthNum];
}

export const getRandomStore = () => {
   const currency = "\u20B9";
   return {
        "storeName": faker.company.companyName(),
        "storeImage": faker.image.nightlife(150, 150),
        "currency": currency,
        "amount": faker.finance.amount()
        }
}