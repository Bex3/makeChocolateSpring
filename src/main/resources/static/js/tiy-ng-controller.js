angular.module('TIYMakeChocolateApp', [])
   .controller('SampleController', function($scope, $http) {

    $scope.testValue = "testing here";
        console.log($scope.testValue);

        console.log("Testing");

              $scope.makeArray = function(arraySize) {
                    var returnArray = [];
                    for (var i = 0; i < arraySize; i++) {
                        returnArray.push(i);
                    }
                    return returnArray;
                }

    });
