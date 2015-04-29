angular.module('app', [])


<<<<<<< HEAD
.controller('mainController', ['$scope', function($scope){
  $scope.questions = ["What gets better with age? %", 
  "I drink to forget %", 
  "Next on ESPN2: The World Series of %", 
  "A LifeTime Original Picture: %", 
  "I'm not going to lie, I love %. There, I said it.", 
  "Cancel all my meetings. We've got a situation with % that requires my immediate attention.",
  "In his newest and most dangerous stunt, David Blaine must escape from %",
  "When the Pharoah remained unmoved, Moses called down a plague of %",
  "Alternative medicine is now embracing the power of %", "I'm sorry, there was nothing we could do. At 4:15 today your son succumbed to %", "In 1,000 years when our paper money is a distant memory, how will we pay for goods and services? %", "When I am a billionaire, I shall erect a 50-foot statue to commemorate %", "He who controls % controls the world", "%! It's a trap!", "Anthropologists have recently discovered a primitive tribe that worships %"
  ];
  $scope.answers = ["Lollipops", "Gummy bears", "Sunshine", "Rainbows", "The color yellow", "Golden Retrievers", "The glowing realization that all of us are connected in an abstract yet liminal way", "The Beatles", "Warmth", "Honeysuckles", "Being well rested", "a postive perspective on life", "fiscal responsibility", "peach fuzz", "extreme frolicking", "cookies", "nutella", "dandelions in the wind", "the giggles of joyful children", "functional reactive programming", "the sun smudged peach moon", ];
  $scope.sentencesSoFar = [];
=======
.controller('MadController', ['$scope', function($scope){

  var index = Math.floor(Math.random()*$scope.template.length);

  $scope.words = [];
  $scope.template = ["% went for a walk in the park. ", "There was % on the ground.", "% decided to take it home.", "The % grew very large,", "So large that it was bigger than %"]
  $scope.story = [];
>>>>>>> e97b67c7884cb5b4be752ec6b458a7150517b504
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

<<<<<<< HEAD
  $scope.getQuestion = function(){
    var index = Math.floor(Math.random() * $scope.questions.length);

    $scope.currentQuestion = $scope.questions[index];

    return $scope.currentQuestion;

  };

  $scope.getAnswers = function(){
    var index;
    $scope.currentAnswers = [];
    while($scope.currentAnswers.length !== 6){
     index = Math.floor(Math.random() * $scope.answers.length);
     if($scope.currentAnswers.indexOf($scope.answers[index]) === -1){
       $scope.currentAnswers.push($scope.answers[index]);
     }
   }
=======
  $scope.addSentence = function(sentence){
    //var index = Math.floor(Math.random()*$scope.template.length);
    $scope.story.push(sentence);

  }
>>>>>>> e97b67c7884cb5b4be752ec6b458a7150517b504

 };

  $scope.chooseTemplate = function(){
    var index = Math.floor(Math.random()*$scope.template.length);
  }

/*
  $scope.$on('$viewContentLoaded', function(){
    $scope.getSentence();
  });
*/

}])
