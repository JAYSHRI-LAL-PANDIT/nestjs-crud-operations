import { Injectable } from "@nestjs/common";
import { Book } from "./data/book.dto";
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class BookService{
    public books :Book[]=[]

    //add book
    addBookService(book : Book) : String {
        // id auto generate
        book.id = uuidv4();
        this.books.push(book)
        return 'Book has been successfully added'
    }

    //update book
    updateBookService(book : Book) : String {
        let index = this.books.findIndex((currentBook)=> {
            return currentBook.id == book.id;
        })
        this.books[index] = book;
        return `Book has been successfully updated`;
    }
    //delete book
    deleteBookService(bookId : String) : String{
        this.books = this.books.filter((book)=>{
            return book.id != bookId
        })
        return "Book has been deleted"
    }
    //find all books
    findAllBooks() : Book[]{
        return this.books;
    }

}