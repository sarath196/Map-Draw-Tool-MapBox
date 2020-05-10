var lineStringMode = function(map, draw) {
    // Line tool
    $(document).on('click', '.line-tool', function() {
        line_style = this.rel;
        draw.changeMode('simple_select');
        draw.changeMode('draw_line_string');
        getCursorHandler(cursor_handler[0]);
        control_handler = 'line_string';
    });

    $(document).on('click', '.line-select', function() {
        draw.changeMode('simple_select');
        map.getCanvas().style.cursor = 'pointer';
        control_handler = 'line_string';
    });

    $('#line-color-picker').colorpicker().on('changeColor', function(ev) {
        if (draw.getSelectedIds().length != 0) {
            line_color = ev.color.toHex();
            if ((draw.getSelected().features[0].properties.dashColor != undefined)) {
                draw.setFeatureProperty(draw.getSelectedIds()[0], 'lineColor', line_color);
                draw.setFeatureProperty(draw.getSelectedIds()[0], 'dashColor', invertColor(line_color));
                draw.add(draw.get(draw.getSelectedIds()));
            } else {
                draw.setFeatureProperty(draw.getSelectedIds()[0], 'lineColor', line_color);
                draw.add(draw.get(draw.getSelectedIds()));
            }
        }
    });

    $(document).on('click', '.remove-all-lines', function() {
        if (draw.getAll().features.length != 0) {
            draw.getAll().features.forEach(function(n) {
                if (n.geometry.type == "LineString") {
                    draw.delete(n.id);
                }
            });
        }
    });

    $(document).on('click', '.remove-all-line', function() {
        if (draw.getSelectedIds().length != 0) {
            if (draw.getSelected().features[0].geometry.type == "LineString") {
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


};