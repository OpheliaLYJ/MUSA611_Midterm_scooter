//Data: DC's scooter data (June 2019, LIME)

var map = L.map('map', {
  center: [38.900307, -77.030205],
  zoom: 13
});

var Stamen_TonerLite = L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.{ext}', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png'
}).addTo(map);


//Load & process JSON dataset
var url = "https://raw.githubusercontent.com/OpheliaLYJ/MUSA611_Midterm_scooter/master/data/2019-0601_Lime_trips.geojson"
//var scooterData = $.ajax(url).done(function(data) {
//     parsed = parseData(data)});
var featureGroup;

var showResults = function() {
  /* =====================
  This function uses some jQuery methods that may be new. $(element).hide()
  will add the CSS "display: none" to the element, effectively removing it
  from the page. $(element).show() removes "display: none" from an element,
  returning it to the page. You don't need to change this part.
  ===================== */
  // => <div id="intro" css="display: none">
  $('#title').hide();
  // => <div id="results">
  $('#description').hide();
};

/*
$(document).ready(function() {
  $.ajax(url).done(function(data) {
    var parsedData = JSON.parse(data);
    featureGroup = L.geoJson(parsedData, {
      filter: longTrip,
      pointToLayer: function (feature, latlng) {
        return L.circleMarker(latlng, myStyle);
    }
    }).addTo(map);

    // quite similar to _.each
//    featureGroup.eachLayer(eachFeatureFunction);
  });
}); */
