
"use strict"

const hours = ["6am ", '7am ', '8am', '9am', '10am', '11am', '12pm ', '1pm ', '2pm ', '3pm ', '4pm ', '5pm ', '6pm ', '7pm '];


function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
let stores = [];
function Cookie(name, min, max, avg) {
    this.name = name;
    this.min = min;
    this.max = max;
    this.avg = avg;

    this.total = 0;
    this.CustomerPerHour = [];
    this.Cookiesperhour = [];
    stores.push(this);

}
Cookie.prototype.calcCustomerPerHour = function () {
    for (let i = 0; i < hours.length; i++) {
        this.CustomerPerHour.push(random(this.min, this.max));

    }
}
Cookie.prototype.calcperhour = function () {
    for (let i = 0; i < hours.length; i++) {
        this.Cookiesperhour.push(Math.floor(this.CustomerPerHour[i] * this.avg));
        this.total += this.Cookiesperhour[i];


    }

}
const seattle = new Cookie('seattle', 23, 65, 6.3);


const Tokyo = new Cookie('Tokyo', 3, 24, 1.2);


const Dubai = new Cookie('Dubai', 11, 38, 3.7);


const Paris = new Cookie('Paris', 20, 38, 2.3);


const Lima = new Cookie('Lima', 2, 16, 4.6);



console.log('stores', stores);



let parent = document.getElementById('parent');
let table = document.createElement('table');
parent.appendChild(table);



function header() {

    let headingsRow = document.createElement('tr');

    table.appendChild(headingsRow);


    let ThElement = document.createElement('th');

    headingsRow.appendChild(ThElement);
    ThElement.textContent = 'Name';


    for (let j = 0; j < hours.length; j++) {

        let ThHours = document.createElement('th');
        headingsRow.appendChild(ThHours);
        ThHours.textContent = hours[j];


    }

    let lastTh = document.createElement('th');
    headingsRow.appendChild(lastTh);
    lastTh.textContent = "Daily Location Total";


}

Cookie.prototype.render = function () {
    let RowStore = document.createElement('tr');
    table.appendChild(RowStore);

    let TdName = document.createElement('td');
    RowStore.appendChild(TdName);
    TdName.textContent = this.name;


    for (let i = 0; i < hours.length; i++) {
        let tdElements = document.createElement('td');
        RowStore.appendChild(tdElements);
        tdElements.textContent = this.Cookiesperhour[i];
    }
    let TdTotal = document.createElement('td');

    RowStore.appendChild(TdTotal);

    TdTotal.textContent = this.total;

}


function footer() {
    let Rowoffooter = document.createElement('tr');
    table.appendChild(Rowoffooter);

    let Th = document.createElement('th');
    Rowoffooter.appendChild(Th)
    Th.textContent = 'Totals';

    let TotalTotal = 0;
    let totalPerHour;


    for (let i = 0; i < hours.length; i++) {
        totalPerHour = 0;
        for (let j = 0; j < stores.length; j++) {

            totalPerHour += stores[j].Cookiesperhour[i];
            TotalTotal += stores[j].Cookiesperhour[i];

        }
        console.log(totalPerHour);

        let footerTh = document.createElement('th');

        Rowoffooter.appendChild(footerTh);

        footerTh.textContent = totalPerHour;

    }

    let totalTh = document.createElement('th');

    Rowoffooter.appendChild(totalTh);


    totalTh.textContent = TotalTotal;

}

header();

for (let i = 0; i < stores.length; i++) {
    stores[i].calcCustomerPerHour();
    stores[i].calcperhour();

    stores[i].render();


}
footer();

