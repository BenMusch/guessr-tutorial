import "./App.css";

import "mapbox-gl/dist/mapbox-gl.css";

import _ from "lodash";
import { useState } from "react";
import { Map, Marker } from "react-map-gl";

import allStations from "./data";

const initialViewState = {
  longitude: -71.0593,
  latitude: 42.35,
  zoom: 10,
};

function GameplayMap() {
  const [guess, setGuess] = useState(null);
  const [isGuessConfirmed, setIsGuessConfirmed] = useState(false);
  const station = _.sample(allStations);

  let guessMarker = null;
  if (guess !== null) {
    guessMarker = (
      <Marker longitude={guess.longitude} latitude={guess.latitude} />
    );
  }

  let confirmGuessButton = null;
  let stationMarker = null;
  if (isGuessConfirmed) {
    // only show the station once the user confirms their guess
    stationMarker = (
      <Marker
        longitude={station.longitude}
        latitude={station.latitude}
        color="red"
      />
    );
  } else {
    confirmGuessButton = (
      <button
        onClick={() => {
          setIsGuessConfirmed(true);
        }}
      >
        Confirm
      </button>
    );
  }

  return (
    <div>
      <h1>{station.name}</h1>

      <Map
        style={{ width: 800, height: 800 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        initialViewState={initialViewState}
        maxZoom={14}
        minZoom={8.5}
        onClick={(eventData) => {
          if (!isGuessConfirmed) {
            setGuess({
              longitude: eventData.lngLat.lng,
              latitude: eventData.lngLat.lat,
            });
          }
        }}
      >
        {guessMarker}
        {stationMarker}
      </Map>

      {confirmGuessButton}
    </div>
  );
}

function App() {
  return (
    <div>
      <GameplayMap />
    </div>
  );
}

export default App;
