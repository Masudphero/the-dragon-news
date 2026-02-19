import React, { useContext } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa6";
import { AuthContext } from "../provider/AuthProvider"; // context import
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { handleGoogleLogin, handleGithubLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleGoogle = async () => {
    try {
      const user = await handleGoogleLogin();
      console.log("Google user:", user);
      alert("✅ Google login successful!");
      navigate("/"); // redirect after login
    } catch (error) {
      console.error(error);
      alert("⚠️ Google login failed!");
    }
  };

  const handleGithub = async () => {
    try {
      const user = await handleGithubLogin();
      console.log("Github user:", user);
      alert("✅ Github login successful!");
      navigate("/"); // redirect after login
    } catch (error) {
      console.error(error);
      alert("⚠️ Github login failed!");
    }
  };

  return (
    <div>
      <h2 className="mb-3 font-semibold">Login with</h2>
      <div className="space-y-2">

        <button
          onClick={handleGoogle}
          className="flex items-center justify-center w-full gap-2 btn"
        >
          <FaGoogle /> Login with Google
        </button>

        <button
          onClick={handleGithub}
          className="flex items-center justify-center w-full gap-2 btn"
        >
          <FaGithub /> Login with Github
        </button>

      </div>
    </div>
  );
};

export default SocialLogin;
