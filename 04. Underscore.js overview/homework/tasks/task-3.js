/*jslint nomen: true*/
/*global _, console */

/* 
Create a function that:
*   Takes an array of students
    *   Each student has:
        *   `firstName`, `lastName`, `age` and `marks` properties
        *   `marks` is an array of decimal numbers representing the marks         
*   **finds** the student with highest average mark (there will be only one)
*   **prints** to the console  'FOUND_STUDENT_FULLNAME has an average score of MARK_OF_THE_STUDENT'
    *   fullname is the concatenation of `firstName`, ' ' (empty space) and `lastName`
*   **Use underscore.js for all operations**
*/

function solve() {
    'use strict';

    return function (students) {

        _(students)
            .chain()
            .map(function (student) {
                var sum = _.reduce(student.marks, function (memo, value) {
                    return memo + value;
                }, 0);

                return {
                    fullName: student.firstName + ' ' + student.lastName,
                    averageMark: sum / student.marks.length
                };
            })
            //.sortBy('averageMark')
            //.last()
            .max(function(student) {
                return student.averageMark;
            })
            .tap(function (bestStudent) {
                console.log(bestStudent.fullName + ' has an average score of ' + bestStudent.averageMark);
            });
    };
}

module.exports = solve;
