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


//visualizing all trip origins
scooterData.done(function(data) {
    var parsed = parseData(data);
    var origin_markers = ori_Markers(parsed);
    plotMarkers(origin_markers);
});
