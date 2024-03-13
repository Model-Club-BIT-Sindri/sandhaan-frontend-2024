import React, { useEffect, useState } from "react";
import "../events/events.scss";
const apiUrl = import.meta.env.VITE_API_URL;
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Event = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    axios
      .get(`${apiUrl}/api/v1/allevents`)
      .then((data) => setEvents(data?.data?.events));
  }, []);
  const navigate = useNavigate();
  return (
    <div className="event_section">
      <h1 className="head_1">OUR EVENTS</h1>
      <div className="events">
        {events?.map((event) => (
          <div key={event._id} className="card_container">
            <div className="card_contain">
              <div className="event_image">
                <img src={event?.imageLinks} alt={event?.name} />
              </div>
              <h1>{event?.name}</h1>
              <p>{event?.description}</p>
              <button onClick={() => navigate(`/event/${event?._id}`)}>
                Register Here!
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Event;
