import "./EventCardDetails.scss";
import Button from "../Button/Button";
import axios from "axios";
import { useState, useEffect } from "react";
// import { Link, useParams } from "react-router-dom";
import locationLogo from "../../assets/icons/location.svg";
import dateLogo from "../../assets/icons/date.svg";
import eventPic from "../../assets/icons/eventpic.png"
import deadlineLogo from "../../assets/icons/deadline.svg";
import descriptionLogo from "../../assets/icons/description.svg";
import { useNavigate } from "react-router-dom";

// TODO: make this single event page

let PORT;

console.log('NODE_ENV', process.env.NODE_ENV)

if(process.env.NODE_ENV === 'production'){
    PORT = '';
} else {
    PORT = `:${process.env.REACT_APP_PORT}`;
}

function EventCardDetails() {
  const [selectedEvent, setSelectedEvent] = useState({});
  // const { id } = useParams();
  const navigate = useNavigate();

  function handleBackToEvents() {
    navigate("/events");
  }


  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}${PORT}/events/1`)
      .then((response) => {
        setSelectedEvent(response.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="eventcard-details">
      <div className="eventcard-details__titleimage-wrapper"><img className="eventcard-details__titleimage" src={eventPic} alt="Yumi singing with another Yumi singing overlay" /></div>
      <div className="eventcard-details__title">Event Details</div>
      <div className="eventcard-details__sub-wrapper">
      <div className="eventcard-details__eventname">{selectedEvent.event_name}</div>
      <div className="eventcard-details__date-wrapper">
        <div className="eventcard-details__datelogo-wrapper">
          <img className="eventcard-details__datelogo" src={dateLogo} alt="Date" />
        </div>
        <div className="eventcard-details__date">{selectedEvent.date}</div>
      </div>
      <div className="eventcard-details__location-wrapper">
        <div className="eventcard-details__locationlogo-wrapper">
          <img className="eventcard-details__locationlogo" src={locationLogo} alt="Location" />
        </div>
        <div className="eventcard-details__location">{selectedEvent.location}</div>
      </div>
      <div className="eventcard-details__description-wrapper">
        <div className="eventcard-details__descriptionlogo-wrapper">
          <img className="eventcard-details__descriptionlogo" src={descriptionLogo} alt="Location" />
        </div>
        <div className="eventcard-details__description">{selectedEvent.description}</div>
      </div>
      <div className="eventcard-details__deadline-wrapper">
        <div className="eventcard-details__deadlinelogo-wrapper">
          <img className="eventcard-details__deadlinelogo" src={deadlineLogo} alt="Location" />
        </div>
        <div className="eventcard-details__deadline">{selectedEvent.deadline}</div>
        
      </div>
      </div>
      <Button onClick={handleBackToEvents} text="Back to Events" className="button-backtoevents"/>
    </div>
  );
}

export default EventCardDetails;
