(function() {
    'use strict';
    angular.module('Tombola.BingoCaller.ArraySplice')
        .service('ArraySplice', [ 'NumberGen', function (NumberGen) {

            var numbers = [];
            console.log(numbers);

            this.createArray = function() {
                var numbers30 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
                numbers.push.apply(numbers,numbers30);
                console.log(numbers);
            };

            this.shuffleArray = function() {
                NumberGen.shuffle(numbers);
                console.log(numbers);
            };
        }]);
})();