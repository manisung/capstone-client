import "./UserInfoCard.scss";

function UserInfoCard(props) {
  return (
    <div>
      <div>User Information</div>
      <div>Name</div>
      <div>{props.selectedUser.name}</div>


      <div>Find More Event</div>
      {/* link to event page */}
    </div>

    
  );
}

export default UserInfoCard;
