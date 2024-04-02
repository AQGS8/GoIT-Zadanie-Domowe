const fruits = ["Jabłko", "Banan", "Pomarańcza", "Winogrona", "Arbuz"];
console.log(fruits);



const numbers = [1, 3, 8, 4, 6, 7, 9, 13, 35,];
const stala = 5;
for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] < stala) {
    continue;
  }
  console.log(`Liczba większa niż ${stala}: ${numbers[i]}`); 
}

