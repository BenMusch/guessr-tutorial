import "./App.css";

import "mapbox-gl/dist/mapbox-gl.css";

import { useState } from "react";
import { Map } from "react-map-gl";

const initialViewState = {
  longitude: -71.0593,
  latitude: 42.35,
  zoom: 10,
};

function GameplayMap() {
  const [guess, setGuess] = useState(null);
  return (
    <Map
      style={{ width: 600, height: 400 }}
      mapStyle="mapbox://styles/mapbox/streets-v9"
      initialViewState={initialViewState}
      maxZoom={12}
      minZoom={8.5}
    />
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
