// read item
let theme = localStorage.getItem("theme");
console.log(theme);

// update item
localStorage.setItem("theme", "light");
console.log(theme);

// create item
localStorage.setItem("course", "Software Enginner");

// delete item
localStorage.removeItem("course");

let products = []; // Create a list(array)

// Objects
let iphone18 ={
    id: 1,
    name: "Iphone 18 Pro Max",
    preco: 20000
}

let notebook ={
    id: 2,
    name: "Lenovo slimpad",
    preco: 5000
}

// add in list
products.push(iphone18);
products.push(notebook);
console.table(products);


// transform list(array) in JSON
let productsText = JSON.stringify(products);
console.log(productsText);
// add in localStorage
localStorage.setItem("products", productsText);


// transform table of localStorage in object utilizing parse
console.log(`Read in Local Storage`);
products = JSON.parse(localStorage.getItem("products"));
// reading object

console.log(products);

