import GoogleMapReact from 'google-map-react';
import Geocode from 'react-geocode';
import { Wrapper, Status } from '@googlemaps/react-wrapper';

export default function PitchMap({ pitch }) {
  const location = {
    lat: 0,
    lng: 0,
  };
  Geocode.fromAddress(pitch.address).then(
    (response) => {
      location = response.results[0].geometry.location;
    },
    (error) => {
      console.error(error);
    }
  );

  return (
    <div style={{ display: 'flex', height: '100%' }}>
      <Wrapper apiKey={'key'}>
        <Map
          center={center}
          onClick={onClick}
          onIdle={onIdle}
          zoom={zoom}
          style={{ flexGrow: '1', height: '100%' }}
        >
          {clicks.map((latLng, i) => (
            <Marker key={i} position={latLng} />
          ))}
        </Map>
      </Wrapper>
    </div>
  );
}
