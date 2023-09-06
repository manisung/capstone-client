import "./EventsList.scss";
import Button from "../Button/Button";
import axios from "axios";
// import { useState, useEffect } from "react";
import mapPinIcon from "../../assets/icons/map-pin.svg";
import defaultEventImg from "../../assets/images/default-event-image.png";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

let PORT;

console.log("NODE_ENV", process.env.NODE_ENV);

if (process.env.NODE_ENV === "production") {
  PORT = "";
} else {
  PORT = `:${process.env.REACT_APP_PORT}`;
}

function EventsList(props) {
  const navigate = useNavigate();

  const userId = localStorage.getItem("userId");

  
  function handleRegistration(event, eventId) {
    event.preventDefault();

      axios
        .post(
          `${process.env.REACT_APP_API_URL}${PORT}/users/${userId}/events/${eventId}`
        )
        .then((response) => {
          props.getUserEvents();
          // setRegistrationStatus(true);
          // navigate("/events"); //because it direct to same page, thats why this remount is not working.
        
        })
        .catch((err) => console.error(err));
    
    // need to link to registration form which will put this user to a new event

    //grab info from the event, eg. event_id, if event_id exists in the junction table under that user, pop up "you have registered this event"
    //if not event id not in the junction table under that user, post the event_id to the junction table under that user
  }

  function clickEvent() {
    navigate("/events/1");
    // navigate("/events/:id");
    //TODO: grabbing the event id and navigate to the specific event detail page
  }

  useEffect(() => {

    axios
      .get(
        `${process.env.REACT_APP_API_URL}${PORT}/users/${userId}/events/`
      )
      .then((response) => {
        // console.log("USER events response", response.data);
        
        // setRegistrationStatus(true);
        
      })
      .catch((err) => console.error(err));
  }, []);



  return (
    <div>
      <ul className="event-card-wrapper">
        {props.events?.map((event ) => {
          console.log(event.id);
          return (
            <div key={event.id}>
              <li onClick={clickEvent} >
                <div className="event-card">
                  <div className="event-card__image-wrapper">
                    <img
                      className="event-card__image"
                      src={defaultEventImg}
                      alt="Event Scene"
                    />
                  </div>
                  <div className="event-card__info">
                    <p className="event-card__date">{event.date}</p>
                    <p className="event-card__name">{event.event_name}</p>
                    <div className="event-card__location">
                      <img
                        className="event-card__location-icon"
                        src={mapPinIcon}
                        alt="Map Pin Icon"
                      />
                      <p className="event-card__location-name">
                        {event.location}
                      </p>
                    </div>
                  </div>
                </div>
              </li>
              {/* {props.userEvents?.includes(event.id) ? <div>registered</div> :               <Button
                onClick={(e) => {
                  handleRegistration(e, event.id);
                  //TODO: after click register, if registered, disabled the button, then pop up you have registered for this event then go to user information page
                  //TODO: if not yet register, register to the backend then navigate to the user page.
                }}
                text="Register" // text={registrationStatus ? "Register" : "Registered"}
                className="button-register"
              />} */}
                            <Button
                onClick={(e) => {
                  handleRegistration(e, event.id);
                  //TODO: after click register, if registered, disabled the button, then pop up you have registered for this event then go to user information page
                  //TODO: if not yet register, register to the backend then navigate to the user page.
                }}
                text={props.userEvents?.includes(event.id) ? "Registered" : "Register" }// text={registrationStatus ? "Register" : "Registered"}
                disabled={props.userEvents?.includes(event.id) ? true : false}
                className={`button-register ${props.userEvents?.includes(event.id) ? 'button-disabled' : ''}`}
              />

            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default EventsList;

