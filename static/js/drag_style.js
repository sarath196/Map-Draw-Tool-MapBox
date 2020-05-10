var draw_drag_style = [
    // default themes provided by MB Draw
    // default themes provided by MB Draw
    // default themes provided by MB Draw
    // default themes provided by MB Draw


    {
        'id': 'gl-draw-polygon-fill-inactive',
        'type': 'fill',
        'filter': ['all', ['==', 'active', 'false'],
            ['==', '$type', 'Polygon'],
            ['!=', 'mode', 'static']
        ],
        'paint': {
            'fill-color': '#3bb2d0',
            'fill-outline-color': '#3bb2d0',
            'fill-opacity': 0.1
        }
    },
    {
        'id': 'gl-draw-polygon-fill-active',
        'type': 'fill',
        'filter': ['all', ['==', 'active', 'true'],
            ['==', '$type', 'Polygon']
        ],
        'paint': {
            'fill-color': '#fbb03b',
            'fill-outline-color': '#fbb03b',
            'fill-opacity': 0.1
        }
    },
    {
        'id': 'gl-draw-polygon-midpoint',
        'type': 'circle',
        'filter': ['all', ['==', '$type', 'Point'],
            ['==', 'meta', 'midpoint']
        ],
        'paint': {
            'circle-radius': 3,
            'circle-color': '#fbb03b'
        }
    },
    {
        'id': 'gl-draw-polygon-stroke-inactive',
        'type': 'line',
        'filter': ['all', ['==', 'active', 'false'],
            ['==', '$type', 'Polygon'],
            ['!=', 'mode', 'static']
        ],
        'layout': {
            'line-cap': 'round',
            'line-join': 'round'
        },
        'paint': {
            'line-color': '#3bb2d0',
            'line-width': 2
        }
    },
    {
        'id': 'gl-draw-polygon-stroke-active',
        'type': 'line',
        'filter': ['all', ['==', 'active', 'true'],
            ['==', '$type', 'Polygon']
        ],
        'layout': {
            'line-cap': 'round',
            'line-join': 'round'
        },
        'paint': {
            'line-color': '#fbb03b',
            'line-dasharray': [0.2, 2],
            'line-width': 2
        }
    },
    {
        'id': 'gl-draw-line-inactive',
        'type': 'line',
        'filter': ['all', ['==', 'active', 'false'],
            ['==', '$type', 'LineString'],
            ['!=', 'mode', 'static']
        ],
        'layout': {
            'line-cap': 'round',
            'line-join': 'round'
        },
        'paint': {
            'line-color': '#3bb2d0',
            'line-width': 3
        }
    },
    {
        'id': 'gl-draw-line-active',
        'type': 'line',
        'filter': ['all', ['==', '$type', 'LineString'],
            ['==', 'active', 'true']
        ],
        'layout': {
            'line-cap': 'round',
            'line-join': 'round'
        },
        'paint': {
            'line-color': '#faab01',
            'line-dasharray': [2, 2],
            'line-width': 2
        }
    },
    {
        'id': 'gl-draw-polygon-and-line-vertex-stroke-inactive',
        'type': 'circle',
        'filter': ['all', ['==', 'meta', 'vertex'],
            ['==', '$type', 'Point'],
            ['!=', 'mode', 'static']
        ],
        'paint': {
            'circle-radius': 5,
            'circle-color': '#fff'
        }
    },
    {
        'id': 'gl-draw-polygon-and-line-vertex-inactive',
        'type': 'circle',
        'filter': ['all', ['==', 'meta', 'vertex'],
            ['==', '$type', 'Point'],
            ['!=', 'mode', 'static']
        ],
        'paint': {
            'circle-radius': 5,
            'circle-color': '#ffd000'
        }
    },
    {
        'id': 'gl-draw-point-point-stroke-inactive',
        'type': 'circle',
        'filter': ['all', ['==', 'active', 'false'],
            ['==', '$type', 'Point'],
            ['==', 'meta', 'feature'],
            ['!=', 'mode', 'static']
        ],
        'paint': {
            'circle-radius': 5,
            'circle-opacity': 1,
            'circle-color': '#fff'
        }
    },
    {
        'id': 'gl-draw-point-inactive',
        'type': 'circle',
        'filter': ['all', ['==', 'active', 'false'],
            ['==', '$type', 'Point'],
            ['==', 'meta', 'feature'],
            ['!=', 'mode', 'static']
        ],
        'paint': {
            'circle-radius': 3,
            'circle-color': '#3bb2d0'
        }
    },
    {
        'id': 'gl-draw-point-stroke-active',
        'type': 'circle',
        'filter': ['all', ['==', '$type', 'Point'],
            ['==', 'active', 'true'],
            ['!=', 'meta', 'midpoint']
        ],
        'paint': {
            'circle-radius': 7,
            'circle-color': '#fff'
        }
    },
    {
        'id': 'gl-draw-point-active',
        'type': 'circle',
        'filter': ['all', ['==', '$type', 'Point'],
            ['!=', 'meta', 'midpoint'],
            ['==', 'active', 'true']
        ],
        'paint': {
            'circle-radius': 5,
            'circle-color': '#fbb03b'
        }
    },
    {
        'id': 'gl-draw-polygon-fill-static',
        'type': 'fill',
        'filter': ['all', ['==', 'mode', 'static'],
            ['==', '$type', 'Polygon']
        ],
        'paint': {
            'fill-color': '#404040',
            'fill-outline-color': '#404040',
            'fill-opacity': 0.1
        }
    },
    {
        'id': 'gl-draw-polygon-stroke-static',
        'type': 'line',
        'filter': ['all', ['==', 'mode', 'static'],
            ['==', '$type', 'Polygon']
        ],
        'layout': {
            'line-cap': 'round',
            'line-join': 'round'
        },
        'paint': {
            'line-color': '#404040',
            'line-width': 2
        }
    },
    {
        'id': 'gl-draw-line-static',
        'type': 'line',
        'filter': ['all', ['==', 'mode', 'static'],
            ['==', '$type', 'LineString']
        ],
        'layout': {
            'line-cap': 'round',
            'line-join': 'round'
        },
        'paint': {
            'line-color': '#f39c12',
            'line-width': 2
        }
    },
    {
        'id': 'gl-draw-point-static',
        'type': 'circle',
        'filter': ['all', ['==', 'mode', 'static'],
            ['==', '$type', 'Point']
        ],
        'paint': {
            'circle-radius': 5,
            'circle-color': '#404040'
        }
    },

    // end default themes provided by MB Draw
    // end default themes provided by MB Draw
    // end default themes provided by MB Draw
    // end default themes provided by MB Draw




    // new styles for toggling colors
    // new styles for toggling colors
    // new styles for toggling colors
    // new styles for toggling colors

    // Custom ploygon 
    {
        'id': 'gl-draw-polygon-color-picker',
        'type': 'fill',
        'filter': ['all', ['==', '$type', 'Polygon'],
            ['has', 'user_polygonColor']
        ],
        'paint': {
            'fill-color': ['get', 'user_polygonColor'],
            'fill-outline-color': ['get', 'user_polygonColor'],
            'fill-opacity': 0.5
        }
    },

    {
        'id': 'gl-draw-polygon-custom-stroke-inactive',
        'type': 'line',
        'filter': ['all', ['==', 'active', 'false'],
            ['==', '$type', 'Polygon'],
            ['!=', 'mode', 'static'],
            ['has', 'user_polygonColor'],
            ['any', ['has', 'user_polygonSize']],
        ],
        'layout': {
            'line-cap': 'round',
            'line-join': 'round'
        },
        'paint': {
            'line-color': ['get', 'user_polygonColor'],
            'line-width': ['get', 'user_polygonSize']
        }
    },



    // Custom line string
    {
        'id': 'gl-draw-line-color-picker-active',
        'type': 'line',
        'filter': ['all', ['==', '$type', 'LineString'],
            //['has', 'user_portColor']
            ['==', 'active', 'true']
        ],
        'layout': {
            'line-cap': 'square',
            'line-join': 'miter'
        },
        'paint': {
            //'line-color': ['get', 'user_portColor'],
            'line-width': 5,
            'line-color': '#fd6500', // active stock line dash
            'line-dasharray': [1, 2],
        }
    },
    {
        'id': 'gl-draw-line-color-picker-inactive',
        'type': 'line',
        'filter': ['all', ['==', 'active', 'false'],
            ['==', '$type', 'LineString'],
            ['!=', 'mode', 'static'],
            ['has', 'user_lineColor'],
            ['any', ['has', 'user_lineSize']],
        ],
        'layout': {
            'line-cap': 'round',
            'line-join': 'round'
        },
        'paint': {
            'line-color': ['get', 'user_lineColor'], // '{lineColor}', //'#fdb45f', //stock color
            'line-width': ['get', 'user_lineSize'], //3//['get', 'user_lineSize'],
            //'line-dasharray': [3, 2],
        }
    },
    {
        'id': 'gl-draw-line-inactive-custom',
        'type': 'line',
        'filter': ['all', ['==', 'active', 'false'],
            ['==', '$type', 'LineString'],
            ['!=', 'mode', 'static'],
            ['has', 'user_dashColor'],
            ['any', ['has', 'user_lineSize']],
        ],
        'layout': {
            'line-cap': 'round',
            'line-join': 'round'
        },
        'paint': {
            'line-color': ['get', 'user_dashColor'], //'{dashColor}', //'#3498db',  //blue line
            'line-width': ['get', 'user_lineSize'],
            'line-dasharray': [5, 5]
        }
    },






    {
        'id': 'gl-draw-point-color-picker',
        'type': 'symbol',
        'filter': ['all', ['==', '$type', 'Point'],
            ['has', 'user_icon']
        ],
        'layout': {
            'icon-image': ['get', 'user_icon'],
        },
        'paint': {
            //'circle-radius': 3,
            //'circle-color': ['get', 'user_portColor']
        }
    },

]