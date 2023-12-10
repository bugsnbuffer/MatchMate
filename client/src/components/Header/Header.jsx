import css from "./Header.module.css";
import logo from "../../assets/logo1.png";
import { useNavigate } from "react-router-dom";



const Header = () => {
  const navigate=useNavigate();
  return (
    <div className={css.main}>
      <div className={css.logo}>
        <img src={logo} alt="" />
      </div>

      <div className={css.profile}>
      {/* <img src={googleicon} alt="" /> */}
      <button onClick={()=>{
        navigate('/login')
      }}> Sign Up</button>
      </div>

    </div>
  );
};

export default Header;
