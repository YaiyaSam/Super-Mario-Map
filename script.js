function initMap(){
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 34.66755050889535, lng: 135.43034779387654},
        zoom: 15.9,
        mapId: '2068def5523f7cd',
        mapTypeControl: false,
        fullscreenControl: false,
        streetViewControl: false
    });

    const markers = [
        [
            "Yoshi\'s House",
            34.66812484637498, 135.43032035029944,
            "assets/yoshi-house.svg",
            38,
            31
        ],
        [
            "Castle",
            34.666616447444284, 
            135.42828019156497,
            "assets/castle.svg",
            45,45
        ],
        [
            "Ghosthouse",
            34.668353638042326,
            135.43472704027394,
            "assets/ghosthouse.svg",
            40,
            40
        ],
        [
            "Hill with Eyes",
            34.66957684366239, 
            135.42791214693221,
            "assets/hill-with-eyes.svg",
            43, 43
        ],
        [
            "Pipe",
            34.666876690143084, 
            135.43231990846877,
            "assets/pipe.svg",
            38,
            31
        ],
        [
            "Star",
            34.66980185248311, 135.43040481207703,
            "assets/star.svg",
            43,43
        ]
    ];

    for(let i =0; i<markers.length; i++)
    {
        const currMarker = markers[i]
        const marker = new google.maps.Marker({
            position: { lat: currMarker[1], lng: currMarker[2] },
            map,
            title: currMarker[0],
            icon: {
                url: currMarker[3],
                scaledSize: new google.maps.Size(currMarker[4],currMarker[5])
            },
            animation: google.maps.Animation.DROP
       });

        const infowindow = new google.maps.InfoWindow({
            content: currMarker[0],
        });
    
        marker.addListener("click", () => {
            infowindow.open({
            anchor: marker,
            map,
            shouldFocus: false,
            });
        });
    }

    
}


