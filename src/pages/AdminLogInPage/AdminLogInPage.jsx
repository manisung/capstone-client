import "./AdminLogInPage.scss";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
// import { useParams } from "react-router-dom";
// import fansclubLogo from "../../assets/logos/logo.svg"
import fansclubLogo from "../../assets/logos/logo-pink.svg"


function AdminLogInPage() {
    const navigate = useNavigate();
    // const { id } = useParams();
  
    function handleSignIn() {
      localStorage.setItem("adminId", 1);
  
      navigate("/admin");
      // if here needs to be Dynamic, how? now is just faking it
    }

  
    return (
      <div className="adminsignin">
        <img className="adminsignin__logo" src={fansclubLogo} alt="Fansclub Logo" />
        <div className="adminsignin__title">Admin Sign in</div>
        <form className="adminsignin__form">
          <input
            className="adminsignin__box"
            type="email"
            placeholder="abc@email.com"
          />
          <input
            className="adminsignin__box"
            type="password"
            placeholder="Your Password"
          />
        </form>
       <div className="adminsignin__button-wrapper">
        <Button className="button-signin" onClick={handleSignIn} text="Admin Sign In" />
        </div>
        <div className="adminsignin__forgotpsw">Forgot your password?</div>
        {/* TODO: add change password function later */}
      </div>
    );
  }
  

export default AdminLogInPage;