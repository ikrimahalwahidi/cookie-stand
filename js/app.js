"use strict"

const hours = ["6am ", '7am ', '8am', '9am', '10am', '11am', '12pm ', '1pm ', '2pm ', '3pm ', '4pm ', '5pm ', '6pm ', '7pm '];


function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(hours);

const seattle = {
    locationName: 'seattle',
    minCustomer: 23,
    maxCustomer: 65,
    avgCookies: 6.3,
    customerperHours: [],
    cookiesperHours: [],
    total: 0,

    calcCustomerPerHours: function () {
        for (let i = 0; i < hours.length ; i++ ) {

            this.customerperHours.push(random(this.minCustomer, this.maxCustomer));

        }

    },
    calccookiesperHours: function () {
        for (let i = 0; i < hours.length; i++) {

            this.cookiesperHours.push(Math.floor(this.customerperHours[i] * this.avgCookies));
            this.total += this.cookiesperHours[i];
        }

           console.log(this.cookiesperHours);
    },

    render: function () {

        let parent = document.getElementById('parent');

        console.log(parent);

        let nameElement = document.createElement('h2');

        parent.appendChild(nameElement);

        nameElement.textContent = this.locationName;

        let ulElement = document.createElement('ul');

        parent.appendChild(ulElement);

        for (let i = 0; i < hours.length; i++) {

            let liElement = document.createElement('li');

            ulElement.appendChild(liElement);

            liElement.textContent = `${hours[i]}: ${this.cookiesperHours[i]} cookies`

        }
        let totalLi = document.createElement('li');

        ulElement.appendChild(totalLi);
        totalLi.textContent = `Total: ${this.total} cookies`

    }
}

seattle.calcCustomerPerHours();
seattle.calccookiesperHours();
seattle.render();
console.log(seattle);









const Tokyo = {
    locationName: 'Tokyo',
    minCustomer: 3,
    maxCustomer: 24,
    avgCookies: 1.2,
    customerperHours: [],
    cookiesperHours: [],
    total: 0,

    calcCustomerPerHours: function () {
        for (let i = 0; i < hours.length ; i++ ) {

            this.customerperHours.push(random(this.minCustomer, this.maxCustomer));

        }

    },
    calccookiesperHours: function () {
        for (let i = 0; i < hours.length; i++) {

            this.cookiesperHours.push(Math.floor(this.customerperHours[i] * this.avgCookies));
            this.total += this.cookiesperHours[i];
        }

           console.log(this.cookiesperHours);
    },

    render: function () {

        let parent = document.getElementById('parent');

        console.log(parent);

        let nameElement = document.createElement('h2');

        parent.appendChild(nameElement);

        nameElement.textContent = this.locationName;

        let ulElement = document.createElement('ul');

        parent.appendChild(ulElement);

        for (let i = 0; i < hours.length; i++) {

            let liElement = document.createElement('li');

            ulElement.appendChild(liElement);

            liElement.textContent = `${hours[i]}: ${this.cookiesperHours[i]} cookies`

        }
        let totalLi = document.createElement('li');

        ulElement.appendChild(totalLi);
        totalLi.textContent = `Total: ${this.total} cookies`

    }
}

Tokyo.calcCustomerPerHours();
Tokyo.calccookiesperHours();
Tokyo.render();
console.log(Tokyo);










const Dubai = {
    locationName: 'Dubai',
    minCustomer: 11,
    maxCustomer: 38,
    avgCookies: 3.7,
    customerperHours: [],
    cookiesperHours: [],
    total: 0,

    calcCustomerPerHours: function () {
        for (let i = 0; i < hours.length ; i++ ) {

            this.customerperHours.push(random(this.minCustomer, this.maxCustomer));

        }

    },
    calccookiesperHours: function () {
        for (let i = 0; i < hours.length; i++) {

            this.cookiesperHours.push(Math.floor(this.customerperHours[i] * this.avgCookies));
            this.total += this.cookiesperHours[i];
        }

           console.log(this.cookiesperHours);
    },

    render: function () {

        let parent = document.getElementById('parent');

        console.log(parent);

        let nameElement = document.createElement('h2');

        parent.appendChild(nameElement);

        nameElement.textContent = this.locationName;

        let ulElement = document.createElement('ul');

        parent.appendChild(ulElement);

        for (let i = 0; i < hours.length; i++) {

            let liElement = document.createElement('li');

            ulElement.appendChild(liElement);

            liElement.textContent = `${hours[i]}: ${this.cookiesperHours[i]} cookies`

        }
        let totalLi = document.createElement('li');

        ulElement.appendChild(totalLi);
        totalLi.textContent = `Total: ${this.total} cookies`

    }
}

Dubai.calcCustomerPerHours();
Dubai.calccookiesperHours();
Dubai.render();
console.log(Dubai);











const Paris = {
    locationName: 'Paris',
    minCustomer: 20,
    maxCustomer: 38,
    avgCookies: 2.3,
    customerperHours: [],
    cookiesperHours: [],
    total: 0,

    calcCustomerPerHours: function () {
        for (let i = 0; i < hours.length ; i++ ) {

            this.customerperHours.push(random(this.minCustomer, this.maxCustomer));

        }

    },
    calccookiesperHours: function () {
        for (let i = 0; i < hours.length; i++) {

            this.cookiesperHours.push(Math.floor(this.customerperHours[i] * this.avgCookies));
            this.total += this.cookiesperHours[i];
        }

           console.log(this.cookiesperHours);
    },

    render: function () {

        let parent = document.getElementById('parent');

        console.log(parent);

        let nameElement = document.createElement('h2');

        parent.appendChild(nameElement);

        nameElement.textContent = this.locationName;

        let ulElement = document.createElement('ul');

        parent.appendChild(ulElement);

        for (let i = 0; i < hours.length; i++) {

            let liElement = document.createElement('li');

            ulElement.appendChild(liElement);

            liElement.textContent = `${hours[i]}: ${this.cookiesperHours[i]} cookies`

        }
        let totalLi = document.createElement('li');

        ulElement.appendChild(totalLi);
        totalLi.textContent = `Total: ${this.total} cookies`

    }
}

Paris.calcCustomerPerHours();
Paris.calccookiesperHours();
Paris.render();
console.log(Paris);










const Lima = {
    locationName: 'Lima',
    minCustomer: 2,
    maxCustomer: 16,
    avgCookies: 4.6,
    customerperHours: [],
    cookiesperHours: [],
    total: 0,

    calcCustomerPerHours: function () {
        for (let i = 0; i < hours.length ; i++ ) {

            this.customerperHours.push(random(this.minCustomer, this.maxCustomer));

        }

    },
    calccookiesperHours: function () {
        for (let i = 0; i < hours.length; i++) {

            this.cookiesperHours.push(Math.floor(this.customerperHours[i] * this.avgCookies));
            this.total += this.cookiesperHours[i];
        }

           console.log(this.cookiesperHours);
    },

    render: function () {

        let parent = document.getElementById('parent');

        console.log(parent);

        let nameElement = document.createElement('h2');

        parent.appendChild(nameElement);

        nameElement.textContent = this.locationName;

        let ulElement = document.createElement('ul');

        parent.appendChild(ulElement);

        for (let i = 0; i < hours.length; i++) {

            let liElement = document.createElement('li');

            ulElement.appendChild(liElement);

            liElement.textContent = `${hours[i]}: ${this.cookiesperHours[i]} cookies`

        }
        let totalLi = document.createElement('li');

        ulElement.appendChild(totalLi);
        totalLi.textContent = `Total: ${this.total} cookies`

    }
}

Lima.calcCustomerPerHours();
Lima.calccookiesperHours();
Lima.render();
console.log(Lima);