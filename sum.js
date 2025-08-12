// Takes two numbers from user and returns their sum
function sumFromUser() {
    const num1 = parseFloat(prompt("Enter first number:"));
    const num2 = parseFloat(prompt("Enter second number:"));
    return num1 + num2;
}

const result = sumFromUser();
console.log("The sum is:", result);
export default sumFromUser;
