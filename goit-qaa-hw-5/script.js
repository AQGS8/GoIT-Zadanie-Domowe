//////////ZADANIE 1

// słowo kluczowe this - umożliwia odwołanie się do konkretnego obiektu, w którym ma działać dana metoda. 
// Jeżeli funkcja nie jest metodą żadnego obiektu, wtedy w jej wnętrzu this będzie wskazywało na obiekt globalny

//Przykład pierwszy - użycie słowa this w metodzie do odniesie się do tego konkretnego obiektu.

const zwierze = {
  name : "kot",

  show() {
      console.log(this);
  }
}

zwierze.show();


// Przykład drugi - odniesienie się do globalnego obiektu 


function test() {
    console.log(this); 
}

test();

//////// Zastosowanie praktyczne

//////// Zadanie pierwsze

const maciej = {  // deklaracja stałej 
    username: "Maciej", // Ciąg znaków reprezentujący imię osoby
    showName() {                 // metoda zapisująca właściwości username w konsoli
      console.log(this.username);     // słowo this odnosi się do username
    },
  };
  
  maciej.showName();  // wywołanie metody showName w celu wypisania w konsoli danego użytkownika
  
//////// Zadanie drugie

const bookShelf = {
  authors: [],  // Pusta tablica do przechowywania imion autorów na półce z książkami 
  getAuthors () {  // Metoda zwracająca tablicę autorów przechowywanych na półce z książkami
    return this.authors  // słowo this odnosi się tylko do authors  
  },
  addAuthor(authorName) {  // Metoda, która przyjmuje imię autora jako argument i dodaje je do tablicy authors
  this.authors.push(authorName)  // słowo this, w tej metodzie addAuthor, odnosi sie konkretnie do tablicy authors w stałej bookShelf 
  },
  
}
bookShelf.addAuthor("Remigiusz Mróz");   // Dodawanie pięciu autorów do półki na książki za pomocą metody addAuthor
bookShelf.addAuthor("Harlan Coben");
bookShelf.addAuthor("Olga Tokarczuk");
bookShelf.addAuthor("Joseph Murphy");
bookShelf.addAuthor("Magda Knedler");


console.log(bookShelf.getAuthors())  // wypisanie autorów znajdujących się na półce z książkami za pomocą console.log