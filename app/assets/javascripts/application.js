// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require bootstrap
//= require_tree .

window.player_score   = 0;
window.opponent_score = 0;

$(document).ready(function() {
  $("#moves img").on('click', function() {
//    alert("You clicked " + $(this).data("move"));
    var opponent_moves  = ['rock','paper','scissors'];
    var opponent_move   = opponent_moves[randomIntFromInterval(0, 2)];
    var player_move     = $(this).data("move");

    if (player_move != opponent_move) {
      switch(player_move + opponent_move) {
        case 'paperrock' : case 'scissorspaper' : case 'rockscissors' :
          player_score += 1;
          $winning_panel = $('#player-panel');
          break;
        default:
          opponent_score += 1;
          $winning_panel = $('#opponent-panel');
          break;
      }
      displayScores($winning_panel);
    } else {
      handleTie()
    }

    $("#player-img").attr("src", "/assets/" + player_move + "L.jpg").show();
    $("#opponent-img").attr("src", "/assets/" + opponent_move + "R.jpg").show();
  } )
})

function randomIntFromInterval(min,max)
{
  return Math.floor(Math.random()*(max-min+1)+min);
}

function displayScores($winning_panel) {
  clearSuccess();
  $winning_panel.addClass("panel-success");
  $('#opponent-score').html(opponent_score).show();
  $('#player-score').html(player_score).show();
}

function handleTie() {
  clearSuccess();

  $("#who-won").html("Tie").show()
}

function clearSuccess() {
  $(".panel").removeClass("panel-success")
  $("#who-won").html("&nbsp;").show();
}