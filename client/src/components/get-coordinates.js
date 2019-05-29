export function GetCoordinates(){
  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
  
  function success(pos) {
    const crd = pos.coords;
    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);

    //sets these coordinates into redux state
    sessionStorage.setItem('lat:long', `${crd.latitude}:${crd.longitude}`);
  };
  
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  };
  
  if (navigator.geolocation) { // Supported
    navigator.geolocation.watchPosition(success, error, options);
  } else { // Not supported
	  alert("Oops! This browser does not support HTML Geolocation.");
  }
}