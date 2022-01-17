import React, { useState } from 'react';
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from '@react-google-maps/api';
import { FaBasketballBall } from 'react-icons/fa';
import API_KEY from '../env.local';

const containerStyle = {
  width: '300px',
  height: '300px',
};

function SimpleMap({ pitch }) {
  const [isOpen, setIsOpen] = useState(false);
  const infoString = `{pitch.name} {pitch.rating}`;
  const center = {
    lat: 31.252973,
    lng: 34.791462,
  };

  return (
    <LoadScript googleMapsApiKey={API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={13}>
        <Marker
          position={{ lat: pitch.lat, lng: pitch.lng }}
          onClick={() => setIsOpen(!isOpen)}
          clickable='true'
        />
        {isOpen && (
          <InfoWindow
            position={{ lat: pitch.lat, lng: pitch.lng }}
            content={infoString}
            onCloseClick={() => setIsOpen(!isOpen)}
          >
            <FaBasketballBall />
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
}

export default SimpleMap;
