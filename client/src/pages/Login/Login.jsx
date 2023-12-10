import css from "./Login.module.css";
import googleIcon from "../../assets/google.svg";
import friends from "../../assets/friends.jpg"
import room from "../../assets/room.jpg"
import logo from "../../assets/logo1.png"
import { Login as loginFunc} from "../../helper/appHelpers";
const Login = () => {
  return (
    <div className="flex">
    <div className="max-sm:hidden w-[40%] border h-[100vh] relative shadow-lg">
    <img src={logo} className="w-[100px] absolute top-10 left-8  opacity-50 " alt="" />


      <img src={room} className="h-full w-full object-cover" alt="" />
    </div>

    <div className={css.main}>
      <h1>Create account or login 🔑</h1>
    <div className={css.sideImage}>
      <img src={friends} alt="" />
    </div>


      <button onClick={()=>loginFunc()}>
        <img src={googleIcon} alt="" />
        Continue with Google <span className="text-2xl">→</span>
      </button>

      <h2>--------------------------<span className=" rounded-sm px-3 text-gray-700 hover:bg-pink-200 font-bold">MatchMate</span>--------------------------</h2>
      <br />
      

      <h2>
        Connecting Minds, Creating Homies: Find Your Perfect Roommate Match with 
         <span className=" font-bold text-black mx-2 bg-yellow-200 px-2">MatchMate</span> - Where Shared Interests Meet Shared Spaces!
      </h2>
    </div>
    </div>

  );
};

export default Login;
