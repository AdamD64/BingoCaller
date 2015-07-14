(function () {
    'use strict';
    angular.module('Tombola.BingoCaller')
        .controller('bingoCallerController', ['$scope','NumberGen', 'ArraySplice', function ($scope, NumberGen, ArraySplice) {

            $scope.ArraySplice = ArraySplice;
            $scope.NumberGen = NumberGen;

            $scope.createArray = function () {
                $scope.ArraySplice.createArray();
            };

            $scope.shuffleArray = function () {
                $scope.ArraySplice.shuffleArray();
            };
        }]);
})();