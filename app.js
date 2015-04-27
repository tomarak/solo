angular.module('app', [])

.controller('MadController', ['$scope', function($scope){
  $scope.words = [];
  $scope.template = ["went for a walk in the park. ", "decided to take it home."]
  $scope.story = [];
  $scope.count = 0;
  $scope.currentSentence = $scope.getCurrentSentence();

  $scope.userSentence;

  $scope.addWord = function(word){
    $scope.words.push(word);
    $scope.currentSentence = $scope.template[$scope.count];
    $scope.userSentence = $scope.userInput +" "+$scope.currentSentence;
    $scope.addSentence($scope.userSentence);
    $scope.userInput = '';
  }

  $scope.getCurrentSentence = function(){
    return $scope.template[$scope.count];
  }

  $scope.addSentence = function(sentence){
    //var index = Math.floor(Math.random()*$scope.template.length);
    $scope.story.push(sentence);
    $scope.count++;
  }

  $scope.getStory = function(){
    return $scope.story.join("");
  }

/*
  $scope.$on('$viewContentLoaded', function(){
    $scope.getSentence();
  });
*/

}])