/// Analiza metody JSON.parse()

const json = '{"name":"Mango","age":3,"isHappy":true}';    // poprawny json

const mango = JSON.parse(json);          // zamienia json na tabelę
console.log(mango);                // wypisuje w konsoli całą tabelę
console.log(mango.name);                // wypisuje w konsoli tylko name z tabeli

/// Obsługa błędów

const jsonBad = `{"ten plik nie nadaje się do inportu"}`;     // niepoprawny json

try {
  const dane = JSON.parse(jsonBad);     // próbuje json na stałą
  console.log(dane);                           // wypisuje w konsoli stałą
} catch (error) {                                // wyłapuje błędy 
  console.error("Name: ", error.name);   // wypisuje w konsoli nazwę błędu
  console.error("Message: ", error.message);  // wypisuje w konsoli rodzaj błędu
}

console.log("Kod działa dalej poprawnie"); // sprawdzenie czy kod nadal działa poprawnie mimo erroru


// komentarz do pliku user.json
// "name", "eyecolor", "cars" są wartościami typu string
// "weight" i "age" to wartości typu number
// "isHappy" to wartość typu boolean
//  "cars" jest wartościa typu array, czyli tablicą
// "favoritBook" jest obiektem zawierającym dwa stringi i jeden number

// Formatu JSON, przybiera następując formę: 
// Obiekt jest nieuporządkowanym zbiorem par nazwa/wartość. 
// Opis obiektu rozpoczyna {lewa klamra a kończy }prawa klamra. 
// Po każdej nazwie następuje dwukropek ( : ) oraz pary nazwa/wartość, oddzielone przecinkiem ( , ).