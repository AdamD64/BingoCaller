(function () {
    'use strict';
    angular.module('Tombola.BingoCaller')
        .controller('bingoCallerController',
        ['$scope', 'NumberGen', 'ArraySplice', function ($scope, NumberGen, ArraySplice) {

            $scope.ArraySplice = ArraySplice;
            $scope.NumberGen = NumberGen;

            $scope.createCustomArray = function () {
                $scope.ArraySplice.createCustomArray();
            };
            $scope.shuffleArray = function () {
                $scope.ArraySplice.shuffleArray();
            };
            $scope.resetArray = function () {
                $scope.ArraySplice.resetArray();
            };
        }]);
})();