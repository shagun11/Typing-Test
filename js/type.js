/**
 * Created by Shagun on 20/10/15.
 */
$(document).ready(function() {
  var score = 0,
      i = 1;
  $('input').prop('disabled', true);
  function typing(e) {
    var input = $('input').val(),
        text = $('.content span:nth-child('+i+')').text();
    console.log(text);
    if(text.indexOf(input) < 0 ) {
      $('.content span:nth-child('+i+')').addClass('wrong');
    }

    if(e.keyCode === 32) {
      e.preventDefault();
      if(text == input) {
        score = score + 10;
        $('input').val('');
        $('.content span:nth-child('+i+')').removeClass('wrong').addClass('right');
        i = i + 1;
      }
      else {
        score = score - 5;
        $('input').val('');
        $('.content span:nth-child('+i+')').addClass('wrong');
        i = i + 1;
      }

    }
  }
  $('input').on('keypress',function(e){
    var textArr = $('div').text().trim().split(' ');
    typing(e);
  });

  var totalTime = 60;
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

});
