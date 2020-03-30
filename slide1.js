//Data: DC's scooter data (June 2019, LIME)
var map = L.map('map', {
  center: [38.9072, -77.0369],
  zoom: 14
});
var Stamen_TonerLite = L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}.{ext}', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png'
}).addTo(map);


//Load & process JSON dataset
var url = "https://raw.githubusercontent.com/OpheliaLYJ/MUSA611_Midterm_scooter/master/data/2019-0601_Lime_trips.json"
//var scooterData = $.ajax(url).done(function(data) {
//     parsed = parseData(data)});
var featureGroup;

var myStyle = function(feature) {
    if (feature.properties.TRIP_LENGTH == 0)
      {return {fillColor: 'yellow'}}
    else  {return {fillColor: 'red'}}
};

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
  $('#description').show();
};

/*
var eachFeatureFunction = function(layer) {
  layer.on('click', function (event) {
    /* =====================
    The following code will run every time a layer on the map is clicked.
    Check out layer.feature to see some useful data about the layer that
    you can use in your application.
    ===================== */
    /*
    if(layer.feature.properties.COLLDAY == "MON") {layer.feature.properties.DAY = "Monday"}
    else if(layer.feature.properties.COLLDAY == "TUE") {layer.feature.properties.DAY = "Tuesday"}
    else if(layer.feature.properties.COLLDAY == "WED") {layer.feature.properties.DAY = "Wednesday"}
    else if(layer.feature.properties.COLLDAY == "THU") {layer.feature.properties.DAY = "Thursday"}
    else if(layer.feature.properties.COLLDAY == "FRI") {layer.feature.properties.DAY = "Friday"}
    else if(layer.feature.properties.COLLDAY == "SAT") {layer.feature.properties.DAY = "Saturday"}
    else {layer.feature.properties.DAY == "Sunday"}

    $('.day-of-week').text(layer.feature.properties.DAY)
    console.log(layer.feature);
    showResults();
  });
}; */

var myFilter = function(feature) {
    return feature.properties.TRIP_LENGTH !== ' '
};

$(document).ready(function() {
  $.ajax(url).done(function(data) {
    var parsedData = JSON.parse(data);
    featureGroup = L.geoJson(parsedData, {
      style: myStyle,
      filter: myFilter
    }).addTo(map);

    // quite similar to _.each
//    featureGroup.eachLayer(eachFeatureFunction);
  });
});




/*
var color
if (eachSchool.HAS_HIGH_SCHOOL){
    color = '#0000FF'; // blue
    } else if (eachSchool.HAS_MIDDLE_SCHOOL) {
    color = '#00FF00'; // green
    } else {
     color = '#FF0000'; //red
    } */
var pathOpts = {'radius': 5,
                'fillColor': 'red'};
/*
//visuailzing morning trip origins;
scooterData.done(function(data) {
    var parsed = parseData(data);
    var filtered = morning(parsed)
    var origin_markers = ori_Markers(filtered);
    plotMarkers(origin_markers);
}); */
