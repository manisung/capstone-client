import "./Footer.scss";

function Footer(props) {
  return (
    <div className="footer">
      <div>{props.text}</div>
      <div className="footer__secondline">@All Rights Reserved</div>
    </div>
  );
}

export default Footer;
