var x = document.getElementById("demo");
var City = document.querySelector('.city');
var Region = document.querySelector('.region');
var Organization = document.querySelector('.organization');
var Latitude = document.querySelector('.latitude');
var Longitude = document.querySelector('.longitude');
var HostName = document.querySelector('.hostname');
var Timezone = document.querySelector('.timezone');


var Pincode = document.querySelector('.pincode');
var Message = document.querySelector('.message');
    
    function getLocation() {
     
     fetch('https://ipinfo.io/122.161.87.155/geo')
     .then(response=>  response.json())
     .then(data => {
        var cityValue = ` City Name : ${data['city']}`;
        var regionValue = ` Region :${data['region']}`;
        var organizationValue =`Organisation :${data['org']}`;
        var latitudeValue = `Lat : ${data['loc']}`;
        var hostnameValue = `Hostname : ${data['hostname']}`
        const myArray = latitudeValue.split(",");
        var timezoneValue = `Time Zone : ${data['timezone']}`
        


        City.innerHTML = cityValue;
        Region.innerHTML = regionValue;
        Organization.innerHTML = organizationValue;
        Latitude.innerHTML = myArray[0];
        Longitude.innerHTML = `Long: ${myArray[1]}`;
        HostName.innerHTML = hostnameValue;
        Timezone.innerHTML = timezoneValue;
     })
     .catch((error)=>{
        console.log(error)
     })

     fetch('https://api.postalpincode.in/pincode/')
     .then(resolve => resolve.json())
     .then(user => {
       console.log(user)})
       .catch(error => 
        console.log(error))


    if (navigator.geolocation) { navigator.geolocation.getCurrentPosition(showPosition);
    
    } else { x.innerHTML = "Geolocation is not supported by this browser.";
    
    }
    
    function showPosition(position) {
    
    x.innerHTML="Latitude: "+ position.coords.latitude +
    
    "<br>Longitude: " + position.coords.longitude;
    

    
    }}