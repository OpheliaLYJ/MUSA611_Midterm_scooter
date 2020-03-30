//This function filter the trips taking place in morning peak hours
var morning = function(list) {
  var morningBegin = moment('1/6/2019 6:59', 'dd/mm/yyyy hh:mm');
  var morningEnd = moment('1/6/2019 9:01', 'dd/mm/yyyy hh:mm');
  return _.filter(list, function(trip){ return moment(trip.START_TIME, 'dd/mm/yyyy hh:mm').isBetween(morningBegin, morningEnd)});
};

//This function filter the trips taking place in afternoon peak hours
var afternoon = function(list) {
  var afternoonBegin = moment('1/6/2019 16:59', 'dd/mm/yyyy hh:mm');
  var afternoonEnd = moment('1/6/2019 20:01', 'dd/mm/yyyy hh:mm');
  return _.filter(list, function(trip){ return moment(trip.START_TIME, 'dd/mm/yyyy hh:mm').isBetween(afternoonBegin, afternoonEnd)});
};

//This function filter the trips with distance longer than 1 mile
var longTrip = function(list) {
  return _.filter(list, function(trip){ return trip.TRIP_LENGTH > 1});
};

//This function make markers based on the origin of each trip
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

//Remove markers
var removeMarkers = function (list) {
   _.each(list, function (x) {
     map.removeLayer(x);
})};
