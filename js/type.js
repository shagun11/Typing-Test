/**
 * Created by Shagun on 20/10/15.
 */
$(document).ready(function() {
  var score = 0,
      i = 1,
      totalTime = 60;
  $('input').prop('disabled', true);
  function typing(e) {
    var input = $('input').val(),
        text = $('.content span:nth-child('+i+')').text();
    if(text.indexOf(input) < 0 ) {
      $('.content span:nth-child('+i+')').addClass('wrong');
    }

    if(e.keyCode === 32) {
      e.preventDefault();
      if(text == input) {
        $('.content span:nth-child('+i+')').removeClass('wrong').addClass('right');
        calculate(10);
      }
      else {
        $('.content span:nth-child('+i+')').addClass('wrong');
        calculate(-5);
      }

    }
  }

  $('input').on('keypress',function(e){
    var textArr = $('div').text().trim().split(' ');
    typing(e);
  });

  $('button').on('click', function() {
    $('input').prop('disabled', false);
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

  function calculate(num) {
    score = score + num;
    if(score < 0) {
      score = 0;
    }
    $('input').val('');
    i = i + 1;
  }

  function calculateSpeed() {

  }
});
