var findPlaceMode = function(map) {
    //Find Nearby Place
    document.getElementById("find-place-geocode-search").addEventListener("keyup", event => {
        console.log("work")
        var geo_code = document.getElementById("find-place-geocode-search").value;
        if (sessionStorage.getItem("GeoCodeSearch") == 'code') {
            lnglat = geo_code.split(',');
            if (lnglat.length == 2) {
                if ($.isNumeric(lnglat[0]) && $.isNumeric(lnglat[1])) {
                    console.log(geo_code.split(','));
                    var queryURL = GEO_CODING_URL + lnglat[0] + "," + lnglat[1] + ".json?types=poi&access_token=" + mapboxgl.accessToken;
                    getGeoCodeByName(queryURL);
                }
            }
        } else {
            if (geo_code.length > 3) {
                var queryURL = GEO_CODING_URL + geo_code + ".json?access_token=" + mapboxgl.accessToken;
                getGeoCodeByName(queryURL);
            }
        }

    });

    $(document).on('click', '.find-place-search-result', function() {
        //var lng = $(this).data('lng');
        //var lat = $(this).data('lat');
        //var text = $(this).html();

        var category = $('.find-place-category').val();
        var distance = $('.find-place-distance').val();

        console.log(category);
        console.log(distance);

        //$('#find-place-geocode-search').val(text);
        //$('.dropdown-content').empty();

        //map.flyTo({
        //  center: [lng, lat],
        //zoom: 16,
        //});

        //map.getSource("geo-code-targets").setData(turf.featureCollection([turf.point([lng, lat])]));


    });

    var getGeoCodeByName = function(queryURL) {
        $.get(queryURL, function(data, err) {
            if (err !== "success") console.error(err);
            $('.find-place-search-result').empty();
            data.features.forEach(function(n) {
                $('.find-place-search-result').append("<a href='javascript:' class='find-place-result'  data-lng=" + n.geometry.coordinates[0] + " data-lat=" + n.geometry.coordinates[1] + ">" + n.place_name + "</a>")
            });
        });
    };

}