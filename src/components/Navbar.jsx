import { Link } from "react-router-dom";
import userIcon from "../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="flex items-center justify-between">
      
      {/* ইউজারের ইমেইল */}
      <div className="">{user ? user.email : ""}</div>

      {/* মেনু */}
      <div className="space-x-5 nav">
        <Link to="/">Home</Link>
        <Link to="/career">Career</Link>
        <Link to="/about">About</Link>
      </div>

      {/* ডান পাশে ছবি + Login/Logout */}
      <div className="flex items-center gap-2 login">
        <div>
          <img
            src={user?.photoURL || userIcon}
            alt="user"
            className="w-8 h-8 rounded-full"
          />
        </div>

        {user ? (
          <button className="rounded-none btn btn-neutral">Logout</button>
        ) : (
          <Link to="/auth/login" className="rounded-none btn btn-neutral">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
