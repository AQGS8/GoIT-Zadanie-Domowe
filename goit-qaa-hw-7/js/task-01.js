const categories = document.querySelectorAll(`#categories .item`)  // Zliczanie kategorii.

console.log(`Number of categories: ` + categories.length) // wypisuje liczbę kategorii w konsoli
console.log(" ")        // Wstawia pustą linijkę w konsoli, żeby wyglądała tak samo jak oczekiwane rezultaty.

categories.forEach(category => {   // pętka powtarzająca sie dla każdej kategorii. 
    const categoryName = category.querySelector('h2').textContent  // wyciąga nazwę kategorii 
    console.log(categoryName)  // Wypisuje nazwę kategori.
    console.log("Elements: " + category.querySelectorAll("li").length)  // Zlicza i wypisuje elementy w danej kategorii 
    console.log(" ")  // Wstawia pustą linijkę w konsoli, żeby wyglądała tak samo jak oczekiwane rezultaty.
})



