define("book", [], function () {
    var book = function (name) {
        this.name = name;
        this.author = '';
        this.price = undefined;
    }
    book.prototype.name = function (name) {
        if (typeof name != "undefined") {
            this.name = name;
        }
        return this.name;
    };
    book.prototype.author = function (author) {
        if (typeof author != "undefined") {
            this.author = author;
        }
        return this.author;
    };
    book.prototype.price = function (price) {
        if (typeof price != "undefined") {
            this.price = price;
        }
        return this.price;
    };
    return book;
})


define("bookrack", ["book"], function (book) {
    var bookrack = function (type) {
        this.type = type;
        this.allBooks = [];
    }
    bookrack.prototype.type = function (type) {
        if (typeof type != "undefined") {
            this.type = type;
        }
        return this.type;
    };
    bookrack.prototype.addBook = function (book) {
        this.allBooks.push(book);
    }
    bookrack.prototype.searchBook = function (book) {
    }
    bookrack.prototype.deleteBook = function (book) {
    }
    return bookrack;
})

define("bookstore", ["bookrack", "book"], function (bookrack,book) {
    var  myglobal=''
    var clsfotory = function (name) {

        var  mymember=''
        var bookstore = function (name) {
            this.name = name;
            this.allBookracks = {};
        }
        bookstore.prototype.name = function (name) {
            if (typeof name != "undefined") {
                this.name = name;
            }
            return this.name;
        }
        bookstore.prototype.addbookRack = function (bookrack) {
            this.allBookracks[bookrack.type] = bookrack;
        }
        bookstore.prototype.addBook = function (book, bookrackName) {
        }
        return  new  bookstore(name)
    }
    return clsfotory;
    
})

//simple  inherit 
define('bookstoreson',['bookstore'],function(dad){
    var son=dad()
    son.addbookRack = function (bookrack) {
     dad.prototype.addbookRack.call(this,bookrack)
     ////
    }
    son.hello=function(){}
    return son;


})