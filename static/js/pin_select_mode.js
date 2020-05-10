// Marker Pins
var pinSelectMode = function(map) {

    map.on('click', function(e) {
        //draw.changeMode('drag_circle');

        if (control_handler == 'pin_select') {
            var lng = e.lngLat.lng;
            var lat = e.lngLat.lat;
            var address;
            var point = turf.point([lng, lat]);
            point.properties = {
                'icon': marker_icon,
                'description': resetDescriptions(pins.features.length, getGeoPins(lng, lat, null)),
                'lng': lng,
                'lat': lat,
                'index': pins.features.length,
                'pinIndex': getTextIndex(pins),
            };
            pins.features.push(point);
            map.getSource("targets").setData(pins);


            geo_pins.features.push(turf.point([lng, lat]));
            geo_raw_pins.push("\n" + getGeoPins(lng, lat, null));
            document.getElementById("geo-geojson").value = JSON.stringify(geo_pins, null, 4);
            document.getElementById("geo-ram").value = geo_raw_pins;
            document.getElementById("latlong-input").value = lng + " , " + lat;

            getCursorHandler(cursor_handler[0]);
        }
    });

    var popup = new mapboxgl.Popup({ offset: [0, -30] });
    map.on('click', 'points', function(e) {
        var coordinates = e.features[0].geometry.coordinates.slice();
        var description = e.features[0].properties.description;

        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        popup.setLngLat(coordinates).setHTML(description).addTo(map);
    });

    map.on('mouseenter', 'points', function() {
        getCursorHandler(cursor_handler[1]);
        control_handler = 'popup_handeler'
    });

    map.on('mouseleave', 'points', function() {
        getCursorHandler(cursor_handler[0]);
        control_handler = 'pin_select'
    });

    map.on('mousedown', 'points', function(e) {
        // Prevent the default map drag behavior.
        e.preventDefault();

        drag_index = e.features[0].properties.index;

        getCursorHandler('grab_select');

        map.on('mousemove', onMove);
        map.once('mouseup', onUp);
    });


    $(document).on('click', '.marker-pin', function() {
        marker_icon = this.rel;
        draw.changeMode('simple_select');
        getCursorHandler(cursor_handler[0]);
        control_handler = 'pin_select';
    });


    $(document).on('click', '.remove-pin', function() {
        delete_index = $(this).attr('rel');
        pins.features.splice(delete_index, 1);
        geo_pins.features.splice(drag_index, 1);
        geo_raw_pins.splice(drag_index, 1);
        document.getElementById("geo-geojson").value = JSON.stringify(geo_pins, null, 4);
        document.getElementById("geo-ram").value = geo_raw_pins;

        var i = 0;
        pins.features.map(function(n) {
            n.properties.index = i;
            n.properties.description = resetDescriptions(i, getGeoPins(n.properties.lng, n.properties.lat, null));
            i++;
        });
        map.getSource('targets').setData(pins);
        popup.remove();

    });

    $(document).on('click', '.request-address', function() {
        index = $(this).attr('rel');
        lng = pins.features[index].properties.lng;
        lat = pins.features[index].properties.lat;

        var queryURL = GEO_CODING_URL + lng + "," + lat + ".json?types=poi&access_token=" + mapboxgl.accessToken;
        var placeName = "No Address Found";
        $.get(queryURL, function(data, err) {
            if (data.features.length != 0) {
                placeName = data.features[0].place_name
            }
            if (err !== "success") console.error(err);
            var address = "<p><button title='Remove Pin' id='remove-pin-btn' class='remove-pin' rel=" + index + "><i class='far fa-trash-alt'></i></button>&nbsp;<button title='Center Location' id='flyto-pin-btn' class='flyto-pin' rel=" + index + "><i class='fas fa-crosshairs'></i></button></p><p><strong>LatLng : </strong>" + lng + "," + lat + "</p><p><strong>Address : </strong>" + placeName + "</p>";
            pins.features[index].properties.description = address;
            map.getSource('targets').setData(pins);
            $('.popup-' + index).empty();
            $('.popup-' + index).append(address);
        });
    });

    $(document).on('click', '.flyto-pin', function() {
        index = $(this).attr('rel');
        lng = pins.features[index].properties.lng;
        lat = pins.features[index].properties.lat;
        map.flyTo({
            center: [lng, lat],
            zoom: 16,
        });
    });

    $(document).on('click', '.remove-all-pin', function() {
        pins = {
            'type': 'FeatureCollection',
            'features': []
        };

        geo_pins = {
            'type': 'FeatureCollection',
            'features': []
        };

        geo_raw_pins = [];

        map.getSource('targets').setData({
            type: "FeatureCollection",
            features: [{
                type: "Feature",
                properties: {},
                geometry: {
                    type: "LineString",
                    coordinates: []
                }
            }]
        });
        document.getElementById("geo-geojson").value = JSON.stringify(geo_pins, null, 4);
        document.getElementById("geo-ram").value = [];
        document.getElementById("latlong-input").value = '';
    });

    $('#pin-color-picker').colorpicker().on('changeColor', function(ev) {
        map.setPaintProperty('points', 'text-color', ev.color.toHex());
    });


    function onMove(e) {
        var coords = e.lngLat;
        getCursorHandler('grabbing_select');
        pins.features[drag_index].geometry.coordinates = getGeoPins(coords.lng, coords.lat, null);
        pins.features[drag_index].properties.lng = coords.lng;
        pins.features[drag_index].properties.lat = coords.lat;

        geo_pins.features[drag_index].geometry.coordinates = getGeoPins(coords.lng, coords.lat, null);
        geo_raw_pins[drag_index] = "\n" + getGeoPins(coords.lng, coords.lat, null);

        pins.features[drag_index].properties.description = resetDescriptions(drag_index, getGeoPins(coords.lng, coords.lat, null)),

            map.getSource('targets').setData(pins);
        document.getElementById("geo-geojson").value = JSON.stringify(geo_pins, null, 4);
        document.getElementById("geo-ram").value = geo_raw_pins;
    }

    function onUp(e) {
        getCursorHandler('pin_select');
        // Unbind mouse/touch events
        map.off('mousemove', onMove);
        map.off('touchmove', onMove);
    }

    function pinFontSize() {
        map.setLayoutProperty('points', 'icon-size', $('.pin-font').val());
    }

};