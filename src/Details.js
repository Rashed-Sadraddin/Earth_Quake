import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

function Details() {
  let { eventId } = useParams();
  const [details, setDetails] = useState([]);

  useEffect(async () => {
    const result = await fetch(
      `https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&eventid=${eventId}`
    );
    const data = await result.json();
    setDetails(data);
  }, [eventId]);
  return (
    <>
      <div className="details">
        <p>
          <b>Place: </b>
          {details?.properties?.place}
        </p>
        <p>
          <b>Time:</b> {details?.properties?.time}
        </p>
        <p>
          <b>Event Time:</b>{" "}
          {details?.properties?.products?.origin[0]?.properties?.eventtime}
        </p>
        <p>
          <b>Magnitude:</b> {details?.properties?.mag}
        </p>
        <p>
          <b>Longitude: </b>
          {details?.properties?.products?.origin[0]?.properties?.longitude}
        </p>
        <p>
          <b>Latitude: </b>
          {details?.properties?.products?.origin[0]?.properties?.latitude}
        </p>

        <b>
          <Link to={"/"}>Back</Link>
        </b>
      </div>
    </>
  );
}

export default Details;
