//save Initials and Score to local storage...not working yet...dammmit....

var count = 30;
var counter = setInterval(timer, 1000);

$(document).ready(function() {
    if (typeof localStorage["highScore"] !== 'undefined') {
    $(".score").text('Your current high score is' + " " + localStorage["highScore"]);}
    else {
      localStorage["highScore"] = 0;
      $(".score").text('Your current high score is 0');
    }
    let counter = {
      sec: 0,
      count: 0,
      inc() {
        this.count++;
        $(".counter").text(this.count);
      },
      score: 0
    }
  
    function store() {
      if (counter.score > localStorage["highScore"]) {
        localStorage["highScore"] = counter.score;
      }
  
      if (typeof localStorage["highScore"] !== 'undefined') {
    $(".score").text('Your current high score is' + " " + localStorage["highScore"]);}
    }
})
