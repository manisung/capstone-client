import "./UserInfoCard.scss";

function UserInfoCard(props) {
  return (
    <div className="userinfo"> 
      <div className="userinfo__title">User Information</div>
      <div className="userinfo__name-wrapper">
      <div>Name</div>
      <div>{props.selectedUser.name}</div>
      </div>
      {/* link to event page */}
    </div>

    
  );
}

export default UserInfoCard;
