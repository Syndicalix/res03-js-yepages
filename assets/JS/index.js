import { User } from './classes/User.js';
import { Book } from './classes/Book.js';


window.addEventListener("DOMContentLoaded", function(){

    let book1 = new Book(0, "La reine des neiges", "Disney", 2012, 124, "Il était une fois...", "assets/img/image1.png");
    let book2 = new Book(1, "Le roi lion", "Disney", 2010, 138, "Il était une fois...", "assets/img/image2.png");
    let book3 = new Book(2, "La petite sirène", "Disney", 2008, 149, "Il était une fois...", "assets/img/image3.png");

    let user1 = new User(0, "Vincento", "vincent@gmail.com", 1234, "Vincent", "Ollivier", "assets/img/image4.png");
    let user2 = new User(1, "Natha", "nathanael@gmail.com", 2345, "Nathanaël", "Ollivier", "assets/img/image5.png");
    let user3 = new User(2, "Clem", "clementine@gmail.com", 3456, "Clémentine", "Ollivier", "assets/img/image6.png");

    let books = [book1, book2, book3];
    let users = [user1, user2, user3];
    
    console.log(books)
    
    // Sauvegarde du tableau books et du tableau users
    sessionStorage.setItem("booksBackup", JSON.stringify(books));
    sessionStorage.setItem("users", JSON.stringify(users));
    

    // Je recupère la sauvegarde et je parse le tableau
    let booksBackup = JSON.parse(sessionStorage.getItem("booksBackup"));


    // Je parse chaque élément du tableau
    let newBooksArray = [];
    for (let i=0; i<booksBackup.length; i++){
        let bookBackup = JSON.parse(booksBackup[i]);
        let book = new Book(bookBackup.id, bookBackup.title, bookBackup.author, bookBackup.publicationDate, bookBackup.totalPages, bookBackup.excerpt, bookBackup.coverImage);
        newBooksArray.push(book);
    }
    console.log(newBooksArray)
});