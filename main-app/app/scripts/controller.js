(function () {
    'use strict';
    angular.module('Tombola.BingoCaller')
        .controller('bingoCallerController',
        ['$scope', 'NumberGenerator', 'ArrayCreator', function ($scope, numberGenerator, arraycreator) {

            $scope.ArrayCreator = arraycreator;
            $scope.NumberGen = numberGenerator;

            $scope.createCustomArray = function () {
                $scope.ArrayCreator.createCustomArray();
            };
            $scope.shuffleArray = function () {
                $scope.ArrayCreator.shuffleArray();
            };
        }]);
})();