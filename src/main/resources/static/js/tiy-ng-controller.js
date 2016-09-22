angular.module('TIYMakeChocolateApp', [])
   .controller('SampleController', function($scope, $http, $timeout) { //Can get these items bc angular injects it for us

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


            $scope.chocoMaker = function(smalls, bigs, goal) {
                $http.get("//localhost:8080/makeChocolate.json")
                    .then(
                        console.log("Let's make some chocolate");
                        $scope.chocolateSolution = response.data;
                        },
                        function errorCallback(response) {
                            console.log("Unable to get data");
                        });

            };


    });

