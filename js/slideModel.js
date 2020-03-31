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

$(document).ready(function() {
  $.ajax(url).done(function(data) {
    var parsedData = JSON.parse(data);
    featureGroup = L.geoJson(parsedData, {
      onEachFeature: function (feature, layer) { //add a tag (easy to remove)
            layer.myTag = "myGeoJSON"},
      filter: myFilter, //apply filter
      pointToLayer: function (feature, latlng) { //convert point to layer
        return L.circleMarker(latlng, myStyle);
    }
  }).addTo(map)})});


var slides = [
  //morning trips
  { title: "Title1", description: "the 1st description", color: "#FF00FF", filter: "myFilter", style: "myStyle"},
  //morning trips
  { title: "title2", description: "the 2nd description", color: "#FF00FF", filter: "morning", style: "morning_style"},
  //afternoon trips
  { title: "title3", description: "the 3rd description", color: "#00FFFF", filter: "afternoon", style: "afternoon_style"},
  //afternoon trips
  { title: "title4", description: "the 4th description", color: "#00FFFF", filter: "midnight", style: "midnight_style"},
  //long trips (longer than 2mile)
  { title: "title5", description: "the 5th description", color: "#F0F0F0", filter: "longTrip", style: "longTrip_style"},
  //long trips (longer than 15 minutes)
  { title: "title6", description: "the 6th description", color: "#F0F0F0", filter: "longTrip2", style: "longTrip2_style"}
];

var loadSlide = function(slide) {
  $('#title').text(slide.title);
  $('#description').text(slide.description);
//  $('#sidebar').css("background-color", slide.color);
//  $('#filter').text(slide.filter);
//  document.getElementById('myScript').src = slide.source;
};

//loadSlide(slides[0]);

var currentSlide = 0;
if (currentSlide != 0){
  $('#lastButton').show()
}else{$('#lastButton').hide()};

var next = function(){
  currentSlide = currentSlide + 1;
  if (currentSlide != slides.length - 1){
    $('#nextButton').show();
  }else{
    $('#nextButton').hide();
  }
  loadSlide(slides[currentSlide]);
  removeMarkers();

  $(document).ready(function() {
    $.ajax(url).done(function(data) {
      var parsedData = JSON.parse(data);
      featureGroup = L.geoJson(parsedData, {
        onEachFeature: function (feature, layer) { //add a tag (easy to remove)
              layer.myTag = "myGeoJSON"},
        filter: window[slides[currentSlide].filter], //apply filter
        pointToLayer: function (feature, latlng) { //convert point to layer
          return L.circleMarker(latlng, window[slides[currentSlide].style]);
      }
      }).addTo(map);
//      featureGroup.eachLayer(addDuration);
    });
  });
};

var previous = function(){
  currentSlide = currentSlide - 1;
  if (currentSlide == 0){
    $('#lastButton').hide();

//    loadSlide(slides[0]);
  }else{
    $('#lastButton').show();
  };
  loadSlide(slides[currentSlide]);
  removeMarkers();
  $(document).ready(function() {

    $.ajax(url).done(function(data) {
      var parsedData = JSON.parse(data);
      featureGroup = L.geoJson(parsedData, {
        onEachFeature: function (feature, layer) { //add a tag (easy to remove)
              layer.myTag = "myGeoJSON";
            },
        filter: window[slides[currentSlide].filter], //apply filter
        pointToLayer: function (feature, latlng) { //convert point to layer
          return L.circleMarker(latlng, window[slides[currentSlide].style]);
      }
      }).addTo(map);
    });
  });
};

$('#nextButton').click(function(e) {
  next();
  if (currentSlide != 0){
    $('#lastButton').show()
  }else{$('#lastButton').hide()};
});

$('#lastButton').click(function(e) {
  previous();
  if (currentSlide != slides.length){
    $('#nextButton').show()} else{$('#nextButton').hide()}
});
