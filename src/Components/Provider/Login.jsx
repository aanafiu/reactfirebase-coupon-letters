import { useContext, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { ImEye,ImEyeBlocked } from "react-icons/im";
import loginimage from "../../assets/loginimg.jpeg"
import { UserContext } from "./userProvider";
import Swal from "sweetalert2";

const Login = () => {
    const navigate = useNavigate();
    const {loginUser, setLoading, loading, loginGoogle, setEmail} = useContext(UserContext)
    const [eyeBtn, setEyeBtn] = useState(false);
    const handleEye = ()=>{
        setEyeBtn(!eyeBtn);
    }
        // Notification Error
        console.log("B",loading)
        const errorNotification = ()=>{
            
            Swal.fire({
              title: `Sorry!!`,
              text: "Information Wrong",
              icon: "error",
              confirmButtonText: "Try Again",
              allowOutsideClick: false,
            }).then((result) => {
              if (result.isConfirmed) {
              
                navigate("/user/login");
              }
            });

          
    }
    const location = useLocation();
    console.log(location);
    // Login
    const handleLogin =(e)=>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        loginUser(email,password)
        .then(()=>{
            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 1000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                }
            });
            Toast.fire({
                icon: "success",
                title: "Signed in successfully",   
            })
            
        })
        .catch((error)=>{
            setLoading(false); 
            errorNotification();
            
        });
        navigate(location?.state ? `${location.state}` : "/")

    }
    // console.log("P",loading)
    const handleGoogle = (e)=>{
        console.log("F",location)
        e.preventDefault();
        loginGoogle()
        .then(()=>{
            const Toast = Swal.mixin({
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 1000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.onmouseenter = Swal.stopTimer;
                    toast.onmouseleave = Swal.resumeTimer;
                }
            });
            Toast.fire({
                icon: "success",
                title: "Signed in successfully",   
            })
            
        })
        .catch((error)=>{
            setLoading(false); 
            errorNotification();
            
        })
        setLoading(true); 
        navigate(location.state ? `${location.state}` : "/")

    }


    // PassValue
    const passLoginData = ()=>{
        const email = document.getElementById("email").value;
        setEmail(email);
    }
    return (
        <div className="flex flex-col md:flex-row p-4  gap-2 w-full h-full md:h-[600px] backdrop-blur-lg">
                    
        <div className="card bg-black h-full w-[100%] shadow-2xl py-3 flex justify-self-start">
            <h1 className="text-center text-3xl font-bold pt-5">Login Your Account</h1>
            <form onSubmit={handleLogin} className="card-body mb-0 pb-0 gap-2 justify-between h-full">
                
                <div className="form-control">
                    <label className="label ">
                        <span className="label-text text-navText">Email</span>
                    </label>
                    <input id="email" type="email" placeholder="Email" name="email" className="bg-navBg text-navText font-semibold input input-bordered outline-none focus:outline-purple-500" required />
                </div>
                <div className="form-control">

                    <div className="flex justify-between items-center">
                        <label className="label">
                                <span className="label-text text-navText">Password</span>
                        </label>
                        <div className="text-navText text-lg">
                                    <button  type="button" onClick={handleEye}>
                                        {!eyeBtn ? <ImEyeBlocked /> :<ImEye /> }
                                </button>
                        </div>
                    </div>

                <input type={eyeBtn ?"text" : "password"} placeholder="Password" name="password" className="bg-navBg text-navText font-semibold input input-bordered outline-none focus:outline-purple-500" required />
                </div>

                <label>
                <Link onClick={passLoginData} to="/user/resetpassword" className="text-navText hover:text-purple-500">Forgot password?</Link>
                </label>

                <div className="form-control mt-2">
                <button className="btn-grad text-navText text-2xl font-bold hover:text-purple-500 hover:border-purple-500">Login</button>
                </div>
                <p className="text-center mt-2">New User? Create New Account <Link to="/user/register" state={location.state} className="font-bold text-purple-500 ">Register</Link></p>
                <p className="text-center">or</p>

                {/* Google login */}
            <div className="form-control mt-2">
                <button type="button" className="btn-grad text-navText text-2xl font-bold hover:text-purple-500 hover:border-purple-500 rounded-lg" onClick={handleGoogle}>Sign In With Google</button>
            </div>
            </form>


        </div>

        <div className="w-[100%] h-[100%]">
            <img src={loginimage} className="w-full h-full object-fill rounded-2xl" alt="" />
        </div>
    </div>
    );
};

export default Login;