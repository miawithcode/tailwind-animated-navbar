import { FiFeather, FiHeadphones, FiMeh, FiUser, FiZap } from "react-icons/fi";

export function Navbar() {
  return (
    <div className="fixed top-0 left-0 h-screen m-0 flex flex-col bg-gray-900 text-white shadow-lg w-20">
      <div className="nav-icon-container">
        <FiFeather className="navbar-icon peer" />
        <div className="tooltip peer-hover:opacity-100">A feather</div>
      </div>

      <div className="nav-icon-container">
        <FiHeadphones className="navbar-icon peer" />
        <div className="tooltip peer-hover:opacity-100">Listen to music</div>
      </div>
      <div className="nav-icon-container">
        <FiMeh className="navbar-icon peer" />
        <div className="tooltip peer-hover:opacity-100">Happy</div>
      </div>
      <div className="nav-icon-container">
        <FiUser className="navbar-icon peer" />
        <div className="tooltip peer-hover:opacity-100">A user</div>
      </div>
      <div className="nav-icon-container">
        <FiZap className="navbar-icon peer" />
        <div className="tooltip peer-hover:opacity-100">Lightning strike</div>
      </div>
    </div>
  );
}
