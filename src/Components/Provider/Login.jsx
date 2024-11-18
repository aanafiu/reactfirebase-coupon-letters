import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ImEye,ImEyeBlocked } from "react-icons/im";
import loginimage from "../../assets/loginimg.jpeg"

const Login = () => {
    const navigate = useNavigate();
    const [eyeBtn, setEyeBtn] = useState(false);
    const handleEye = ()=>{
        setEyeBtn(!eyeBtn);
    }

    // Login
    const handleLogin =()=>{
        console.log("hello")
    }
    return (
        <div className=" flex p-4  gap-2 w-full min-h-[600px] h-[80vh] backdrop-blur-lg">
                    
        <div className="card bg-base-100 w-[50%] shrink-0 shadow-2xl py-3">
            <h1 className="text-center text-3xl font-bold pt-5">Login Your Account</h1>
            <form onSubmit={handleLogin} className="card-body p-3 gap-2 justify-between h-full">
                
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                </div>
                <div className="form-control">

                    <div className="flex justify-between items-center">
                        <label className="label">
                                <span className="label-text">Password</span>
                        </label>
                        <div>
                                    <button  type="button" onClick={handleEye}>
                                        {!eyeBtn ? <ImEyeBlocked /> :<ImEye /> }
                                </button>
                        </div>
                    </div>

                <input type={eyeBtn ?"text" : "password"} placeholder="password" name="password" className="input input-bordered" required />
                </div>

                <div className="form-control mt-2">
                <button className="btn btn-primary">Login</button>
                </div>
                <p className="text-center mt-2">New User? Create New Account <Link to="/user/register" className="font-bold text-navBg">Register</Link></p>
            </form>
        </div>

        <div className="w-[50%] h-full">
            <img src={loginimage} className="w-full h-full object-fill rounded-2xl" alt="" />
        </div>
    </div>
    );
};

export default Login;