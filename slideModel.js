/** Here's a simple 'model' of a slide.
 *  It tracks the slide's index and the title we want in our HTML
 */

/*
var slideExample = {
  slideNumber: 1,
  title: "LIME scooter trip origins in Washington D.C., June 1st, 2019",
  filter: function(DC_LIME) { return true }
};

/** Here's the simplest implementation I could come up with for
 * representing a deck of slides (nothing exotic is necessary!)
 */

/*
var slideDeck = [slideExample1, slideExample2, slideExample3]

*/

var slides = [
  //null
  { title: "title0", description: "the first description", color: "#FFFF00", filter: "all", source: "slide1.js"},
  //morning trips
  { title: "title1", description: "the second description", color: "#FF00FF", filter: "morning", marker: [38.9072, -77.0369], source: "slide1.js"},
  //long trips
  { title: "title2", description: "the first description", color: "#00FFFF", filter: "afternoon", marker: [38.9072, -77.0369], source: "slide2.js"},
  { title: "made up title", description: "made up description", color: "#F0F0F0", source: "slide1.js" }
];

var loadSlide = function(slide) {
  $('#title').text(slide.title);
  $('#description').text(slide.description);
  $('#sidebar').css("background-color", slide.color);
  $('#filter').val(slide.filter);
//  document.getElementById('myScript').src = slide.source;
};

//loadSlide(slides[0]);

var currentSlide = 0;


var next = function(){
  if (currentSlide != slides.length - 1){
    $('#nextButton').show();
    currentSlide = currentSlide + 1;
    loadSlide(slides[currentSlide]);
  }else{
    $('#nextButton').hide();
  }
};

$('#nextButton').click(function(e) {
  next();
});
