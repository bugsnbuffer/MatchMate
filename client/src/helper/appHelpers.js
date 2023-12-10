import axios from "./axiosConfig.js";


// -------------------------call Login Logout apis-------------------------
export const Login=async()=>{
    try {
        window.location.href="http://localhost:3000/auth/google/callback";
    } catch (error) {
        Promise.reject();
    }
}


export const Logout=async()=>{
    try {
        const {status,data}=axios.get('/logout');
        if(status===200){
            return Promise.resolve(data);
        }
    } catch (error) {
        Promise.reject();
    }
}