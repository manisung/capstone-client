import "./MembersPage.scss";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import fansclubLogo from "../../assets/logos/logo-pink.svg"

function MembersPage() {

    const navigate = useNavigate();

function handleLogIn() {
    navigate("/login");
}


function handleSignUp() {
  navigate("/signup");
}

  return (
    <div className="memberpage">
      <div className="memberpage__logo-wrapper"><img className="memberpage__logo" src={fansclubLogo} alt="Fansclub Logo" /></div>
      <div className="memberpage__sub-wrapper">
      <div className="memberpage__join">
        <div className="memberpage__join-text">Become a member!</div>
        <Button onClick={handleSignUp} text="Join Now!" className="button-joinnow"/>
      </div>
      <div className="memberpage__signin">
        <div className="memberpage__signin-text">Already a member?</div>
        <Button onClick={handleLogIn} text="Log In" className="button-signin" />
      </div>
      </div>
    </div>
  );
}

export default MembersPage;