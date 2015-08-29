/*jslint nomen: true*/
/*global _, console */

/* 
Create a function that:
*   Takes an array of students
    *   Each student has a `firstName` and `lastName` properties
*   **Finds** all students whose `firstName` is before their `lastName` alphabetically
*   Then **sorts** them in descending order by fullname
    *   fullname is the concatenation of `firstName`, ' ' (empty space) and `lastName`
*   Then **prints** the fullname of founded students to the console
*   **Use underscore.js for all operations**
*/

function solve() {
    'use strict';

    return function (students) {

        //var studentsWithFirstNameBeforeLast = _.filter(students, function (student) {
        //    return student.firstName < student.lastName;
        //});

        //for (var i = 0, len = studentsWithFirstNameBeforeLast.length; i < len; i += 1) {
        //    studentsWithFirstNameBeforeLast[i].fullName =
        //        studentsWithFirstNameBeforeLast[i].firstName
        //        + ' '
        //        + studentsWithFirstNameBeforeLast[i].lastName;
        //}

        //var studentsSortedByFullnameAscendingOrder = _.sortBy(studentsWithFirstNameBeforeLast, 'fullName');

        //var studentsSortedByFullnameDescendingOrder = studentsSortedByFullnameAscendingOrder.reverse();

        //_.each(studentsSortedByFullnameDescendingOrder, function (item) {
        //    console.log(item.fullName);
        //});

        //===============================================================

        _(students)
            .chain()
            .filter(function (student) {
                return student.firstName < student.lastName;
            })
            .map(function (student) {
                return {
                    fullName: student.firstName + ' ' + student.lastName
                };
            })
            .sortBy('fullName')
            .reverse()
            .each(function (student) {
                console.log(student.fullName);
            });
    };
}

module.exports = solve;