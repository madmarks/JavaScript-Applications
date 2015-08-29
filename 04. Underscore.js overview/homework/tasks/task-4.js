/*jslint nomen: true*/
/*global _, console */

/* 
Create a function that:
*   **Takes** an array of animals
    *   Each animal has propeties `name`, `species` and `legsCount`
*   **groups** the animals by `species`
    *   the groups are sorted by `species` descending
*   **sorts** them ascending by `legsCount`
    *   if two animals have the same number of legs sort them by name
*   **prints** them to the console in the format:

```
    ----------- (number of dashes is equal to the length of the GROUP_1_NAME + 1)
    GROUP_1_NAME:
    ----------- (number of dashes is equal to the length of the GROUP_1_NAME + 1)
    NAME has LEGS_COUNT legs //for the first animal in group 1
    NAME has LEGS_COUNT legs //for the second animal in group 1
    ----------- (number of dashes is equal to the length of the GROUP_2_NAME + 1)
    GROUP_2_NAME:
    ----------- (number of dashes is equal to the length of the GROUP_2_NAME + 1)
    NAME has LEGS_COUNT legs //for the first animal in the group 2
    NAME has LEGS_COUNT legs //for the second animal in the group 2
    NAME has LEGS_COUNT legs //for the third animal in the group 2
    NAME has LEGS_COUNT legs //for the fourth animal in the group 2
```
*   **Use underscore.js for all operations**
*/

function solve() {
    'use strict';

    return function (animals) {
        _.mixin({
            repeat: function (str, number) {
                return _(_.range(number))
                    .chain()
                    .map(function () {
                        return str;
                    })
                    .reduce(function (accumulator, item) {
                        return accumulator + item;
                    }, '')
                    .value();
            }
        });

        _(animals)
            .chain()
            .groupBy('species')
            .sortBy('species')
            .reverse()
            .map(function (groupOfAnimals) {
                return _(groupOfAnimals)
                    .chain()
                    .sortBy('name')
                    .sortBy('legsCount')
                    .value();
            })
            .each(function (groupOfAnimals) {
                var delimiter = _('-').repeat(groupOfAnimals[0].species.length + 1);

                console.log(delimiter);
                console.log(groupOfAnimals[0].species + ':');
                console.log(delimiter);

                _(groupOfAnimals)
                    .each(function (animal) {
                        console.log(animal.name + ' has ' + animal.legsCount + ' legs');
                    });
            });
    };
}

module.exports = solve;
