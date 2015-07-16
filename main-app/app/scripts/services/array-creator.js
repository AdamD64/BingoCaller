(function () {
    'use strict';
    angular.module('Tombola.BingoCaller.ArrayCreator')
        .service('ArrayCreator', function () {
            var numbers = [];

            this.resetArray = function () {
                numbers = [];
            };

            this.createCustomArray = function () {
                this.resetArray();
                var arrayLength = document.getElementById('arrayLength').value;
                for (var i = 0; i < arrayLength; i++) {
                    numbers.push(i + 1);
                }
                console.log(numbers);
            };

            this.shuffleArray = function () {
                numbers.sort(function () {
                    return Math.round(Math.random()) - 0.5;
                });
                console.log(numbers);
            };
        });
})();