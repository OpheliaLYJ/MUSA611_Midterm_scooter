//visuailzing afternoon trip origins
removeMarkers(markers);
var afternoonTrips = afternoon(parsed);
var markers = ori_Markers(afternoonTrips);
plotMarkers(markers);
