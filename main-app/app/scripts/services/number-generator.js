(function() {
    'use strict';
    angular.module('Tombola.BingoCaller.NumberGen')
        .service('NumberGen', function () {

            var numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
//            var min = 1,
//                max = 10;

//            function getRandom() {
//                for (var i = 0; i < 10; i++) {
//                    var random = (Math.floor(Math.random() * (max - min))) + min;
//                    console.log(random);
//                }}
//
//            getRandom();

            function shuffle(o) {
                var j, x, i = o.length;
                while (i) {
                    j = parseInt(Math.random() * i);
                        i--;
                        x = o[i];
                        o[i] = o[j];
                        o[j] = x;
                }
                return o;
            }

            console.log(shuffle(numbers));

        });
})();