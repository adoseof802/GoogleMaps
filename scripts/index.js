//Create arrow function to bind events to elements in lieu of addEventListener.
var attachEvent = (target, event, callback) => target.addEventListener(event, callback);

//Search place by the given coordinates. (Convert input from string to float)
var getPlace = (latitude, longitude) => {
    place = {
        lat: parseFloat(latitude),
        lng: parseFloat(longitude)
    }
    return place;
}

//Event fires when the button is clicked.
var onViewMap = () => {
    //Get the element with the id "map" -> <div id="map"></div>
    let mapPlaceholder = document.getElementById("map");

    //Get the values provided in both textboxes respectively.
    let latitude = document.getElementById("txtLatitude").value;
    let longitude = document.getElementById("txtLongitude").value;

    //Validate input accordingly, ensuring that both textboxes are complete.
    if (latitude != "" && longitude != "") {
        //Pass the inputs as arguments to search for the place via Google Maps.
        var place = getPlace(latitude, longitude); //var not let because it would only be accessible within this if statement.

        //Show the place on the map with the given options.
        let map = new google.maps.Map(mapPlaceholder, {
            zoom: 17,
            center: place
        });

        //Mark the position of the place on the map.
        new google.maps.Marker({
            position: place,
            map: map
        });
    } else {
        //Present a simple warning, prompting user to enter the coordinates properly.
        alert("Make sure you have provided both latitude and longitude values respectively!");
    }
};

var onWindowLoaded = () => {
    //Get the View map button by its ID.
    let btnViewMap = document.getElementById("btnViewMap");
    attachEvent(btnViewMap, "click", onViewMap);
};

//Event fires up whenever webpage has finished loading.
attachEvent(window, "load", onWindowLoaded);