import { FaFacebook, FaInstagram } from "react-icons/fa6";

const FindUs = () => {
  return (
    <div>
      <h2 className="mb-3 font-semibold">Find Us On</h2>
      <div className="join flex join-vertical *:bg-base-100">
        <button className="justify-start btn join-item">
          <FaFacebook></FaFacebook> Facebook
        </button>
        <button className="justify-start btn join-item">
          <FaInstagram></FaInstagram> Instagram
        </button>
        <button className="justify-start btn join-item">
          <FaFacebook></FaFacebook> Facebook
        </button>
      </div>
    </div>
  );
};

export default FindUs;
