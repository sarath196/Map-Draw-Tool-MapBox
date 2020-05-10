var createMapLayers = function(map, pins) {

    map.addSource("targets", {
        type: "geojson",
        data: pins
    });

    map.addSource("geo-code-targets", {
        type: "geojson",
        data: pins
    });

    map.addLayer({
        id: "targets-shadow",
        source: "targets",
        type: "circle",
        paint: {
            "circle-color": "#7a7a7c",
            "circle-radius": 10,
            "circle-blur": 1,
            "circle-opacity": 1
        }
    });


    map.addLayer({
        'id': 'points',
        'type': 'symbol',
        'source': "targets",
        'layout': {
            'icon-image': "{icon}",
            'icon-size': 1,
            "icon-allow-overlap": true,
            "text-field": "{pinIndex}",
            "icon-offset": [0, -16],
            "text-offset": [0, -1.2],
            "text-size": 15,
        },
        "paint": {
            "text-color": "#d35400"
        }
    });

    map.addLayer({
        'id': 'geo-code-targets',
        'type': 'symbol',
        'source': "geo-code-targets",
        'layout': {
            'icon-image': "marker-15",
            'icon-size': 1,
        },
        "paint": {
            "text-color": "#d35400"
        }
    });

    return map
};