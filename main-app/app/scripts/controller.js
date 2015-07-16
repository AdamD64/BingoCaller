(function () {
    'use strict';
    angular.module('Tombola.BingoCaller')
        .controller('bingoCallerController',
        ['$scope','ArrayCreator', function ($scope, arraycreator) {

            $scope.ArrayCreator = arraycreator;

            $scope.createCustomArray = function () {
                $scope.ArrayCreator.createCustomArray();
            };
            $scope.shuffleArray = function () {
                $scope.ArrayCreator.shuffleArray();
            };
        }]);
})();