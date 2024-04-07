
$('#calorie-calculator').submit(function(e){
  e.preventDefault();
  calcDailyCals();
});

$('button[type="reset"]').click(function(){
  $('#results').fadeOut('fast',function(){
    $(this).html('');
  });
});

function calcDailyCals(){
  let age = parseInt($('#age').val());
  let sex = $('input[name="sex"]:checked').val();
  let weight = parseFloat($('#weight').val()) * 0.453592;
  let height = parseFloat($("#inches").val()) * 2.54;
  let activity = parseFloat($('#activity_level').val());
  let goal = parseInt($('#gain_loss_amount').val());
  
  let result;
  
  /*Mifflin St. Jeor Formulas:*/
    if (sex === 'male') {
    result = ((10 * weight) + (6.25 * height) - (5 * age) + 5) * activity;
  } else {
    result = ((10 * weight) + (6.25 * height) - (5 * age) - 161) * activity;
  }

  result = Math.round(result + goal);
  
  calcDailyMacros(result);
  
  $('#results').fadeOut('fast',function(){
    $(this).html('<h3>Total Daily Calories: ' + result + '</h3>').fadeIn('fast');
  });    
  
  function calcDailyMacros(result){
    let carbs = (result * .5) /4; 
    let protein = (result * .3) /4; 
    let fat = (result * .2) / 9;
    
    $('#carbs').val(Math.round(carbs));
    $('#protein').val(Math.round(protein));
    $('#fat').val(Math.round(fat));
  }
}