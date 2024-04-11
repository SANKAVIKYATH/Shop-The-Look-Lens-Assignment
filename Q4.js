function findLastManStanding(n) {
    let people = [];
    for (let i = 1; i <= n; i++) {
      people.push(i);
    }
    let index = 0;
    while (people.length > 1) {
      index = (index + 1) % people.length; // Adjust index for the current length
      people.splice(index, 1); // Remove person at the adjusted index
    }
    return people[0];
  }
  
  // Example Usage
  console.log(findLastManStanding(100)); // Output should be 73
  