import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

function Map() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyB3CkY-BSe3Kcma80JQI_e8pQi5wnZi6_M",
  });

  return (
    <div className={{ height: "350px" }}>
      {isLoaded ? (
        <GoogleMap
          mapContainerStyle={{ width: "300px", height: "300px" }}
          center={{ lat: -29.786220054239926, lng: -55.786490031607634 }}
          zoom={15}
        />
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default Map;
