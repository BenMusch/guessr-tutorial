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
  const station = _.sample(allStations);

  let guessMarker = null;
  let guessMessage = null;
  if (guess !== null) {
    guessMarker = (
      <Marker longitude={guess.longitude} latitude={guess.latitude} />
    );
    guessMessage = (
      <p>
        Current guess is at longitude={guess.longitude} latitude=
        {guess.latitude}
      </p>
    );
  }

  return (
    <div>
      <h1>{station.name}</h1>
      <Map
        style={{ width: 800, height: 800 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        initialViewState={initialViewState}
        maxZoom={12}
        minZoom={8.5}
        onClick={(eventData) => {
          setGuess({
            longitude: eventData.lngLat.lng,
            latitude: eventData.lngLat.lat,
          });
        }}
      >
        {guessMarker}
      </Map>

      {guessMessage}
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
