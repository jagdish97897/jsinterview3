function sumEvenNumbers(arr) {
    let sum = 0;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        sum += arr[i];
      }
    }
  
    return sum;
  }
  
  // Example usage:
  const numbers = [1, 2, 3, 4, 5, 6];
  const result = sumEvenNumbers(numbers);
  console.log(result); // This will print 12 because 2 + 4 + 6 = 12