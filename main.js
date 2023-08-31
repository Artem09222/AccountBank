//   const { name, price, quantity } = products;
//   console.log(name, price, quantity);

// Task 1
const user = {
   namees: 'Artem',
   age: 14,
   hobby: 'Js',
   premium: true,
};

user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = false;

const keys = Object.keys(user);

for (let key of keys) {
   console.log(`${key}: ${user[key]}`);
}

let {namees, age, hobby, premium} = user;
console.log(namees, age, hobby, premium);
// Task 2
const countProps = function (obj) {
   const keys = Object.keys(obj);
   return keys.length;
};

let myObj = {
    names: 'Ajax',
    ages: 4,
    gmail: 'temka@gmail.com',
    previuw: true,
    score: 700,
}

let objOfFunc = countProps(myObj)
console.log(objOfFunc);
let {names, ages, gmail, previuw, score} = myObj;
console.log(names, ages, gmail);


// console.log(countProps({}));
// console.log(countProps({ names: 'Ajax', ages: 4 }));

// console.log(countProps({ gmail: 'temka@gmail.com', previuw: true, score: 700 }));


// Task 3
let employee = {
   artem: 29,
   kiril: 35,
   elena: 1,
   egorka: 99,
}

const findBestEmployee = function (employees) {
const keys = Object.keys(employees);
let maxResult = employees[keys[0]];
let bestEmployee = keys[0];

for (let key of keys) {
   if (employees[key] > maxResult) {
      maxResult = employees[key];
      bestEmployee = key;
   }
}
  return bestEmployee;
};
let find = findBestEmployee(employee);
console.log(find);
let {artem, egorka, kiril, elena = 10, natasha = 101} = employee;
console.log(artem, natasha, egorka);

// console.log(
//   findBestEmployee({
//     artem: 29,
//     kiril: 35,
//     elena: 1,
//     egorka: 99,
//   }),
// );

// console.log(
//   findBestEmployee({
//     poly: 12,
//     alex: 17,
//     anya: 4,
//   }),
// );

// console.log(
//   findBestEmployee({
//     egor: 147,
//     alina: 21,
//     raya: 19,
//     dasha: 38,
// }),
// );

// Task 4
let total = {
   mango: 100,
   poly: 150,
   ajax: 80,
}

const countTotalSalary = function (employees) {
  const values = Object.values(employees);
  console.log(values);

  let totalSalary = 0;

  for (let value of values) {
   totalSalary += value;
}
  return totalSalary;
};
let count = countTotalSalary(total)
console.log(count);
const {mango, poly, ajax, ananac = 99} = total;
console.log(mango, ananac, poly);

// console.log(
//   countTotalSalary({
//     mango: 100,
//     poly: 150,
//     ajax: 80,
//   }),
// );

// console.log(
//   countTotalSalary({
//     plane: 200,
//     navigator: 50,
//     ball: 150,
//   }),
// );

// Task 5
const products = [
   { name: "Літак", price: 1300, quantity: 3 },
   { name: "Сканер", price: 2700, quantity: 1 },
   { name: "Андройд", price: 400, quantity: 7 },
   { name: "Дрон", price: 1200, quantity: 2 }
];

const getAllPropValues = function (arr, prop) {
  const items = [];

for (let product of arr) {
   if (product[prop] === undefined) {
         break;
   }

   items.push(product[prop]);
}
  return items;
};

console.log(getAllPropValues(products, 'name'));
console.log(getAllPropValues(products, 'quantity'));
console.log(getAllPropValues(products, 'price'));

// // Task 6
const productsa = [
   { name: "Літак", price: 1300, quantity: 3 },
   { name: "Сканер", price: 2700, quantity: 1 },
   { name: "Андройд", price: 400, quantity: 7 },
   { name: "Дрон", price: 1200, quantity: 2 }
];

const calculateTotalPrice = function (allProducts, productName) {
  let totalPrice = 0;

for (let product of allProducts) {
  if (productName === product.name) {
   totalPrice = product.price * product.quantity;
  }
}

   return totalPrice;
};

console.log(calculateTotalPrice(productsa, 'Сканер'));

console.log(calculateTotalPrice(productsa, 'Літак'));

// account
const account = {
   balance: 1000,
   transactionHistory: [],

   deposit(amount) {
       if (amount > 0) {
           this.balance += amount;
           this.transactionHistory.push(`Зараховано: ${amount}`);
           return `Зараховано ${amount} одиниць на рахунок.`;
       } else {
           return "Некоректна сума для поповнення.";
       }
   },

   withdraw(amount) {
       if (0 < amount && amount <= this.balance) {
           this.balance -= amount;
           this.transactionHistory.push(`Вилучено: ${amount}`);
           return `Вилучено ${amount} одиниць з рахунку.`;
       } else {
           return "Недостатньо коштів або некоректна сума для вилучення.";
       }
   },

   getBalance() {
       return `Поточний баланс: ${this.balance}`;
   },

   getTransactionHistory() {
       return this.transactionHistory;
   }
};

console.log(account.getBalance());
console.log(account.deposit(500));
console.log(account.withdraw(200));
console.log(account.getBalance());
console.log(account.withdraw(1500));
console.log(account.getTransactionHistory());