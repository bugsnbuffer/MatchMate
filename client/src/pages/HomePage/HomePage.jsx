import { Logout } from "../../helper/appHelpers";
import css from "./HomePage.module.css";



const HomePage = () => {
    
  return (
    <div className={css.main}>

    <button onClick={Logout} className={css.logoutBtn}>Logout</button>


    </div>
  )
}

export default HomePage