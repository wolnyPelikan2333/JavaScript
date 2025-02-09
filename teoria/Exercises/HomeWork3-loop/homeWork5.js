let counter = 0; //będzie zwiększany w pętli
let i = 1; //dla inicjalizacji pierwszej wartości, która wyniesie 1
 
while (i <= 50) {
  if (i % 3 === 0) {
    counter++;
  }
  i++;
}

console.log("Ilość liczb podzielnych przez 3 w zakresie od 1 do 50 wynosi:", counter);