//This function calculate trip durations (in minute) for scooter trips
var addDuration = function(layer) {
  layer.feature.properties.DURATION = moment(layer.feature.properties.END_TIME, 'dd/mm/yyyy hh:mm').diff(
    moment(layer.feature.properties.START_TIME, 'dd/mm/yyyy hh:mm'), 'minutes', true);
  console.log(layer.feature)
};

//This function filter the trips with
var myFilter = function(feature) {
    return feature.properties.TRIP_LENGTH !== ' '
};

//This function defines the style of the marker
var myStyle = {
  radius: 5,
  fillColor: "#fed352",
  color: "#000",
  weight: 1,
  opacity: 1,
  fillOpacity: 0.8
};

var morning_style = {
  radius: 7,
  fillColor: "#e46c4d",
  color: "#000",
  weight: 1,
  opacity: 1,
  fillOpacity: 0.8
};

var afternoon_style = {
  radius: 7,
  fillColor: "#02bbca",
  color: "#000",
  weight: 1,
  opacity: 1,
  fillOpacity: 0.8
};

var midnight_style = {
  radius: 7,
  fillColor: "#175a94",
  color: "#000",
  weight: 1,
  opacity: 1,
  fillOpacity: 0.8
};

var longTrip_style = {
  radius: 7,
  fillColor: "#99d45d",
  color: "#000",
  weight: 1,
  opacity: 1,
  fillOpacity: 0.8
};

var longTrip2_style = {
  radius: 7,
  fillColor: "#9979c1",
  color: "#000",
  weight: 1,
  opacity: 1,
  fillOpacity: 0.8
};

//This function filter the trips taking place in morning peak hours
var morning = function(feature) {
  var morningBegin = moment('1/6/2019 6:59', 'dd/mm/yyyy hh:mm');
  var morningEnd = moment('1/6/2019 9:01', 'dd/mm/yyyy hh:mm');
  return moment(feature.properties.START_TIME, 'dd/mm/yyyy hh:mm').isBetween(morningBegin, morningEnd);
};

//This function filter the trips taking place in afternoon peak hours
var afternoon = function(feature) {
  var afternoonBegin = moment('1/6/2019 16:59', 'dd/mm/yyyy hh:mm');
  var afternoonEnd = moment('1/6/2019 20:01', 'dd/mm/yyyy hh:mm');
  return moment(feature.properties.START_TIME, 'dd/mm/yyyy hh:mm').isBetween(afternoonBegin, afternoonEnd);
};

//This function filter the trips taking place during midnight
var midnight = function(feature) {
  var midnightBegin = moment('1/6/2019 22:59', 'dd/mm/yyyy hh:mm');
  var midnightEnd = moment('1/6/2019 4:59', 'dd/mm/yyyy hh:mm');
  return moment(feature.properties.START_TIME, 'dd/mm/yyyy hh:mm').isAfter(midnightBegin) ||
  moment(feature.properties.START_TIME, 'dd/mm/yyyy hh:mm').isBefore(midnightEnd);
};

//This function filter the trips with distance longer than 1.5 mile
var longTrip = function(feature) {
  return feature.properties.TRIP_LENGTH > 1.5;
};


//This function filter the trips with duration longer than 30 minutes
var longTrip2 = function(feature) {
  feature.properties.DURATION = moment(feature.properties.END_TIME, 'dd/mm/yyyy hh:mm').diff(
    moment(feature.properties.START_TIME, 'dd/mm/yyyy hh:mm'), 'minutes', true);
  return feature.properties.DURATION > 30;
};

/*
var ori_Markers = function(list){
  return _.map(list, function (obj) {
    return L.circleMarker([obj.START_LAT, obj.START_LON], pathOpts);
});
};

//This function make markers based on the destination of each trip
var dest_Markers = function(list){
  return _.map(list, function (obj) {
    return L.circleMarker([obj.END_LAT, obj.END_LON], pathOpts);
});
};

//This function plot the markers
var plotMarkers = function (list) {
   _.each(list, function (x) {
   x.addTo(map);
})};

*/

//Remove layers
var removeMarkers = function() {
  map.eachLayer(function(layer) {
    if ( layer.myTag &&  layer.myTag === "myGeoJSON") {
            map.removeLayer(layer)}
          });
};
