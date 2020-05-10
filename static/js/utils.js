var getGeoPins = function(lng, lat, type) {
    if (type == 'latlng') {
        return [lat, lng]
    } else {
        return [lng, lat]
    }
};

var geoCodeExchange = function() {
    console.log(sessionStorage.getItem("GeoCodeSearch"));
    if (sessionStorage.getItem("GeoCodeSearch") == 'text' || sessionStorage.getItem("GeoCodeSearch") == null) {
        sessionStorage.setItem("GeoCodeSearch", "text");
        $('#geocode-btn-change').removeClass("btn-select");
        document.getElementById('geocode-search').placeholder = 'Search by locations';
    } else if (sessionStorage.getItem("GeoCodeSearch") == 'code') {
        sessionStorage.setItem("GeoCodeSearch", "code");
        $('#geocode-btn-change').addClass("btn-select");
        document.getElementById('geocode-search').placeholder = 'Search by coordinates lng, lat';
    }
};

var getCursorHandler = function(cursor) {
    if (cursor == "pin_select") {
        map.getCanvas().style.cursor = 'crosshair';
    } else if (cursor == "popup_select") {
        map.getCanvas().style.cursor = 'pointer';
    } else if (cursor == "grab_select") {
        map.getCanvas().style.cursor = '-webkit-grab';
    } else if (cursor == "grabbing_select") {
        map.getCanvas().style.cursor = '-webkit-grabbing';
    } else {
        map.getCanvas().style.cursor = '';
    }
};

var getTextIndex = function(pins) {
    if (pins.features.length == 0) {
        return 1;
    } else {
        return (pins.features[pins.features.length - 1].properties.pinIndex + 1);
    }
};

var resetDescriptions = function(index, lnglat) {
    return "<div class=popup-" + index + "><p><button title='Remove Pin' id='remove-pin-btn' class='remove-pin' rel=" + index + "><i class='far fa-trash-alt'></i></button>&nbsp;<button title='Center Location' id='flyto-pin-btn' class='flyto-pin' rel=" + index + "><i class='fas fa-crosshairs'></i></button></p><p><strong>LatLng : </strong>" + lnglat + "</p><p><button title='Request Address' id='request-address-btn' class='request-address' rel=" + index + ">Request Address</button></p></div>"
};

var requestAddress = function(index, lng, lat) {
    var queryURL = GEO_CODING_URL + lng + "," + lat + ".json?types=poi&access_token=" + mapboxgl.accessToken;
    var placeName = "No Address Found";
    $.get(queryURL, function(data, err) {
        if (data.features.length != 0) {
            placeName = data.features[0].place_name
        }
        if (err !== "success") console.error(err);
        return "<p><button title='Remove Pin' id='remove-pin-btn' class='remove-pin' rel=" + index + "><i class='far fa-trash-alt'></i></button>&nbsp;<button title='Center Location' id='flyto-pin-btn' class='flyto-pin' rel=" + index + "><i class='fas fa-crosshairs'></i></button></p><p><strong>LatLng : </strong>" + lng + "," + lat + "</p><p><strong>Address : </strong>" + placeName + "</p>";
    });
};

var invertColor = function(col) {
    const colors = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']
    let inverseColor = '#'
    col.replace('#', '').split('').forEach(i => {
        const index = colors.indexOf(i)
        inverseColor += colors.reverse()[index]
    })
    return inverseColor
}

$(document).on('click', '.draw-tool-icon', function() {
    $(".draw-tool-icon").removeClass("tool-active");
    $(this).addClass("tool-active");
});