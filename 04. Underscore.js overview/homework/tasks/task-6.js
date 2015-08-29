/*jslint nomen: true*/
/*global _, console */

/* 
Create a function that:
*   **Takes** a collection of books
    *   Each book has propeties `title` and `author`
        **  `author` is an object that has properties `firstName` and `lastName`
*   **finds** the most popular author (the author with biggest number of books)
*   **prints** the author to the console
    *   if there is more than one author print them all sorted in ascending order by fullname
        *   fullname is the concatenation of `firstName`, ' ' (empty space) and `lastName`
*   **Use underscore.js for all operations**
*/

function solve() {
    'use strict';

    return function (books) {

        var maxNumberOfBooks;

        _(books)
            .chain()
            .groupBy(function (book) {
                return book.author.firstName + ' ' + book.author.lastName;
            })
            .map(function (books, author) {
                return {
                    'author': author,
                    'numberOfBooks': books.length
                };
            })
            .sortBy('numberOfBooks')
            .tap(function (groupsByAuthor) {
                maxNumberOfBooks = _(groupsByAuthor).last().numberOfBooks;
            })
            .filter(function (object) {
                return object.numberOfBooks === maxNumberOfBooks;
            })
            .sortBy('author')
            .each(function (object) {
                console.log(object.author);
            });
    };
}

module.exports = solve;
