import React, { useEffect, useState } from "react";
import "./events.scss";
const apiUrl = import.meta.env.VITE_API_URL;
import axios from "axios";
import { EventCard } from "./EventCard";
const Event = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    axios
      .get(`${apiUrl}/api/v1/allevents`)
      .then((data) => setEvents(data?.data?.data));
  }, []);
  return (
    <div className="event_section grid place-items-center my-4" id="events">
      <div className="events">
        <div className="head_1">
          <p className="text-2xl my-4">OUR EVENTS</p>
        </div>
        <div className="flex justify-center items-center gap-4 flex-wrap">
          {events?.map((event) => (
            <EventCard
              key={event._id}
              id={event._id}
              name={event?.name}
              imageLinks={event?.imageLinks}
              description={event?.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Event;
