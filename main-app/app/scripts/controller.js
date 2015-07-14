(function () {
    'use strict';
    angular.module('Tombola.BingoCaller')
        .controller('bingoCallerController', ['$scope','NumberGen', 'ArraySplice', function ($scope, NumberGen, ArraySplice) {

            $scope.ArraySplice = ArraySplice;
            $scope.NumberGen = NumberGen;

            $scope.createArray30 = function () {
                $scope.ArraySplice.createArray30();
            };
            $scope.createArray50 = function () {
                $scope.ArraySplice.createArray50();
            };
            $scope.createArray75 = function () {
                $scope.ArraySplice.createArray75();
            };
            $scope.shuffleArray = function () {
                $scope.ArraySplice.shuffleArray();
            };
            $scope.resetArray = function () {
                $scope.ArraySplice.resetArray();
            };
        }]);
})();