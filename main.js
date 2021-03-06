// Since the `data.js` file is loaded in your `index.html` before this one,
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it
console.log(data);



// 1: Show me how to calculate the average price of all items.
function question1 () {
  let sum = 0
  for (let i = 0; i < data.length; i++) {
    sum = sum + data[i].price
  }
  average= (sum/data.length).toFixed(2);
  console.log(average);
}



// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
function question2 () {
  let between = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].price >= 14.00 && data[i].price <= 18.00) {
      between.push(data[i].title);
    }
  }
  console.log(between);
}



// 3: Which item has a "GBP" currency code? Display it's name and price.
function question3 () {
  let currency = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].currency_code == "GBP"){
      currency.push(data[i].title);
      currency.push(data[i].price);
    }
  }
  console.log(currency);
}


// 4: Display a list of all items who are made of wood.


function question4 () {
  let tree = [];
  for (let i = 0; i < data.length; i++) {
    let materials = data[i].materials
    for (let j = 0; j < materials.length; j++) {
      if (materials[j] === "wood") {
        tree.push(data[i].title);
      }
    }
  }
  console.log(tree);
}w


// 5: Which items are made of eight or more materials?
//    Display the name, number of items and the items it is made of.
function question5 () {
  let multi = [];
  // let list = [];
  for (let i = 0; i < data.length; i++) {
    if(data[i].materials.length >= 8 ){

      
      multi.push(data[i].title + " (" + data[i].materials.length + ") " + data[i].materials.join(", ")  )
    }
  }
  console.log(multi);
}


// 6: How many items were made by their sellers?
// Answer:
function question6 () {
  let homemade = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].who_made == "i_did") {
      homemade.push(data[i].who_made);
    }
  }
  console.log(homemade.length);
}
