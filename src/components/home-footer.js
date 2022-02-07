import facebook from "../assets/Facebook.svg";
import instagram from "../assets/Instagram.svg";

const HomeFooter = () => {

  return (
    <div className="footer">
      <p className="footer_copyright">Copyright by Coders Lab</p>
      <div className="footer_social-media">
        <img src={facebook} className="facebook"/>
        <img src={instagram} className="instagram"/>
      </div>
    </div>
  );
}

export default HomeFooter;