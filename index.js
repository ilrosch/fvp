const arrNames = ['Иван', 'Мария', 'Алексей', 'Ольга', 'Сергей', 'Анна'];

arrNames.forEach((name) => console.log(`Привет, ${name}`));


const arrNumbers = [1, 2, 3, 4, 5];
const newArrNumbers = arrNumbers.map((num) => num * 10);
console.log(newArrNumbers);


const arrNumbers3 = [5, 12, 8, 130, 44];
const filtered = arrNumbers3.filter((num) => num > 10);
console.log(filtered);


const users = [{ name: 'Иван', age: 23 }, { name: 'Мария', age: 18 }, { name: 'Алексей', age: 32 }, { name: 'Ольга', age: 24 }, { name: 'Сергей', age: 17 }, { name: 'Анна', age: 21 }];

const newUsers = users
  .filter(({ age }) => age > 18)
  .map(({ name, age }) => `${name} (${age})`);
console.log(newUsers);


const products = [{ product: 'Телефон', price: 50000, quantity: 1 }, { product: 'Чехол', price: 1500, quantity: 2 }, { product: 'Зарядное устройство', price: 2500, quantity: 1 }];

const total = products.reduce((acc, { price, quantity }) => acc + price * quantity, 0);
console.log(`Общая стоимость продаж: ${total}`);