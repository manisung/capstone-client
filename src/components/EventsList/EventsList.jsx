import "./EventsList.scss";
import Button from "../Button/Button";
import axios from "axios";
// import { useState, useEffect } from "react";
import mapPinIcon from "../../assets/icons/map-pin.svg"
import defaultEventImg from "../../assets/images/default-event-image.png";
import { useNavigate } from "react-router-dom";

function EventsList(props) {
  console.log(props.events);
  const navigate = useNavigate();

  function handleRegistration(event, eventId) {
    event.preventDefault();

    const userId = localStorage.getItem("userId");

    axios
      .get(
        `http://localhost:${process.env.REACT_APP_PORT}/users/${userId}/events/${eventId}`
      )
      .then((response) => {
        // setSelectedUserEvents(response.data);
        console.log("response", response.data);
      })
      .catch((err) => console.error(err));
    // need to link to registration form which will put this user to a new event

    //grab info from the event, eg. event_id, if event_id exists in the junction table under that user, pop up "you have registered this event"
    //if not event id not in the junction table under that user, post the event_id to the junction table under that user
  }

  function clickEvent() {
    navigate("/events/:id");
    //TODO: grabbing the event id and navigate to the specific event detail page
  }

  return (
    <div>
      <ul className="event-card-wrapper"> 
        {props.events?.map((event, index) => {
          console.log(event.id);
          return (
            <div>
            <li onClick={clickEvent} key={event.id}>
              <div className="event-card">
                <div className="event-card__image-wrapper">
                  <img className="event-card__image" src={defaultEventImg} alt="Event Scene" />
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
             <Button
             onClick={(e) => {
               handleRegistration(e, event.id);
               //TODO: after click register, if registered, disabled the button, then pop up you have registered for this event then go to user information page
               //TODO: if not yet register, register to the backend then navigate to the user page.
             }}
             text="Register"
             className="button-register"
           />
           </div>
          );
        })}
      </ul>
    </div>
  );
}

export default EventsList;

// function EventsList(props) {

//   const [eventRegistrations, setEventRegistrations] = useState({});
//   const userId = localStorage.getItem("userId");

//   console.log(props.events);

//   useEffect(() => {
//     const registrationStatus = {};
//     props.events.forEach((event, eventId) => {
//       axios
//       .get(`http://localhost:${process.env.REACT_APP_PORT}/users/${userId}/events/${eventId}`)
//       .then((response) => {
//         registrationStatus[event.id] = response.data;
//         setEventRegistrations({ ...registrationStatus});
//       })
//       .catch((err) => console.error(err));
//     });
//   }, [props.events, userId]);

//   function handleRegistration(event, eventId) {
//     event.preventDefault();

//     axios
//       .get(
//         `http://localhost:${process.env.REACT_APP_PORT}/users/${userId}/events/${eventId}`
//       )
//       .then((response) => {
//         // setSelectedUserEvents(response.data);
//         console.log("response", response.data);
//         const isRegistered = response.data;
//         const newRegistrations = {...eventRegistrations};
//         newRegistrations[event.id] = isRegistered;
//         setEventRegistrations(newRegistrations);
//       })
//       .catch((err) => console.error(err));

//   }

//   return (
//     <div>
//       <ul>
//         {props.events?.map((event) => {
//           console.log(event.id);
//           return (
//             <li key={event.id}>
//               <div className="event-name-wrapper">
//                 <p>Event Name {event.id}</p>
//                 {/* maybe just event name, when click then show more information, think how this will be better*/}
//                 <p>{event.event_name}</p>
//               </div>

//               <div className="event-description-wrapper">
//                 <p>Event Description</p>
//                 <p>{event.description}</p>
//               </div>

//               <div className="event-status-wrapper">
//                 <p>Event Status</p>
//                 <p>{event.status}</p>
//               </div>

//               <div className="event-location-wrapper">
//                 <p>Event Location</p>
//                 <p>{event.location}</p>
//               </div>

//               <div className="event-date-wrapper">
//                 <p>Event Date</p>
//                 <p>{event.date}</p>
//               </div>

//               <div className="event-deadline-wrapper">
//                 <p>Registration Deadline</p>
//                 <p>{event.deadline}</p>
//               </div>

//               <Button
//                 onClick={(e) => {
//                   handleRegistration(e, event.id);
//                 }}
//                 text={eventRegistrations[event.id]?"Registered" : "Register"}
//               />
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// }

// export default EventsList;
