angular.module('app', [])

.controller('MadController', ['$scope', function($scope){
  $scope.words = [];
  $scope.template = ["$scope.words[i] went for a walk in the park.", " {{userInput}} found a {{userInput}}. {{userInput}} decided to take it home."]

  $scope.addWord = function(word){
    $scope.words.push(word);
    $scope.userInput = '';
  }

  $scope.getTemplate = function(){
    var index = Math.floor(Math.random()*$scope.template.length);
    return $scope.template;
  }
  
  $scope.getStory = function(){
    return $scope.story.join("");
  }


}])