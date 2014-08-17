$(document).ready(function(){
  sliderIndex = 0;

  bindListeners();
});



function bindListeners(){
  $('#prev-arrow').click(function(e){
    e.preventDefault();
    $('body').removeClass('slide_' + sliderIndex)

    if(sliderIndex === 0){
      sliderIndex = slides.length-1
    } else {
      sliderIndex -= 1;
    }
    var textContent = slides[sliderIndex].html;
    $('#slider-text').html(textContent);
    $('body').addClass('slide_' + sliderIndex)
  })

  $('#next-arrow').click(function(e){
    e.preventDefault();
    $('body').removeClass('slide_' + sliderIndex)

    if(sliderIndex === slides.length-1){
      sliderIndex = 0
    } else {
      sliderIndex += 1;
    }
    var textContent = slides[sliderIndex].html;
    $('#slider-text').html(textContent);
    $('body').addClass('slide_' + sliderIndex)
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