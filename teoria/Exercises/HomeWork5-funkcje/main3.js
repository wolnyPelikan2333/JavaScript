    const countOccurrences = function(array, element) {
      let count = 0;
     
      for (let i = 0; i < array.length; i++) {
        if (array[i] === element) {
          count++;
        }
      }
     
      return count;
    }
     
    console.log(countOccurrences(["apple", "banana", "apple", "orange", "banana"], "banana")); // zwraca 2


