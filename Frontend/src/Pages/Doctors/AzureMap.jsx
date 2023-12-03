import "mapbox-gl/dist/mapbox-gl.css";
import Map, {
  Marker,
  NavigationControl,
  Popup,
  FullscreenControl,
  GeolocateControl,
} from "react-map-gl";
import { useState } from "react";
import * as geoData from "./hospital.json";

function App() {
  const [lng, setLng] = useState(79.088158);
  const [lat, setLat] = useState(21.145800);
  const [popupInfo, setPopupInfo] = useState(null);
  
  return (
    <div className="mt-10 w-5/6 container mx-auto p-4">
    <div className="mt-6">
    {/* {console.log(process.env.REACT_APP_MAP_KEY)} */}
      <Map
        mapboxAccessToken="pk.eyJ1IjoiYXRoYXJ2YS1tYWxvZGUiLCJhIjoiY2xtdnR0eHZzMHV4dTJ3cXA5eGhxNm5lZCJ9.yZhPGAV3h3kMTMnCiUN5Kg"
        style={{
          width: "800px",
          height: "600px",
          borderRadius: "15px",
          // left: "100px",
          // border: "2px",
          
        }}
        initialViewState={{
          longitude: lng,
          latitude: lat,
          zoom: 11.5,
        }}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        className="container mx-auto p-4"
        
      >
        {/* <Marker longitude={lng} latitude={lat}  
        /> */}
        {geoData.features.map((feature, i) => {
            const [longitude, latitude] = feature.geometry.coordinates;
            return (
              <Marker 
                key={i} 
                longitude={longitude} 
                latitude={latitude}
                onClick={() => 
                  setPopupInfo({
                    ...feature.properties,
                    longitude: longitude,
                    latitude: latitude
                  })}
              />
            );
          })}
          {popupInfo && (
            <Popup
              tipSize={5}
              anchor="top"
              longitude={popupInfo.longitude}  // Use longitude and latitude from the popupInfo 
              latitude={popupInfo.latitude} 
              closeOnClick={false}
              onClose={() => setPopupInfo(null)} // To hide the Popup when it's closed
            >
              <div>
                <h3>{popupInfo.NAME}</h3>  // Use NAME and DESCRIPTIO from the popupInfo 
                <p>{popupInfo.DESCRIPTIO}</p>
              </div>
            </Popup>
          )}  
        {/* popup={<h>Dr.sudhhir</h>} */}
        <NavigationControl position="bottom-right" />
        <FullscreenControl />

        <GeolocateControl />
      </Map>
    </div>
    </div>
  );
}

export default App;
// import React, { useRef, useEffect } from 'react';
// import { AzureMap, AzureMapsProvider } from 'react-azure-maps';
// import { AuthenticationType, atlas } from 'azure-maps-control';

// const option = {
//   authOptions: {
//     authType: AuthenticationType.subscriptionKey,
//     subscriptionKey: 'jubHKtZyn_no7UUfB3B2_ulQuHyGAKkkTGoCo2TWoig',
//   },
// };
// const DefaultMap = () => {
//   const mapRef = useRef();
//   return (
//     <div className="mt-10 w-5/6 container mx-auto p-4">
//       <div className="map-container">
//         <AzureMapsProvider>
//           <AzureMap options={option} version="3.0.0"
//             cameraOptions={{
//               center: [79.04, 21.15],
//               zoom: 10,
//             }}
//             mapRef={mapRef}
//           >
            
//           </AzureMap>
//         </AzureMapsProvider>
//       </div>
//     </div>
//   );
// };

// export default DefaultMap;
