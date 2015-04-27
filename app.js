angular.module('app', [])

.controller('MadController', ['$scope', function($scope){
  $scope.words = [];
  $scope.template = ["went for a walk in the park. ", "decided to take it home."]
  $scope.story = [];
  $scope.count = 0;

  $scope.userSentence;

  $scope.addWord = function(word){
    //$scope.words.push(word);
    $scope.userSentence = $scope.userInput +" "+ $scope.getCurrentStorySentence();
    $scope.addSentence($scope.userSentence);

    $scope.count++;
    $scope.userInput = '';

    console.log($scope.getcurrentStorySentence, $scope.template[$scope.count])
  }

  $scope.getCurrentStorySentence = function(){
    return $scope.template[$scope.count];
  }

  $scope.addSentence = function(sentence){
    //var index = Math.floor(Math.random()*$scope.template.length);
    $scope.story.push(sentence);
   
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