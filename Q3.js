function sumAndLastDivisibleByThree(str) {
    const numbers = str.match(/\d+/g);
    let sum = 0;
    let lastDivisibleByThree = 0;
    if (numbers) {
      numbers.forEach(num => {
        const n = parseInt(num);
        if (n % 3 === 0) {
          sum += n;
          lastDivisibleByThree = n;
        }
      });
    }
    return { sum, lastDivisibleByThree };
  }
  
  // Example Usage
  const str = "The best 6 of 8 will get 9 points";
  console.log(sumAndLastDivisibleByThree(str));
  