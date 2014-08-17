$(document).ready(function(){

    slideIndex = 0;

    $('#slider').maximage({
        cycleOptions: {
            fx:'fade',
            speed: 1000,
            timeout: 0,
            prev: '#prev-arrow',
            next: '#next-arrow'
        },
        fillElement: '#slider',
        backgroundSize: 'contain'
    });

    bindListeners();

});

function bindListeners(){
  $('#prev-arrow').click(function(e){
    if(slideIndex === 0){
      slideIndex = slideHtml.length-1
    } else {
      slideIndex -= 1;
    }
    $('#swappable-text').html(slideHtml[slideIndex])
  })

  $('#next-arrow').click(function(e){
    if(slideIndex === slideHtml.length-1){
      slideIndex = 0
    } else {
      slideIndex += 1;
    }
    $('#swappable-text').html(slideHtml[slideIndex])
  })

}


slideHtml = [

  "<h1>Welcome to M Grill</h1><br><p>Come see the newly remodeled and much larger M Grill interior.</p>",

  "<h1>In the Heart of Los Angeles</h1><br><p>Near Downtown LA, Hollywood, the beaches, and more...</p>",

  "<h1>Freshest Premium Meats</h1><br><p>Expertly Grilled Over An Open Charcoal Grill</p>"

]