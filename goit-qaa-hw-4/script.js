//////////ZADANIE 1

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const doubledNumber = numbers.map(number => 2*number)

// console.log(numbers)
// console.log(doubledNumber)


const doubleNumber = (numbers) => {
  return numbers.map((number) => number *2)
   }

const tab = [3, 5, 8, 13]

doubleNumber(tab);


console.log(`tablica początkowa to: `+tab)
console.log(`tablica podwojona to: `+(doubleNumber(tab)))


/////////ZADANIE 2


const students = [
    { name: "Grzegorz", lastName: 'Kmicic' },
    { name: "Jan", lastName: 'Wolodyjowski' },
    { name: "Stanisław", lastName: 'Radziwill' },
    { name: "Barbara", lastName: 'Soroka' },
    { name: "Zuza", lastName: 'Kiemlicz' },
    { name: "Krzysztof", lastName: 'Ranicki' },
  ];
  
  const names = students.map(student => student.name);

  console.log(students)
  console.log(names);