/**
 * Created by Shagun on 20/10/15.
 */
$(document).ready(function() {
  var score = 0,
      i = 0;
  function typing(e, textArr) {
    var input = $('input').val(),
        l = textArr.length;
    console.log(input);
    if(e.keyCode === 32) {
      e.preventDefault();
      if(textArr[i] == input) {
        score = score + 10;
        i = i+1;
        console.log(score);
        $('input').val('');
      }
      else {
        score = score - 5;
        i = i + 1;
        console.log(score);
        $('input').val('');
      }

    }
  }
  $('input').on('keypress',function(e){
    var textArr = $('div').text().trim().split(' ');
    typing(e, textArr);
  });

  var totalTime = 60;
  $('button').on('click', function() {
    var set = setInterval(function() {
      totalTime = totalTime - 1;
      if (totalTime == -1) {
        $('input').prop('disabled', true);
        clearInterval(set);
        showScore();
      }
      else {
        $('#timer').text(totalTime);
      }
    }, 1000);
  });

  function showScore() {
    $('#score').text(score);
  }

});
