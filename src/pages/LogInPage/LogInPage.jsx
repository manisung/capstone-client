import "./LogInPage.scss";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
// import { useParams } from "react-router-dom";
// import fansclubLogo from "../../assets/logos/logo.svg"
import fansclubLogo from "../../assets/logos/logo-pink.svg"

function LogInPage() {
  const navigate = useNavigate();
  // const { id } = useParams();

  function handleSignIn() {
    localStorage.setItem("userId", 1);

    navigate("/user");
    // if here needs to be Dynamic, how? now is just faking it
  }

  function handleBackToMember() {
    navigate("/members");
  }

  return (
    <div className="signin">
      <img className="signin__logo" src={fansclubLogo} alt="Fansclub Logo" />
      <div className="signin__title">Sign in</div>
      <form className="signin__form">
        <input
          className="signin__box"
          type="email"
          placeholder="abc@email.com"
        />
        <input
          className="signin__box"
          type="password"
          placeholder="Your Password"
        />
      </form>
     <div className="signin__button-wrapper">
      <Button className="button-signin" onClick={handleSignIn} text="Sign In" />
      {/* click sign in just fake to a user page */}
      <Button className="button-back" onClick={handleBackToMember} text="Back" />

      {/* button needs to have separate class name too */}
      </div>
      <div className="signin__forgotpsw">Forgot your password?</div>
      {/* TODO: add change password function later */}
    </div>
  );
}

export default LogInPage;
