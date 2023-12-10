import css from "./Header.module.css";
import logo from "../../assets/logo1.png";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  return (
    <div className={css.main}>
      <button className={css.menuBtn} onClick={() => setShowMenu(!showMenu)}>
        {showMenu ? <CloseIcon /> : <MenuIcon />}
      </button>
      <div className={css.logo}>
        <img src={logo} alt="" />
      </div>

      <div className={css.menu}>
        <ul>
          <li>
            <div className="w-[500px] flex items-center">
              <span className="rounded-l-full bg-white p-[6px] h-10 text-gray-700 px-3 text-lg m-2 mr-0 border-r-0 border-gray-600 border">
                <SearchIcon />
              </span>
              <input type="text" placeholder="Search..." />
            </div>
          </li>
          <li>List your place</li>
          <li>Find the place</li>
        </ul>
      </div>

      {showMenu ? (
        <div className={css.menuMobile}>
          <div className="w-[90%] flex items-center">
            <span className="rounded-l-full bg-white p-[10px] text-gray-700 px-3 text-lg m-2 mr-0 border-r-0 border-gray-600 border">
              <SearchIcon />
            </span>
            <input type="text" placeholder="Search..." className={css.Search} />
          </div>

          <ul>
            <li>
              <button>Find The Place</button>
            </li>
            <li>
              <button>List Your Place</button>
            </li>

            <br></br>
            <hr></hr>
            <br></br>
            <li>
              <button>Login</button>
            </li>
          </ul>
        </div>
      ) : (
        " "
      )}

      <div className={css.profile}>
        {/* <img src={googleicon} alt="" /> */}
        <button
          onClick={() => {
            navigate("/login");
          }}
          className={css.signupbutton}
        >
          {" "}
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Header;
