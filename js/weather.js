const API_KEY = "f16f4f6e07e28690c025c4980a9b6c23";
function onGeoOk(position) {
  const lat = position.coords.latitude;
  const long = position.coords.longitude;
  console.log(lat, long);
}

function onGeoError() {
  alert("can't find you. NO weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
