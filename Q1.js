class WhiteBox {
    constructor(top, left, height, width) {
      this.top = top;
      this.left = left;
      this.height = height;
      this.width = width;
    }
  }
  
  function findWhiteBox(matrix) {
    let top = -1,
      left = -1,
      height = 0,
      width = 0;
  
    // Finding the top-left corner
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) {
        if (matrix[i][j] === 'w') {
          top = i;
          left = j;
          break;
        }
      }
      if (top !== -1) break;
    }
  
    // Determining Width and Height
    if (top !== -1) {
      let currentHeight = 0;
      for (let i = top; i < matrix.length; i++) {
        if (matrix[i][left] === 'w') currentHeight++;
        else break;
      }
      let currentWidth = 0;
      for (let j = left; j < matrix[top].length; j++) {
        if (matrix[top][j] === 'w') currentWidth++;
        else break;
      }
  
      // Check if the current width and height are consistent within the box
      for (let i = top; i < top + currentHeight; i++) {
        for (let j = left; j < left + currentWidth; j++) {
          if (matrix[i][j] !== 'w') {
            return null; // Not a consistent white box
          }
        }
      }
  
      height = currentHeight;
      width = currentWidth;
    }
  
    return new WhiteBox(top, left, height, width);
  }
  
  // Example Usage
  const matrix = [
    ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'],
    ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'],
    ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'],
    ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'],
    ['b', 'b', 'b', 'b', 'w', 'w', 'w', 'w', 'w', 'b', 'b', 'b'],
    ['b', 'b', 'b', 'b', 'w', 'w', 'w', 'w', 'w', 'b', 'b', 'b'],
    ['b', 'b', 'b', 'b', 'w', 'w', 'w', 'w', 'w', 'b', 'b', 'b'],
    ['b', 'b', 'b', 'b', 'w', 'w', 'w', 'w', 'w', 'b', 'b', 'b'],
    ['b', 'b', 'b', 'b', 'w', 'w', 'w', 'w', 'w', 'b', 'b', 'b'],
    ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'],
    ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'],
    ['b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b']
  ];
  
  const whiteBox = findWhiteBox(matrix);
  console.log(whiteBox);
  