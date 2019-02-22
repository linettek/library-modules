var Library = function(){
  var books = [];
  
  var bookExists = function(bookObj) {
    
    //inputs: bookObj is the book object for which you are searching
    // check to see if the book exists in the library and return:
    // true (book exists) or false (book is not in the library)

    if (books.includes(bookObj)){
      console.log ("Book Exists");
    } //end if
    return (books.includes(bookObj));
  } //end bookExists

    //think about find:
    //for Linette only:books.find(function(bookObj){
    // do stuff here}}
  
  var listBooks = function() {
    //used for debugging
    //lists all the books in the library.

    for (var i = 0; i < books.length; i++) {
      console.log(books[i].getAttribute('title'));
    } //end for
  }; //end listBooks
  
  var addBook = function(newBookObj){
      //adds a new book to the library's private 'books' array.
      //input: newBookObj - book object you want to add
      books.push(newBookObj);
  }; //end addBook
  
  var checkOutBook = function(bookObj){
      //takes a book object as an argument and changes it's checkedOut
      //attribute to true, but ONLY if that book exists in the library.
      //Otherwise, just console log some kind of error.
      //input: bookObj - the book object you want to check out
  
      if (bookExists(bookObj)){
            bookObj.setAttribute('checkedOut', true);
      } //end if
        else {
          console.log ("Book not found--you cannot check it out.");
      } //end else
    }; //end checkOutBook
  
  var returnBook = function(bookObj){
      //takes a book object as an argument and changes it's checkedOut
      //attribute to false, but ONLY if that book exists in the library.
      //Otherwise, just console log some kind of error.
      //input: bookObj - the book object you want to return
  
      if (bookExists(bookObj)){
            bookObj.setAttribute('checkedOut', false);
      } //end if
      else {
        console.log ("This library does not own this book. Thus, it cannot be returned here.");
      } //end else
    }; //end returnBook
  
  return {
    listBooks: listBooks,
    addBook: addBook,
    checkOutBook: checkOutBook,
    returnBook: returnBook
  };
}; //end Library

  var Book = function(title, author){
  
    var attributes = {
      title: title,
      author: author,
      checkedOut: false
    };
  
    var getAttribute = function(attribute){
      //take one argument, the name of one of the book's attributes and return it,
      //but only if that attribute is a key on the Book module's attributes
      //object
      //Input: attribute - the attribute that you want to see the value of
      //Output: the value of the attribute passed in

      if (attributes.hasOwnProperty(attribute)) {
        return attributes[attribute];
      } //end if
    }; //end getAttribute
    
    var setAttribute = function(attribute, value){
      //take one argument, the name of one of the book's attributes
      //and set it on the book's attributes object
      //but only if that attribute is a key on the Book module's attributes
      //object.
      //Inputs: attribute - the attribute that you want to set
      //        value - the value of the attribute you want to set
      //Output: none
      
      if (attributes.hasOwnProperty(attribute)) {
        attributes[attribute] = value;
        
      } //end if
    }; //end setAttribute
  
    return {
      getAttribute: getAttribute,
      setAttribute: setAttribute,
    };
  }; //end Book
  
  var library = Library();
  var Book1=Book('Title1', 'Author One', 'false');                                                                                                                                                                                                                                                                                                                                                                       Book1=Book('Title1', 'Author One', 'false');
  var Book2=Book('Title2', 'Author Two', 'false');
  
  library.addBook(Book1);
  library.listBooks();
  console.log("====");
  library.addBook(Book2);
  library.listBooks();
  

console.log("Book1 Author: ", Book1.getAttribute('author')); 
console.log("Book2 Author: ", Book2.getAttribute('author'));