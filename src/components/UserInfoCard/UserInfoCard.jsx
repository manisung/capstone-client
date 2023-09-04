import "./UserInfoCard.scss";
import fansclubLogo from "../../assets/logos/logo-pink.svg";

function UserInfoCard(props) {
  return (
    <div className="userinfo">

      <div className="userinfo__name-wrapper">
      <img
          className="userinfo__avatar"
          src={fansclubLogo}
          alt="Avatar Default Fansclub Logo"
        />
        {/* <div className="userinfo__name-title">Name</div> */}
        <div className="userinfo__name-content">{props.selectedUser.name}</div>
      </div>
      <div className="userinfo__phone-wrapper">
        <div className="userinfo__phone-title">Phone:</div>
        <div className="userinfo__phone-content">
          {props.selectedUser.contact_phone}
        </div>
      </div>
      <div className="userinfo__email-wrapper">
        <div className="userinfo__email-title">Email:</div>
        <div className="userinfo__email-content">
          {props.selectedUser.contact_email}
        </div>
      </div>
    </div>
  );
}

export default UserInfoCard;
