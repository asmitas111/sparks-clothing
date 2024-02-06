import React from 'react';

const JsDemo = () => {
const handleSavePincode = event =>{
  var enteredPin = document.getElementById("pinInput").value;
  //var enteredPinItem = document.createElement("pincode");
  //var textPin = document.createTextNode("enteredPin");
  localStorage.setItem("pin", enteredPin); 
  document.getElementById("pincode").innerHTML = localStorage.getItem("pin")
  //enteredPinItem.append(textPin);
  //spanEle.appendChild(enteredPinItem)
}


  const handlePincode = () => {
      if(localStorage != null)
       document.getElementById("pincode").innerText = localStorage.getItem("pin");
      else
      document.getElementById("pincode").innerText ="";
    }
    
  const handleDeletePincode = event => {
      localStorage.removeItem("pin");
      document.getElementById("pincode").innerHTML = localStorage.getItem("pin")
    }
    
  const handleLocateMe = () => {
       // firing screen permission
       navigator.geolocation.getCurrentPosition(locationAccessGranted, locationAccessDenied)
    }
    
  const locationAccessGranted = position => {
      console.log('inside  locationAccessGranted');
      console.log(position)
      document.getElementById('latitude').innerText = position.coords.latitude;
      document.getElementById('longitude').innerText = position.coords.longitude;
    }
    
    const locationAccessDenied = () => {
      console.log('inside  locationAccessDenied');
    }

return (
 <div onLoad = {handlePincode}>
  <h1> JS API - Demo</h1>
  <h2>Web Storage | Demo</h2>
  <div>
  <input type="text" placeholder="Enter Pincode" id="pinInput" />
  <button onClick="{handleSavePincode}">Save Pincode</button>
</div>

  <p>
    Entered Pincode:
    <span id="pincode" onLoad={handleSavePincode} />
    <button onClick={handleDeletePincode}>Delete Pincode</button>
  </p>
  <hr />
  <h2>Geo Location | Demo</h2>
  <button onClick={handleLocateMe}>Locate Me</button>
  <div id="userLocation">
    Latitude is: <p id="latitude" />
    Longitude is: <p id="longitude" />
  </div>
  <hr />
</div>
)
}

export default JsDemo;