var geoCodeSearch = function(map) {
    //GeoCodeSearch
    document.getElementById("geocode-search").addEventListener("keyup", event => {
        var geo_code = document.getElementById("geocode-search").value;
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


    $(document).on('click', '.geo-code-result', function() {
        var lng = $(this).data('lng');
        var lat = $(this).data('lat');
        var text = $(this).html()

        $('#geocode-search').val(text);
        $('.dropdown-content').empty();

        map.flyTo({
            center: [lng, lat],
            zoom: 16,
        });

        map.getSource("geo-code-targets").setData(turf.featureCollection([turf.point([lng, lat])]));
    });

    $(document).on('click', '.close-btn', function() {
        $('#geocode-search').val("");
        $('.dropdown-content').empty();
    });

    document.getElementById("geocode-btn-change").addEventListener("click", event => {
        document.getElementById('geocode-search').value = '';
        $('.dropdown-content').empty();
        if (sessionStorage.getItem("GeoCodeSearch") == 'text') {
            sessionStorage.setItem("GeoCodeSearch", "code");
            $('#geocode-btn-change').addClass("btn-select");
            document.getElementById('geocode-search').placeholder = 'Search by coordinates lng, lat';
        } else if (sessionStorage.getItem("GeoCodeSearch") == 'code') {
            sessionStorage.setItem("GeoCodeSearch", "text");
            $('#geocode-btn-change').removeClass("btn-select");
            document.getElementById('geocode-search').placeholder = 'Search by locations';
        }
    });

    var getGeoCodeByName = function(queryURL) {
        $.get(queryURL, function(data, err) {
            if (err !== "success") console.error(err);
            $('.geo-search-result').empty();
            data.features.forEach(function(n) {
                $('.geo-search-result').append("<a href='javascript:' class='geo-code-result'  data-lng=" + n.geometry.coordinates[0] + " data-lat=" + n.geometry.coordinates[1] + " >" + n.place_name + "</a>")
            });
        });
    };



};