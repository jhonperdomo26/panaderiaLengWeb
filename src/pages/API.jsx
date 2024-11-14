import { Fragment, useState } from "react";
import { GoogleMap, useLoadScript, MarkerF, InfoWindowF,} from "@react-google-maps/api";
import { Flex } from "antd";
import styled from "@emotion/styled";

const markers = [
  {
    id: 1,
    name: "Cra17b #51a",
    position: { lat: 2.955533, lng: -75.286687 },
  },
  {
    id: 2,
    name: "Cl. 22a Sur #24-2 a 24-90",
    position: { lat: 2.907675, lng: -75.272684 },
  },
  {
    id: 3,
    name: "calle 16#7-120",
    position: { lat: 2.934373, lng: -75.288533 },
  },
];

const H1 = styled.h1`
  margin: 1%;
  font-size: 26px;
`;

const API = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAP_API_KEY,
  });

  const [activeMarker, setActiveMarker] = useState(null);

  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

  return (
    <Fragment>
      <div>
        <Flex align="center" justify="space-evenly">
         <H1>Ubicaciones de nuestras panaderias</H1>
        </Flex>
        <Flex align="center" justify="space-evenly">
         
        
        <div style={{ width: "98%", height: "93vh" }}>
          {isLoaded ? (
            <GoogleMap
              center={{ lat: 2.9289, lng: -75.28189 }}
              zoom={13}
              onClick={() => setActiveMarker(null)}
              
              mapContainerStyle={{ width: "100%", height: "90vh" }}
            >
              {markers.map(({ id, name, position }) => (
                <MarkerF
                  key={id}
                  position={position}
                  onClick={() => handleActiveMarker(id)}
                >
                  {activeMarker === id ? (
                    <InfoWindowF onCloseClick={() => setActiveMarker(null)}>
                      <div>{name}</div>
                    </InfoWindowF>
                  ) : null}
                </MarkerF>
              ))}
            </GoogleMap>
          ) : null}
        </div>
        </Flex>
      </div>
    </Fragment>
  );
};

export default API;
