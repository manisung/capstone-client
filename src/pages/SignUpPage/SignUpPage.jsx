import Button from "../../components/Button/Button";
import "./SignUpPage.scss";
import { useNavigate } from "react-router-dom";



function SignUpPage() {

    const navigate = useNavigate();

    function completeSignUp() {
        navigate("/login");
    }


    return(

        <div>
            <div className="signup">Sign up</div>
            <form className="signup__form">
            <input className="signup__box" type="name" placeholder="Full Name"/>
            <input className="signup__box" type="email" placeholder="abc@email.com"/>
            <input className="signup__box" type="password" placeholder="Your Password"/>
            <input className="signup__box" type="password" placeholder="Confirm Password"/>
            <Button onClick={completeSignUp} text="sign up" className="button-signup"/>
            {/* button needs to have separate class name too */}
            </form>
        </div>
    )
;
}

export default SignUpPage;