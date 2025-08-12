npm install react-simple-maps

// WorldMap.tsx
import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps";
import styles from "./WorldMap.module.css";

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

const markers = [
  { name: "Cork", coordinates: [-8.4863, 51.8969] },
  { name: "Dammam", coordinates: [50.103, 26.4207] },
  { name: "Dubai (HQ)", coordinates: [55.2708, 25.2048] },
  { name: "Abu Dhabi", coordinates: [54.3773, 24.4539] },
  { name: "Kerala", coordinates: [76.2711, 10.8505] },
];

export default function WorldMap() {
  return (
    <div className={styles.mapWrapper}>
      <ComposableMap projectionConfig={{ scale: 150 }}>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#F3F4F6"
                stroke="#D1D5DB"
                strokeWidth={0.5}
              />
            ))
          }
        </Geographies>

        {markers.map(({ name, coordinates }) => (
          <Marker key={name} coordinates={coordinates}>
            <g transform="translate(-12, -24)">
              <path
                fill="#F59E0B"
                d="M12 0C5.4 0 0 5.4 0 12c0 9 12 24 12 24s12-15 12-24c0-6.6-5.4-12-12-12z"
              />
              <circle cx="12" cy="12" r="5" fill="white" />
            </g>
            <text
              textAnchor="middle"
              y={-30}
              style={{ fontFamily: "system-ui", fontSize: "12px", fontWeight: "bold" }}
            >
              {name}
            </text>
          </Marker>
        ))}
      </ComposableMap>
    </div>
  );
}

/* WorldMap.module.css */
.mapWrapper {
  width: 100%;
  height: auto;
}
