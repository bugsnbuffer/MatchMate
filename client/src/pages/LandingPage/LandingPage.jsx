import Header from "../../components/Header/Header";
import css from "./LandingPage.module.css";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {

  const navigate=useNavigate();
  
  return (
    <div>
    <Header/>
    <div className={css.main}>
    <div className={css.topdiv}>
    <h1 className={css.tagline}>Your  RoomMate Awaits!</h1>

    <h1 className={css.txt1}>Find your perfect roommate effortlessly  with <span className={`${css.txt1} bg-yellow-200 px-2`}>MatchMate.</span></h1>
    <h1 className={css.txt2}>Connecting people through common interests for a lively living experience.</h1>

    <button onClick={()=>navigate('/login')}>Get Started Now →</button>

    </div>

    </div>

    </div>
  );
};

export default LandingPage;
