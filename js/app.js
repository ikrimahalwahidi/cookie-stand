"use strict"

 let hours=["6am " ,'7am ','8am','9am','10am','11am','12pm ','1pm ','2pm ','3pm ','4pm ','5pm ','6pm ','7pm '];

//  seattle


let seattleCookies = {
    location: 'Seattle',
    min: 23,
    max: 65,
    averageCookieSale: 6.3,
    hourSales:[],
    daySales:0,

   randomCustomer :function () {

        let range=seattleCookies.max-seattleCookies.min;

         let randomCounter=Math.random() * range+seattleCookies.min;

         return Math.ceil(randomCounter);
      },

    hourDaySales :function () {

        for (let i=0;i<hours.length;i++){

            let numberOfCookies= Math.ceil(seattleCookies.randomCustomer() *seattleCookies.averageCookieSale);

            seattleCookies.hourSales.push(numberOfCookies);

            seattleCookies.daySales += numberOfCookies;
        }
        },
       
   render :function(){

       let container=document.getElementById('content-area');

       let h2 =document.createElement('h2');

       container.appendChild(h2);

       h2.textContent='Seattle';

       container.appendChild(h2);

       let list=document.createElement('ul');

       container.appendChild(list);

       for (let i=0;i<hours.length;i++){

        let listItem = document.createElement('li');

        listItem.textContent  =hours[i]+': '+seattleCookies.hourSales[i]+' cookies';

        list.appendChild(listItem);
       }
       let listItem = document.createElement('li');

        listItem.textContent  ='Total: '+seattleCookies.daySales+' cookies';

        list.appendChild(listItem);


   },
}


   seattleCookies.hourDaySales();
   seattleCookies.render();




//Tokyo

let tokyoCookies = {
    location: 'Tokyo',
    min: 3,
    max: 24,
    averageCookieSale: 1.2,
    hourSales:[],
    daySales:0,

   randomCustomer :function () {

        let range=tokyoCookies.max-tokyoCookies.min;

         let randomCount=Math.random() * range+tokyoCookies.min;

         return Math.ceil(randomCount);
      },

    hourDaySales :function () {

        for (let i=0;i<hours.length;i++){

            let numberOfCookies= Math.ceil(tokyoCookies.randomCustomer() *tokyoCookies.averageCookieSale);

            tokyoCookies.hourSales.push(numberOfCookies);
            
            tokyoCookies.daySales = numberOfCookies;
        }
        },
       
   render :function(){

       let container=document.getElementById('content-area');

       let h2 =document.createElement('h2');

       container.appendChild(h2);

       h2.textContent='Tokyo';

       container.appendChild(h2);

       let list=document.createElement('ul');

       container.appendChild(list);

       for (let i=0;i<hours.length;i++){

        let listItem = document.createElement('li');

        listItem.textContent  =hours[i]+': '+tokyoCookies.hourSales[i]+' cookies';

        list.appendChild(listItem);
       }
       let listItem = document.createElement('li');

        listItem.textContent  ='Total: '+tokyoCookies.daySales+' cookies';

        list.appendChild(listItem);


   },
}


tokyoCookies.hourDaySales();
tokyoCookies.render();
   

//Dubai

let dubaiCookies = {
    location: 'Dubai',
    min: 11,
    max: 38,
    averageCookieSale: 3.7,
    hourSales:[],
    daySales:0,

   randomCustomer :function () {

        let range=dubaiCookies.max-dubaiCookies.min;

        let randomCount=Math.random() * range+dubaiCookies.min;

         return Math.ceil(randomCount);
      },

    hourDaySales :function () {

        for (let i=0;i<hours.length;i++){

            let numberOfCookies= Math.ceil(this.randomCustomer() *this.averageCookieSale);

            dubaiCookies.hourSales.push(numberOfCookies);

            dubaiCookies.daySales += numberOfCookies;
        }
        },
       
   render :function(){
       
       let container=document.getElementById('content-area');


       let h2 =document.createElement('h2');

       container.appendChild(h2);

       h2.textContent='Dubai';

       container.appendChild(h2);

       let list=document.createElement('ul');

       container.appendChild(list);

       for (let i=0;i<hours.length;i++){

        let listItem = document.createElement('li');

        listItem.textContent  =hours[i]+': '+dubaiCookies.hourSales[i]+' cookies';

        list.appendChild(listItem);
       }
       let listItem = document.createElement('li');

        listItem.textContent  ='Total: '+dubaiCookies.daySales+' cookies';

        list.appendChild(listItem);


   },
}


dubaiCookies.hourDaySales();
dubaiCookies.render();




   //Paris

   let parisCookies = {
    location: 'Paris',
    min: 20,
    max: 38,
    averageCookieSale: 3.7,
    hourSales:[],
    daySales:0,

   randomCustomer :function () {

        let range=parisCookies.max-parisCookies.min;

         let randomCount=Math.random() * range+this.min;

         return Math.ceil(randomCount);
      },

    hourDaySales :function () {

        for (let i=0;i<hours.length;i++){

            let numberOfCookies= Math.ceil(parisCookies.randomCustomer() *parisCookies.averageCookieSale);

            parisCookies.hourSales.push(numberOfCookies);

            parisCookies.daySales += numberOfCookies;
        }
        },
       
   render :function(){

       let container=document.getElementById('content-area');

       let h2 =document.createElement('h2');

       container.appendChild(h2);

       h2.textContent='Paris';

       container.appendChild(h2);

       let list=document.createElement('ul');

       container.appendChild(list);

       for (let i=0;i<hours.length;i++){

        let listItem = document.createElement('li');

        listItem.textContent  =hours[i]+': '+parisCookies.hourSales[i]+' cookies';

        list.appendChild(listItem);
       }
       let listItem = document.createElement('li');

        listItem.textContent  ='Total: '+parisCookies.daySales+' cookies';

        list.appendChild(listItem);


   },
}


parisCookies.hourDaySales();
parisCookies.render();


 

   //Lima

   let limaCookies = {
    location: 'Lima',
    min: 2,
    max: 16,
    averageCookieSale: 4.6,
    hourSales:[],
    daySales:0,

   randomCustomer :function () {
        let range=parisCookies.max-this.min;
         let randomCount=Math.random() * range+limaCookies.min;
         return Math.ceil(randomCount);
      },

    hourDaySales :function () {

        for (let i=0;i<hours.length;i++){

            let numberOfCookies= Math.ceil(limaCookies.randomCustomer() *limaCookies.averageCookieSale);

            limaCookies.hourSales.push(numberOfCookies);

            limaCookies.daySales += numberOfCookies;
        }
        },
       
   render :function(){

       let container=document.getElementById('content-area');

       let h2 =document.createElement('h2');

       container.appendChild(h2);

       h2.textContent='Lima';

       container.appendChild(h2);

       let list=document.createElement('ul');

       container.appendChild(list);

       for (let i=0;i<hours.length;i++){

        let listItem = document.createElement('li');

        listItem.textContent  =hours[i]+': '+limaCookies.hourSales[i]+' cookies';

        list.appendChild(listItem);
       }
       let listItem = document.createElement('li');

        listItem.textContent  ='Total: '+limaCookies.daySales+' cookies';

        list.appendChild(listItem);


   },
}


limaCookies.hourDaySales();
limaCookies.render();
