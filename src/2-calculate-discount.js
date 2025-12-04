/* 
Analyze the following code. Identify the bug and fix it. Then, below, explain what the bug was using scope terminology.

<Your analysis goes here>

*/
const calculateDiscount = (price) => {
  // discountRate was being declared inside the scope of the if statements, and let and const variables are block scoped, so it was unreachable for the rest of the code
  let discountRate;

  if (price > 100) {
    discountRate = 0.1;
  } else {
    discountRate = 0.05;
  }

  const discount = price * discountRate;
  return price - discount;
}

console.log(calculateDiscount(150)); // This should print 135
