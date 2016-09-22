angular.module('TIYMakeChocolateApp', [])
   .controller('SampleController', function($scope, $http, $timeout) { //Can get these items bc angular injects it for us

        $scope.testValue = "testing here";
            console.log($scope.testValue);

            console.log("Testing");

        $scope.testTimeout = function() {
            console.log("TestTimeout() is running")

            if ($scope.bigs > 5){
                return;
            }else {
                $scope.bigs +=1;
                $timeout($scope.testTimeout, 1000);

            }
        }

              $scope.makeArray = function(arraySize) {
                    var returnArray = [];
                    for (var i = 0; i < arraySize; i++) {
                        returnArray.push(i);
                    }
                    return returnArray;
                }

        $scope.bigs = 1;
        $timeout($scope.testTimeout, 3000);

    });

