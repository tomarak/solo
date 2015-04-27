angular.module('app', [])

.controller('MadController', ['$scope', function($scope){
  $scope.words = [];
  $scope.template = ["went for a walk in the park.", "decided to take it home."]
  $scope.story = [];
  $scope.count = 0;
  $scope.currentSentence = "";

  $scope.addWord = function(word){
    $scope.words.push(word);
    $scope.userInput = '';
  }

  $scope.getSentence = function(){
    //var index = Math.floor(Math.random()*$scope.template.length);
    console.log("H!!!!!")
    $scope.currentSentence = $scope.template[$scope.count];
    $scope.story.push($scope.currentSentence);
    console.log($scope.story)
    $scope.count++;
  }

  $scope.getStory = function(){
    return $scope.story.join("");
  }

  $scope.$on('$viewContentLoaded', function(){
    $scope.getSentence();
  });


}])