import moment from "moment";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="container mx-auto">
      <div className="text-center py-4">
        <img src={logo} alt="" className="mb-2" />
        <p className="text-grey">Journalism Without Fear or Favour</p>
        <p className="fw-semibold text-grey">
          {moment().format("dddd, MMMM DD, YYYY")}
        </p>
      </div>
    </div>
  );
};

export default Header;
