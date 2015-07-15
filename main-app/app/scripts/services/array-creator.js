(function () {
    'use strict';
    angular.module('Tombola.BingoCaller.ArrayCreator')
        .service('ArrayCreator', [ 'NumberGenerator', function (numberGenerator) {

            var numbers = [];

            this.resetArray = function () {
                numbers = [];
            };

            this.createCustomArray = function () {
                this.resetArray();
                var arrayLength = document.getElementById('arrayLength').value;
                for (var i = 0; i < arrayLength; i++) {
                    numbers.push( i + 1 );
                }
                console.log(numbers);
            };

            this.shuffleArray = function () {
                numbers = numberGenerator.shuffle(numbers);
                console.log(numbers);
            };
        }]);
})();