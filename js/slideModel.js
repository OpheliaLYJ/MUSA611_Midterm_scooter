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
        return L.circleMarker(latlng, myStyle)
        .bindPopup("Start time: " + feature.properties.START_TIME + "<br>End time: " + feature.properties.END_TIME);
    }
  }).addTo(map)})});


var slides = [
  //morning trips
  { title: "Lime scooter trip origins in Washtington D.C., 1st June 2019", description: "Take a look at the map on the right. The yellow dots are where scooter trips started on 1st June 2020 in Washington D.C. Click on 'Next' to begin the exploratory journey.",
  color: "#FF00FF", filter: "myFilter", style: "myStyle", zoom: 13, center: [38.900307, -77.030205]},
  //morning trips
  { title: "Morning trip origins", description: "The red dots are showing where did trips during morning peak hours (7-9AM) took place. Click on each dot to get detailed trip information.",
  color: "#FF00FF", filter: "morning", style: "morning_style", zoom: 14, center: [38.900307, -77.030205]},
  //afternoon trips
  { title: "Afternoon trip origins", description: "The skyblue dots are showing where did trips during morning peak hours (5-7PM) took place. Click on each dot to get detailed trip information.",
  color: "#00FFFF", filter: "afternoon", style: "afternoon_style", zoom: 14, center: [38.900307, -77.030205]},
  //afternoon trips
  { title: "Midnight trip origins", description: "The darkblue dots are showing where did trips during midnight (11PM-5AM) took place. Click on each dot to get detailed trip information.",
  color: "#00FFFF", filter: "midnight", style: "midnight_style", zoom: 16, center: [38.902600, -77.023065]},
  //long trips (longer than 1.5mile)
  { title: "Long-distance trips", description: "The green dots are showing trips longer than 1.5 miles. Click on each dot to get detailed trip information.",
  color: "#F0F0F0", filter: "longTrip", style: "longTrip_style", zoom: 15, center: [38.896866, -77.031605]},
  //long trips (longer than 30 minutes)
  { title: "Long-duration trips", description: "The green dots are showing trips longer than 30 minutes. Click on each dot to get detailed trip information. This is the end of the journey.",
  color: "#F0F0F0", filter: "longTrip2", style: "longTrip2_style", zoom: 15, center: [38.896866, -77.031605]}
];

var loadSlide = function(slide) {
  $('#title').text(slide.title);
  $('#description').text(slide.description);
  map.setView(slide.center, slide.zoom);
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
      map.on('zoomend', function zoomendEvent(ev) {
        var currentZoomLevel = ev.target.getZoom(),
    mapDiv = map.getContainer(),
    minZoomToShowPtLayer = 11; // or whatever

  if (currentZoomLevel >= minZoomToShowPtLayer) {
    mapDiv.classList.add('hide-point-layer');
  } else {
    mapDiv.classList.remove('hide-point-layer');
  }
});
      featureGroup = L.geoJson(parsedData, {
        onEachFeature: function (feature, layer) { //add a tag (easy to remove)
              layer.myTag = "myGeoJSON"},
        filter: window[slides[currentSlide].filter], //apply filter
        pointToLayer: function (feature, latlng) { //convert point to layer
          return L.circleMarker(latlng, window[slides[currentSlide].style])
          .bindPopup("Start time: " + feature.properties.START_TIME + "<br>End time: " + feature.properties.END_TIME);
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
          return L.circleMarker(latlng, window[slides[currentSlide].style])
          .bindPopup("Start time: " + feature.properties.START_TIME + "<br>End time: " + feature.properties.END_TIME);
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
