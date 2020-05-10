var polygonStringMode = function(map, draw) {
    //Poligon tool
    $(document).on('click', '.polygon-tool', function() {
        line_style = this.rel;
        draw.changeMode('simple_select');
        draw.changeMode('draw_polygon');
        getCursorHandler(cursor_handler[0]);
        control_handler = 'draw_polygon';
    });

    //Circle tool
    $(document).on('click', '.circle-tool', function() {
        line_style = this.rel;
        draw.changeMode('simple_select');
        draw.changeMode('drag_circle');
        getCursorHandler(cursor_handler[0]);
        control_handler = 'draw_circle';
    });

    //Rectangle tool
    $(document).on('click', '.square-tool', function() {
        line_style = this.rel;
        draw.changeMode('simple_select');
        draw.changeMode('draw_rectangle');
        getCursorHandler(cursor_handler[0]);
        control_handler = 'draw_rectangle';
    });

    //Common util
    $(document).on('click', '.polygon-select', function() {
        draw.changeMode('simple_select');
        map.getCanvas().style.cursor = 'pointer';
        control_handler = 'draw_polygon';
    });

    $('#polygon-color-picker').colorpicker().on('changeColor', function(ev) {
        if (draw.getSelectedIds().length != 0) {
            polygon_color = ev.color.toHex();
            //if ((draw.getSelected().features[0].properties.dashColor != undefined)) {

            draw.setFeatureProperty(draw.getSelectedIds()[0], 'polygonColor', polygon_color);
            draw.add(draw.get(draw.getSelectedIds()));
            //}
        }
    });

    $(document).on('click', '.remove-all-polygons', function() {
        if (draw.getAll().features.length != 0) {
            draw.getAll().features.forEach(function(n) {
                if (n.geometry.type == "Polygon") {
                    draw.delete(n.id);
                }
            });
        }
    });

    $(document).on('click', '.remove-all-polygon', function() {
        if (draw.getSelectedIds().length != 0) {
            if (draw.getSelected().features[0].geometry.type == "Polygon") {
                draw.delete(draw.getSelectedIds()[0]);
            }
        }
    });

    $(".line-font").change(function() {
        if (draw.getSelectedIds().length != 0) {
            line_size = parseInt($('.line-font').val());
            draw.setFeatureProperty(draw.getSelectedIds()[0], 'lineSize', line_size);
            draw.add(draw.get(draw.getSelectedIds()));
        }
    });

    $(".polygon-font").change(function() {
        if (draw.getSelectedIds().length != 0) {
            poly_size = parseInt($('.polygon-font').val());
            draw.setFeatureProperty(draw.getSelectedIds()[0], 'polygonSize', poly_size);
            draw.add(draw.get(draw.getSelectedIds()));
        }
    });
};