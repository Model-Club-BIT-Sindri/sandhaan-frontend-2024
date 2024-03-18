import React, { useEffect, useState } from "react";
import "../events/events.scss";
const apiUrl = import.meta.env.VITE_API_URL;
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { EventCard } from "./EventCard";
const Event = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    axios
      .get(`${apiUrl}/api/v1/allevents`)
      .then((data) => setEvents(data?.data?.events));
  }, []);
  const navigate = useNavigate();
  return (
    <div className="event_section" id="events">
      <div className="events">
        <div className="head_1">
          <p>OUR EVENTS</p>
        </div>
        {events?.map((event) => (
          <EventCard
            name={event?.name}
            imageLinks={event?.imageLinks}
            description={event?.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Event;
