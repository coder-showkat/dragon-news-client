import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { AuthContext } from "../Provider/AuthProvider";
import qZone1 from "../assets/qZone1.png";
import qZone2 from "../assets/qZone2.png";
import qZone3 from "../assets/qZone3.png";

const RightSidebar = () => {
  const { user, loginWithGoogle, loginWithGithub } = useContext(AuthContext);

  const handleGoogleLogin = async () => {
    const result = await loginWithGoogle();
    if (!result.success) console.log(result.message);
  };

  const handleGithubLogin = async () => {
    const result = await loginWithGithub();
    if (!result.success) console.log(result.message);
  };

  return (
    <>
      {!user && (
        <div className="mb-4 pb-4">
          <h4 className="mb-3 fw-semibold">Login With</h4>
          <Button
            onClick={handleGoogleLogin}
            variant="outline-primary"
            className="w-100 mb-2"
          >
            Login with Google
          </Button>
          <Button
            onClick={handleGithubLogin}
            variant="outline-dark"
            className="w-100"
          >
            Login with Github
          </Button>
        </div>
      )}

      <div className="mb-4 pb-4">
        <h4 className="mb-3 fw-semibold">Find Us On</h4>
        <ul className="text-grey border rounded list-unstyled">
          <li className="d-flex align-items-center gap-2 p-3 px-4 border-bottom">
            <FaFacebookF
              style={{ fontSize: "2rem" }}
              className="p-2 bg-grey rounded-circle text-primary align-middle"
            />
            Facebook
          </li>
          <li className="d-flex align-items-center gap-2 p-3 px-4 border-bottom">
            <FaTwitter
              style={{ fontSize: "2rem" }}
              className="p-2 bg-grey rounded-circle text-primary align-middle"
            />
            Twitter
          </li>
          <li className="d-flex align-items-center gap-2 p-3 px-4">
            <FaInstagram
              style={{ fontSize: "2rem" }}
              className="p-2 bg-grey rounded-circle text-danger align-middle"
            />
            Instagram
          </li>
        </ul>
      </div>

      <div className="mb-4 py-4 bg-grey rounded">
        <h4 className="mb-3 fw-semibold px-4 mb-4">Q-Zone</h4>
        <img src={qZone1} alt="" className="img-fluid mb-3" />
        <img src={qZone2} alt="" className="img-fluid mb-3" />
        <img src={qZone3} alt="" className="img-fluid" />
      </div>
    </>
  );
};

export default RightSidebar;
