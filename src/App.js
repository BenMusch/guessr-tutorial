import "./App.css";

import "mapbox-gl/dist/mapbox-gl.css";

import _ from "lodash";
import { useState } from "react";
import { Map, Marker } from "react-map-gl";

import allStations from "./data";

const mapStyle = {
  version: 8,
  name: "Basic",
  metadata: {
    "mapbox:autocomposite": true,
  },
  sources: {
    transit: {
      url: "mapbox://mapbox.transit-v2",
      type: "vector",
    },
    mapbox: {
      url: "mapbox://mapbox.mapbox-streets-v7",
      type: "vector",
    },
  },
  sprite: "mapbox://sprites/mapbox/basic-v8",
  glyphs: "mapbox://fonts/mapbox/{fontstack}/{range}.pbf",
  layers: [
    {
      id: "background",
      type: "background",
      paint: {
        "background-color": "#e5e7eb",
      },
      interactive: true,
    },
    {
      id: "landuse_park",
      type: "fill",
      source: "mapbox",
      "source-layer": "landuse",
      filter: ["==", "class", "park"],
      paint: {
        "fill-color": "#d1d5db",
      },
      interactive: true,
    },
    {
      id: "water",
      type: "fill",
      source: "mapbox",
      "source-layer": "water",
      paint: {
        "fill-color": "#9ca3af",
      },
      interactive: true,
    },
  ],
};

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

function GameplayMap(props) {
  const [guess, setGuess] = useState(null);
  const [isGuessConfirmed, setIsGuessConfirmed] = useState(false);
  const station = props.station;

  let guessMarker = null;
  if (guess !== null) {
    guessMarker = (
      <Marker longitude={guess.longitude} latitude={guess.latitude} />
    );
  }

  let confirmGuessButton = null;
  let stationMarker = null;
  let scoreDisplay = null;
  let nextButton = null;
  if (isGuessConfirmed) {
    const score = getScore(guess, station);
    // only show the station once the user confirms their guess
    stationMarker = (
      <Marker
        longitude={station.longitude}
        latitude={station.latitude}
        color="red"
      />
    );
    scoreDisplay = <p>Score: {score}</p>;
    nextButton = (
      <button
        onClick={() => {
          setIsGuessConfirmed(false);
          setGuess(null);
          props.onNext({
            latitude: guess.latitude,
            longitude: guess.longitude,
            score: score,
          });
        }}
      >
        Next round
      </button>
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
        mapStyle={mapStyle}
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
      {nextButton}
    </div>
  );
}

function Game(props) {
  const stations = props.stations;
  const [guesses, setGuesses] = useState([]);

  const currentRound = guesses.length;
  const currentStation = stations[currentRound];
  let currentScore = 0;
  for (const guess of guesses) {
    currentScore += guess.score;
  }

  const isGameOver = guesses.length === 5;

  if (isGameOver) {
    return (
      <div>
        <h1>Game over!</h1>
        <h1>Score: {currentScore}</h1>
        <button onClick={() => window.location.reload()}>Play again</button>
      </div>
    );
  }

  return (
    <div>
      <h3>Round {currentRound + 1} of 5</h3>
      <h3>Score: {currentScore}</h3>
      <GameplayMap
        station={currentStation}
        onNext={(guessData) => {
          // this "..." in front of guesses is called the "spread operator",
          // and it will take every element from the guesses list and add it into the array
          // for example, [...[1, 2], 3] would result in [1, 2, 3]
          setGuesses([...guesses, guessData]);
        }}
      />
    </div>
  );
}

function App() {
  const stations = _.sampleSize(allStations, 5);

  return (
    <div>
      <center>
        <Game stations={stations} />
      </center>
    </div>
  );
}

export default App;
