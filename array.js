
const products = [
  
    { name: 'Book', price: 350 },
    { name: 'Laptop', price: 60 },
    { name: 'Mouse', price: 200 },
    { name: 'Keyboard', price: 50 },
    { name: 'Clock', price:600  }
];

// console.log(products);

//length
// console.log(products.length);

// push
// let newArray = products.push({name: 'Mobile',price: 800});
// console.log(products);

// splice(insert)
// console.log(products.splice(1 ,0 , {name: 'Desktop' , price: 760})); 
// console.log(products);

// //splice(remove)
//  console.log(products.splice(3, 1)); 
// console.log(products);

// //slice
// console.log(products.slice(2, 4)); // 2 inclusive and 4 exclusive
 

//find
// console.log(products.find( item => item.price > 400 ));

/////   Chaining Example //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// console.log(products
//     .map(item => {
//     item.price = item.price / 2
//     return item ;
// })
// .filter(item => item.price >= 100)   

// .findIndex(item => item.price === 175)
// );
