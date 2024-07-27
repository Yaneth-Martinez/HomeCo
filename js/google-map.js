function myMap() {
	var mapProp= {
		center:new google.maps.LatLng(20.723849,-100.4407629),
		zoom:10
	};
	
	var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
}