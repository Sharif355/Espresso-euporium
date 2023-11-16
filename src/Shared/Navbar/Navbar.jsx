import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="font-semibold space-x-3 text-center">
      <NavLink
        to="/"
        style={({ isActive, isPending }) => {
          return {
            fontWeight: isActive ? "bold" : "",
            backgroundColor: isActive ? "white" : "",
            color: isPending ? "red" : "",
          };
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/addCoffee"
        style={({ isActive, isPending }) => {
          return {
            fontWeight: isActive ? "bold" : "",
            backgroundColor: isActive ? "white" : "",
            color: isPending ? "red" : "",
          };
        }}
      >
        Add a Coffee
      </NavLink>
      <NavLink
        to="/signUP"
        style={({ isActive, isPending }) => {
          return {
            fontWeight: isActive ? "bold" : "",
            backgroundColor: isActive ? "white" : "",
            color: isPending ? "red" : "",
          };
        }}
      >
        SignUp
      </NavLink>
      <NavLink
        to="/users"
        style={({ isActive, isPending }) => {
          return {
            fontWeight: isActive ? "bold" : "",
            backgroundColor: isActive ? "white" : "",
            color: isPending ? "red" : "",
          };
        }}
      >
        Users
      </NavLink>
    </div>
  );
};

export default Navbar;
