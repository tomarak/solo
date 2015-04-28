angular.module('app', [])


.controller('mainController', ['$scope', function($scope){
  $scope.questions = ["What gets better with age? %", 
  "I drink to forget %", 
  "Next on ESPN2: The World Series of %", 
  "A LifeTime Original Picture: %", 
  "I'm not going to lie, I despise %. There, I said it.", 
  "Cancel all my meetings. We've got a situation with % that requires my immediate attention.",
  "In his newest and most dangerous stunt, David Blaine must escape from %",
  "When the Pharoah remained unmoved, Moses called down a plague of %",
  "Alternative medicine is now embracing the power of %"
  ];
  $scope.answers = ["Lollipops", "Gummy bears", "Sunshine", "Rainbows", "The color yellow", "Golden retrievers", "The glowing realization that all of us are connected in an abstract yet liminal way", "The Beatles", "Warmth", "Honeysuckles", "Being well rested", "a postive perspective on life", "fiscal responsibility"];
  $scope.sentencesSoFar = [];
  $scope.count = 0;

  $scope.currentQuestion = "";
  $scope.currentAnswers = [];

  $scope.userSentence = '';
  $scope.userInput = "__________";

  $scope.addWord = function(word){
    $scope.userSentence = $scope.currentQuestion.replace("%", word.toUpperCase());
    $scope.addSentence($scope.userSentence);

    $scope.getAnswers();
    $scope.count++;
    $scope.userInput = '__________';
  };

  $scope.addSentence = function(sentence){
    //var index = Math.floor(Math.random()*$scope.template.length);
    $scope.sentencesSoFar.push(sentence);
    console.log($scope.sentencesSoFar);
  };


  //==========INITIALIZE=============

  $scope.getQuestion = function(){
    var index = Math.floor(Math.random() * $scope.questions.length);

    $scope.currentQuestion = $scope.questions[index];
    return $scope.currentQuestion;

  };

  $scope.getAnswers = function(){
    var index;
    $scope.currentAnswers = [];
    while($scope.currentAnswers.length !== 5){
     index = Math.floor(Math.random() * $scope.answers.length);
     if($scope.currentAnswers.indexOf($scope.answers[index] === -1)){
       $scope.currentAnswers.push($scope.answers[index]);
     }
   }

 };

/*
  $scope.$on('$viewContentLoaded', function(){
    $scope.getSentence();
  });
*/

}])