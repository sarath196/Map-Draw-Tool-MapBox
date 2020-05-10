var GEO_CODING_URL = "https://api.mapbox.com/geocoding/v5/mapbox.places/";
var control_handler = "pin_select";
var geo_raw_pins = [];
var marker_icon = "geo-marker";

var drag_index = 0;

var cursor_handler = ["pin_select", "popup_select"];
var line_style = "simple_line";

//line properties
var line_color = "#fdb45f";
var line_size = 3;

//polygon properties
var polygon_color = "#fdb45f";
var polygon_size = 3;

var pins = {
    'type': 'FeatureCollection',
    'features': []
};
var geo_pins = {
    'type': 'FeatureCollection',
    'features': []
};
var geojson = {
    'type': 'FeatureCollection',
    'features': [{
        'type': 'Feature',
        'geometry': {
            'type': 'Point',
            'coordinates': [0, 0]
        }
    }]
};