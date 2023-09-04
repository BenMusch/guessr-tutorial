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

// calculate distance in meters using https://www.movable-type.co.uk/scripts/latlong.html
function distanceInMeters(a, b) {
  const lng1 = a.longitude;
  const lng2 = b.longitude;
  const lat1 = a.latitude;
  const lat2 = b.latitude;

  const a1 = (lat1 * Math.PI) / 180;
  const a2 = (lat2 * Math.PI) / 180;

  const deltaA1A2 = ((lat2 - lat1) * Math.PI) / 180;
  const deltaLambda = ((lng2 - lng1) * Math.PI) / 180;

  const res =
    Math.sin(deltaA1A2 / 2) ** 2 +
    Math.cos(a1) * Math.cos(a2) * Math.sin(deltaLambda / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(res), Math.sqrt(1 - res));
  return 6371e3 * c;
}

/**
 * Calculate the score of a guess with the maximum score of 5,000
 * Scoring uses a quadratic function to reward being very close. At 15,000 meters
 * away, the score becomes 0
 */
export function getScore(guess, actualLocation) {
  const distance = distanceInMeters(guess, actualLocation);

  return Math.round((5000 / 15000 ** 2) * Math.max(15000 - distance, 0) ** 2);
}

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
  let scoreDisplay = null;
  if (isGuessConfirmed) {
    // only show the station once the user confirms their guess
    stationMarker = (
      <Marker
        longitude={station.longitude}
        latitude={station.latitude}
        color="red"
      />
    );
    scoreDisplay = <p>Score: {getScore(guess, station)}</p>;
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
      {scoreDisplay}
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
