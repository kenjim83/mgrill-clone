$(document).ready(function(){
  sliderIndex = 0;

  bindListeners();
});



function bindListeners(){
  $('#prev-arrow').click(function(e){
    e.preventDefault();

    if(sliderIndex === 0){
      sliderIndex = slides.length-1
    } else {
      sliderIndex -= 1;
    }

    var textContent = slides[sliderIndex].html;

    $('#slider-text').html(textContent);
    $('body').removeClass().addClass('slide_' + (sliderIndex+1).toString() )
  })

  $('#next-arrow').click(function(){
    e.preventDefault();


     if(sliderIndex+1 === slides.length){ sliderIndex = 0; }
    $('#slider-text').html("<h1>THIS HAS BEEN CHANGED</h1>")
  })

}




slides = [
  { html: "<h1>Welcome to M Grill</h1><br><p>Come see the newly remodeled and much larger M Grill interior.</p>",
    image: "images/diningroom.jpg"
  },

  { html: "<h1>In the Heart of Los Angeles</h1><br><p>Near Downtown LA, Hollywood, the beaches, and more...</p>",
    image: "images/slider_LA.jpg"
  },

  { html: "<h1>Freshest Premium Meats</h1><br><p>Expertly Grilled Over An Open Charcoal Grill</p>",
    image: "images/slider_meats.jpg"
  }

]