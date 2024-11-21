import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ImEye,ImEyeBlocked } from "react-icons/im";
import regImage from "../../assets/regimage2.jpeg"
import { UserContext } from "./userProvider";
import Swal from 'sweetalert2'


const Register = () => {
    
    const navigate = useNavigate();
    const [eyeBtn, setEyeBtn] = useState(false);
    const handleEye = ()=>{
        setEyeBtn(!eyeBtn);
    }

    // Notification Error
    const errorNotification = ()=>{

            Swal.fire({
              title: `Sorry!!`,
              text: "You Have Already An Account",
              icon: "error",
              confirmButtonText: "Go to Login",
              allowOutsideClick: false,
            }).then((result) => {
              if (result.isConfirmed) {
                setLoading(false)
                navigate("/user/login");
              }
            });

          
    }

    // Password VALIDATION
    const [passwordValid, setPasswordValid] = useState(false);
    const [passwordMessage, setPasswordMessage] = useState("");
    const validatePassword = (password) => {
        // Define password validation criteria
        const lengthValid = password.length >= 6;
        const hasUppercase = /[A-Z]/.test(password);
        const hasLowercase = /[a-z]/.test(password);
    
        // Check all conditions
        if (lengthValid && hasUppercase && hasLowercase) {
          setPasswordValid(true);
          setPasswordMessage("Password is strong");
          return true;
        } else {
          setPasswordValid(false);
          setPasswordMessage(
            "Password must contain: A-Z, a-z, and length >= 6"
          );
          return false;
        }
      };
    
      const handlePasswordChange = (e) => {
        const password = e.target.value;
        validatePassword(password);
      };

      
    const { registerNewAccount, updateDetails, setLoading, loginGoogle } = useContext(UserContext);

const location = useLocation()
console.log(location);
    const handleRegister = (e)=>{
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        // console.log(name, photo, email, password

        if(passwordValid || validatePassword(password))
            {
                registerNewAccount(email,password)
                .then(() => {
                    updateDetails(name, photo)
                    .then(()=>{
                      
                      Swal.fire({
                            title: `Welcome ${name}`,
                            text: "You Have Successfully Created An Account ",
                            icon: "success",
                            confirmButtonText: "Continue ",
                            allowOutsideClick: false, 
                          }).then((result) => {
                            if (result.isConfirmed) {
                              // Navigate when "OK" is clicked
                              navigate(location.state ? `${location.state}` : "/")
                              setLoading(false); 
                            }
                          });
                        });
                    })
                    .catch(() => {        
                      setLoading(false)
                        errorNotification();
                  })
                  .catch(() => {
                    setLoading(false)
                    errorNotification();
                  });
            } 
            else if(!validatePassword(password))
            {
                Swal.fire({
                    title:"Wrong Password",
                    icon: "warning",
                    confirmButtonText: "Close",
                    allowOutsideClick: false, 
                })
            }
    }

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


    return (
        <div className=" flex p-4  gap-2 w-full h-[750px] backdrop-blur-lg">
                    
            <div className="bg-black card w-[50%] shrink-0 shadow-2xl py-3">
                <h1 className="text-center text-3xl font-bold pt-5">Register New Account</h1>
                <form onSubmit={handleRegister} className="card-body p-3 gap-2 justify-between h-full">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text  text-navText">Full Name</span>
                    </label>
                    <input type="text" placeholder="Full Name" name="name" className="bg-navBg text-navText font-semibold input input-bordered outline-none focus:outline-purple-500" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text  text-navText">Photo URL</span>
                    </label>
                    <input type="text" placeholder="Photo URL" name="photo" className="bg-navBg text-navText font-semibold input input-bordered outline-none focus:outline-purple-500" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text  text-navText">Email</span>
                    </label>
                    <input type="email" placeholder="Email" name="email" className="bg-navBg text-navText font-semibold input input-bordered outline-none focus:outline-purple-500" required />
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

                    <input type={eyeBtn ?"text" : "password"} placeholder="Password" name="password" className="bg-navBg text-navText font-semibold input input-bordered outline-none focus:outline-purple-500" required onKeyUp={handlePasswordChange}/>
                    </div>
                    <div>
                            <p 
                                className={`font-semibold ${ passwordValid ? "text-navText" : "text-red-500" }`}>
                                        { passwordMessage}
                            </p>
                    </div>
                    <div className="form-control mt-2">
                    <button className="btn-grad text-navText text-2xl font-bold hover:text-purple-500 hover:border-purple-500">Register</button>
                    </div>
                    <p className="text-center mt-2">Already Have An Account. <Link state={location.state} to="/user/login" className="font-bold text-purple-500">Login</Link></p>
                    <p className="text-center">or</p>
                     {/* Google login */}
                    <div className="form-control mt-2">
                        <button type="button" className="btn-grad text-navText text-2xl font-bold hover:text-purple-500 hover:border-purple-500 rounded-lg" onClick={handleGoogle}>Sign In With Google</button>
                    </div>
                </form>
            </div>

            <div className="w-[50%] h-full">
                <img src={regImage} className="w-full h-full object-fill rounded-2xl" alt="" />
            </div>
        </div>
    );
};

export default Register;