(function () {
    'use strict';
    angular.module('Tombola.BingoCaller')
        .controller('bingoCallerController', ['$scope','NumberGen', 'ArraySplice', function ($scope, NumberGen, ArraySplice) {

            $scope.ArraySplice = ArraySplice;

            $scope.spliceArray = function () {
                $scope.ArraySplice.spliceArray();
            };

        }]);
})();