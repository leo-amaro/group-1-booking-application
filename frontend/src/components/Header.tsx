import { Link } from "react-router-dom";
import { useAppContext } from "../contexts/AppContext";
import SignOutButton from "./SignOutButton";

const Header = () => {
  const { isLoggedIn } = useAppContext();
  return (
    <div className="bg-blue-800 p-4">
      <div className="container flex justify-between mx-auto">
        <span className="text-3xl text-white font-bold tracking-tight">
          <Link to="/">Booker King</Link>
        </span>
        <span className="flex space-x-2">
          {!isLoggedIn && (
            <Link
              to="/register"
              className="flex bg-white items-center text-blue-600 px-3 font-bold hover:bg-gray-100 rounded"
            >
              Register
            </Link>
          )}

          {isLoggedIn ? (
            <>
              <Link
                className="flex items-center text-white px-3 font-bold hover:bg-blue-600"
                to="/my-bookings"
              >
                My Bookings
              </Link>
              <Link
                className="flex items-center text-white px-3 font-bold hover:bg-blue-600"
                to="/my-hotels"
              >
                My Hotels
              </Link>
              <SignOutButton />
            </>
          ) : (
            <Link
              to="/sign-in"
              className="flex bg-white items-center text-blue-600 px-3 font-bold hover:bg-gray-100 rounded"
            >
              Sign In
            </Link>
          )}
        </span>
      </div>
    </div>
  );
};

export default Header;
