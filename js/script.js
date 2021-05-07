function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }


let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -84.2448377, lng: 10.0761498 },
        zoom: 8,
    });
}