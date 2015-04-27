angular.module('app', [])

.controller('MadController', ['$scope', function($scope){
  $scope.words = [];

  $scope.addWord = function(word){
    $scope.words.push(word);
    $scope.userInput = '';
  }
}])