(function () {
    'use strict';
    angular.module('Tombola.BingoCaller.NumberGenerator')
        .service('NumberGenerator', function () {

            this.shuffle = function (o) {
                var j, x, i = o.length;
                while (i) {
                    j = parseInt(Math.random() * i);
                    i--;
                    x = o[i];
                    o[i] = o[j];
                    o[j] = x;
                }
                return o;
            };
        });
})();