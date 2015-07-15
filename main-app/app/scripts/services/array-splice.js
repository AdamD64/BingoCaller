(function() {
    'use strict';
    angular.module('Tombola.BingoCaller.ArraySplice')
        .service('ArraySplice', [ 'NumberGen', function (NumberGen) {

            var numbers = [];
            console.log(numbers);

//            this.createArray30 = function() {
//                var numbers30 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
//                numbers.push.apply(numbers,numbers30);
//                console.log(numbers);
//            };

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