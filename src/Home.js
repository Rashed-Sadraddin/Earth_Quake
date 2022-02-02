import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [earthquakes, setearthquakes] = useState([]);

  useEffect(async () => {
    const result = await fetch(
      `https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2022-01-01&limit=12`
    );
    const data = await result.json();
    setearthquakes(data.features);
  }, []);

  return (
    <>
      <h1 className="title">Last Earth-Quakes</h1>
      <div className="home">
        {earthquakes.map((prod) => (
          <Link
            to={`./Details/${prod?.id}`}
            className="earthquakes"
            key={prod?.id}
          >
            <p>
              <b>Place: </b>
              {prod?.properties?.place}
            </p>
            <p>
              <b>Time:</b> {prod?.properties?.time}
            </p>

            <Link to={`./Details/${prod?.id}`} className="icon" key={prod?.id}>
              <b>Detail</b>
            </Link>
          </Link>
        ))}
      </div>
    </>
  );
}

export default Home;
