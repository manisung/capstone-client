import "./EventsList.scss";
import Button from "../Button/Button";

function EventsList(props) {

    function handleRegistration() {
        // need to link to registration form which will put this user to a new event
    }

  return (
    <div>
      <ul>
        {props.events?.map((event) => {
          return (
            <li key={event.id}>
              <p>Event Name</p>
              {/* maybe just event name, when click then show more information, think how this will be better*/}
              <p>{event.event_name}</p>
              <p>Event Description</p>
              <p>{event.description}</p>
              <p>Event Status</p>
              <p>{event.status}</p>
              <p>Event Location</p>
              <p>{event.location}</p>
              <p>Event Date</p>
              <p>{event.date}</p>
              <p>Registration Deadline</p>
              <p>{event.deadline}</p>
              <Button onClick={handleRegistration} text="Register for this event" />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default EventsList;
