(function() {
    'use strict';
    angular.module('Tombola.BingoCaller.ArraySplice')
        .service('ArraySplice', [ 'NumberGen', function (NumberGen) {

            var numbers = [];
            console.log(numbers);

            this.resetArray = function() {
                this.reset = numbers.splice(0,numbers.length);
                console.log(numbers);
            };

            this.createCustomArray = function() {
                var customArray = [];
                var arrayLength = document.getElementById('arrayLength').value;

                for (var i = 0; i < arrayLength; i++) {
                    customArray[i] = i + 1;
                }
                numbers.push.apply(numbers,customArray);
                console.log(numbers);
            };

            this.shuffleArray = function() {
                NumberGen.shuffle(numbers);
                console.log(numbers);
            };
        }]);
})();