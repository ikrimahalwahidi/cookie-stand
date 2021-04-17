'use strict';

let storesArray = [];


let HourOpen = 6;
let HourClose = 8;

let seattle = new Store('seattle', 23, 65, 6.3);
let tokyo = new Store('tokyo', 3, 24, 1.2);
let dubai = new Store('dubai', 11, 38, 3.7);
let paris = new Store('paris', 20, 38, 2.3);
let lima = new Store('lima', 2, 16, 4.6);




let dailyHoursArray = [];
function hours() {
    for (let i = HourOpen; i < 12; i++) {
        dailyHoursArray.push(`${i}am`);
    }
    dailyHoursArray.push('12pm');
    for (let i = 1; i < HourClose; i++) {
        dailyHoursArray.push(`${i}pm`);
    }
}
hours();


function randomNumber(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
}




let totalCookiesPerHourArray = [];
for (let i = 0; i < dailyHoursArray.length; i++) {
    totalCookiesPerHourArray.push(0);
}

function Store(storeName, minCustomersHour, maxCustomersHour, avgCookieCustomer) {
    this.storeName = storeName;
    this.minCustomersHour = minCustomersHour;
    this.maxCustomersHour = maxCustomersHour;
    this.avgCookieCustomer = avgCookieCustomer;
    this.avgCookiesPerHour = this.avgCookiesHour;
    this.totalCookiesArray = [];
    this.sum = 0;
    storesArray.push(this);
}



Store.prototype.avgCookiesHour = function () {

    
    let totalCustomersArray = [];
    let randomCustomers = 0;
    for (let i = 0; i < dailyHoursArray.length; i++) {
        randomCustomers = randomNumber(this.minCustomersHour, this.maxCustomersHour);
        totalCustomersArray.push(randomCustomers);
    }

  
    let hourlyCookies = 0;

    for (let i = 0; i < dailyHoursArray.length; i++) {
        hourlyCookies = Math.round(totalCustomersArray[i] * this.avgCookieCustomer);
        this.totalCookiesArray.push(hourlyCookies);
    }

    
    this.sum = 0;
    for (let i = 0; i < dailyHoursArray.length; i++) {
        this.sum = this.sum + this.totalCookiesArray[i];
    }
   
};


let parent = document.getElementById('parent');

let table = document.createElement('table');
parent.appendChild(table);

function header() {
    let headingRow = document.createElement('tr');
    table.appendChild(headingRow);

    let headingData = document.createElement('th');
    headingRow.appendChild(headingData);

    for (let i = 0; i < dailyHoursArray.length; i++) {
        let headingData = document.createElement('th');
        headingRow.appendChild(headingData);
        headingData.textContent = dailyHoursArray[i];
    }
    let headingDataTotal = document.createElement('th');
    headingRow.appendChild(headingDataTotal);
    headingDataTotal.textContent = 'Daily Location Total';
}
header();



Store.prototype.render = function () {
    let dataRows = document.createElement('tr');
    table.appendChild(dataRows);

    let rowName = document.createElement('td');
    dataRows.appendChild(rowName);
    rowName.textContent = this.storeName;

    for (let i = 0; i < 14; i++) {
        let numbersRow = document.createElement('td');
        dataRows.appendChild(numbersRow);
        numbersRow.textContent = this.totalCookiesArray[i];
    }
    let rowTotal = document.createElement('td');
    dataRows.appendChild(rowTotal);
    rowTotal.textContent = this.sum;
};



let form = document.getElementById('form');

form.addEventListener('submit', submitter);

function submitter(event) {
    event.preventDefault();

    let storeName = event.target.storeName.value;
   
    let minCustomersHour = event.target.minCustomersHour.valueAsNumber;
    
    let maxCustomersHour = event.target.maxCustomersHour.valueAsNumber;
   
    let avgCookieCustomer = event.target.avgCookieCustomer.valueAsNumber;
   

    let newStore = new Store(storeName, minCustomersHour, maxCustomersHour, avgCookieCustomer);
  

    table.textContent = '';

    header();

    
    TotalofTotal = 0;
    for (let i = 0; i < storesArray.length; i++) {
        storesArray[i].avgCookiesHour();
        storesArray[i].render();
        
    }

    footer();
}

for (let i = 0; i < storesArray.length; i++) {
    storesArray[i].avgCookiesHour();
    storesArray[i].render();
}





let TotalofTotal = 0;
function footer() {
    let footerRow = document.createElement('tr');
    table.appendChild(footerRow);

    
    let footerList = document.createElement('th');
    footerRow.appendChild(footerList);
    footerList.textContent = 'Totals';

    for (let i = 0; i < dailyHoursArray.length; i++) {
        let totalCookies = 0;
        for (let j = 0; j < storesArray.length; j++) {
            totalCookies += storesArray[j].totalCookiesArray[i];
            TotalofTotal+= storesArray[j].totalCookiesArray[i];
        }
    

        let footerList = document.createElement('th');
        footerRow.appendChild(footerList);
        footerList.textContent = totalCookies;
    }

    let footerListTotal = document.createElement('th');
    footerRow.appendChild(footerListTotal);
    footerListTotal.textContent = TotalofTotal;
}
footer();




