import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ImEye,ImEyeBlocked } from "react-icons/im";
import loginimage from "../../assets/loginimg.jpeg"
import { UserContext } from "./userProvider";
import Swal from "sweetalert2";

const Login = () => {
    const navigate = useNavigate();
    const {loginUser, setLoading, loading} = useContext(UserContext)
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
                timer: 2000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.onmouseenter = Swal.stopTimer;
                  toast.onmouseleave = Swal.resumeTimer;
                }
              });
              Toast.fire({
                icon: "success",
                title: "Signed in successfully"
              });
              navigate("/")
        })
        .catch((error)=>{
            setLoading(false); 
            errorNotification();

        })

    }
    console.log("P",loading)
    return (
        <div className=" flex p-4  gap-2 w-full min-h-[600px] h-[80vh] backdrop-blur-lg">
                    
        <div className="bg-black card w-[50%] shrink-0 shadow-2xl py-3">
            <h1 className="text-center text-3xl font-bold pt-5">Login Your Account</h1>
            <form onSubmit={handleLogin} className="card-body p-3 gap-2 justify-between h-full">
                
                <div className="form-control">
                    <label className="label ">
                        <span className="label-text text-navText">Email</span>
                    </label>
                    <input type="email" placeholder="Email" name="email" className="bg-navBg text-navText font-semibold input input-bordered" required />
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

                <input type={eyeBtn ?"text" : "password"} placeholder="Password" name="password" className="bg-navBg text-navText font-semibold input input-bordered" required />
                </div>

                <div className="form-control mt-2">
                <button className="btn btn-ghost bg-navText text-2xl font-bold hover:text-purple-500 hover:border-purple-500">Login</button>
                </div>
                <p className="text-center mt-2">New User? Create New Account <Link to="/user/register" className="font-bold text-purple-500 ">Register</Link></p>
            </form>
        </div>

        <div className="w-[50%] h-full">
            <img src={loginimage} className="w-full h-full object-fill rounded-2xl" alt="" />
        </div>
    </div>
    );
};

export default Login;