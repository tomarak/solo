angular.module('app', [])


.controller('MadController', ['$scope', function($scope){

  var index = Math.floor(Math.random()*$scope.template.length);

  $scope.words = [];
  $scope.template = ["% went for a walk in the park. ", "There was % on the ground.", "% decided to take it home.", "The % grew very large,", "So large that it was bigger than %"]
  $scope.story = [];
  $scope.count = 0;

  $scope.userSentence;

  $scope.addWord = function(word){
    //$scope.words.push(word);
    $scope.userSentence = $scope.getCurrentStorySentence().replace("%", $scope.userInput);
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

  $scope.chooseTemplate = function(){
    var index = Math.floor(Math.random()*$scope.template.length);
  }

/*
  $scope.$on('$viewContentLoaded', function(){
    $scope.getSentence();
  });
*/

}])
