function fibonacci(num) {
// your code here
	// const fibonacci = num => {
  let a = 0, b = 1, c = num;
  
  for(let i = 2; i <= num; i++) {
    c = a + b;
    a = b;
    b = c;
  }
  
  console.log(c);
};


module.exports = fibonacci;
