const fs = require('fs');

// books.json Reader
fs.readFile('books.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Faylni o\'qishda xatolik yuz berdi:', err);
        return;
    }
    
    // JSON formatidagi ma'lumotlar
    const books = JSON.parse(data);

    // Qidirish funksiyasi
    function findBookById(id) {
        for (const book of books) {
            if (book.id === id) {
                return book;
            }
        }
        return null;
    }

    const searchedBook = findBookById(2); // Search ID
    if (searchedBook) {
        console.log(searchedBook);
    } else {
        console.log('Ma`lumot topilmadi');
    }
});
