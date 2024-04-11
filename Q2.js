function divideArray(arr) {
    const result = [];
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i + 1] === 0) {
        result.push("Error: Division by zero");
        continue;
      }
      result.push(arr[i] / arr[i + 1]);
    }
    if (arr[0] === 0) {
      result.push("Error: Division by zero");
    } else {
      result.push(arr[arr.length - 1] / arr[0]);
    }
    return result;
  }
  
  // Example Usage
  const array = [9, 33, 0, 7, 2, 82, 77];
  //const array = [8, 23, 10, 17, 92, 0, 39];
  console.log(divideArray(array));
  
