import { Link } from "react-router-dom";
import { ModeToggle } from "../mode-toggle";

const Navbar = () => {
  return (
    <div>
      <nav className="max-w-7xl mx-auto flex justify-between items-center py-4 px-2">
        <div className="flex items-center gap-10">
          <h1 className="text-2xl font-medium">
            Task <span className="font-bold -ms-2">Manager</span>
          </h1>
          <ul className="flex gap-4 items-center text-xl">
            <li>
              <Link to="/">Tasks</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex gap-4 items-center font-medium text-xl">
            <li>
              <ModeToggle />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
