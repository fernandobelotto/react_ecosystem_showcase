import React, { ReactElement } from "react";
import Description from "../../components/description";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

interface Props {}

export default function ReactSimpleMaps({}: Props): ReactElement {
  return (
    <>
      <Description
        title="react-simple-maps"
        subtitle="Create beautiful SVG maps in react with d3-geo and topojson using a declarative api."
      />

      <ComposableMap
        projection="geoAzimuthalEqualArea"
        projectionConfig={{
          rotate: [-20.0, -52.0, 0],
          scale: 700,
        }}
      >
        <Geographies
          geography={geoUrl}
          fill="#D6D6DA"
          stroke="#FFFFFF"
          strokeWidth={0.5}
        >
          {({ geographies }: any) =>
            geographies.map((geo: any) => (
              <Geography key={geo.rsmKey} geography={geo} />
            ))
          }
        </Geographies>
        <Annotation
          subject={[2.3522, 48.8566]}
          dx={-90}
          dy={-30}
          connectorProps={{
            stroke: "#FF5533",
            strokeWidth: 3,
            strokeLinecap: "round",
          }}
        >
          <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="#F53">
            {"Paris"}
          </text>
        </Annotation>
      </ComposableMap>
    </>
  );
}
