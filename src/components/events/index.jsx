import React from "react";
import "../events/events.scss";

const Event = () => {
  return (
    <div className="event_section">
      <h1 className="head_1">OUR EVENTS</h1>
      <div className="card_container">
        <div className="card_contain">
          <div className="event_image">
            <img src="src/assets/robo-saga.jpeg" alt="" />
          </div>
          <h1>ROBO SAGA</h1>
          <p>
            In this event manual bots will be battling it out in 3 stages. The
            participants will have to construct All Terrain vehicle which can
            run on tracks having various hurdles. The bot will start from one
            end of the track and it has to reach the finishing end of the track
            by crossing all the hurdles. Winner will be decided on the basis of
            the time taken by each team.{" "}
          </p>
          <button>Register Here!</button>
        </div>
      </div>
    </div>
  );
};

export default Event;
