import "./EventCard.scss";

// TODO: to build an event card component for future use

function EventCard(props) {
  return (

    <li>
    <div className="event-card">
      <div className="event-card__image">
        <img src="" alt="Event Picture" />
      </div>
      <div className="event-card__info">
        <p className="event-card__date">{props.date}</p>
        <p className="event-card__name">{props.event_name}</p>
        <div className="event-card__location">
          <img classname="event-card__location-icon" src="" alt="Map Pin Icon" />
          <p className="event-card__location-name">{props.location}</p>
        </div>
      </div>
    </div>
    </li>
    );
}

export default EventCard;
