import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ImEye,ImEyeBlocked } from "react-icons/im";
import regImage from "../../assets/regimage2.webp"
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
        } else {
          setPasswordValid(false);
          setPasswordMessage(
            "Password must contain: A-Z, a-z, and length >= 6"
          );
        }
      };
    
      const handlePasswordChange = (e) => {
        const password = e.target.value;
        validatePassword(password);
      };

      
    const { registerNewAccount, updateDetails, setLoading } = useContext(UserContext);


    const handleRegister = (e)=>{
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        // console.log(name, photo, email, password

        if(passwordValid)
            {
                registerNewAccount(email,password)
                .then(() => {
                    updateDetails(name, photo)
                    .then(()=>{
                      
                      Swal.fire({
                            title: `Welcome ${name}`,
                            text: "You Have Successfully Created An Account ",
                            icon: "success",
                            confirmButtonText: "Go to Home ",
                            allowOutsideClick: false, 
                          }).then((result) => {
                            if (result.isConfirmed) {
                              // Navigate when "OK" is clicked
                              navigate("/");
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


    return (
        <div className=" flex p-4  gap-2 w-full min-h-[650px] h-[80vh] backdrop-blur-lg">
                    
            <div className="card bg-base-100 w-[50%] shrink-0 shadow-2xl py-3">
                <h1 className="text-center text-3xl font-bold pt-5">Register New Account</h1>
                <form onSubmit={handleRegister} className="card-body p-3 gap-2 justify-between h-full">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Full Name</span>
                    </label>
                    <input type="text" placeholder="Full Name" name="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input type="text" placeholder="Photo URL" name="photo" className="input input-bordered" required />
                    </div>
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

                    <input type={eyeBtn ?"text" : "password"} placeholder="password" name="password" className="input input-bordered" required onKeyUp={handlePasswordChange}/>
                    </div>
                    <div>
                            <p 
                                className={`font-semibold ${ passwordValid ? "text-green-500" : "text-red-500" }`}>
                                        { passwordMessage}
                            </p>
                    </div>
                    <div className="form-control mt-2">
                    <button className="btn btn-primary">Register</button>
                    </div>
                    <p className="text-center mt-2">Already Have An Account. <Link to="/user/login" className="font-bold text-navBg">Login</Link></p>
                </form>
            </div>

            <div className="w-[50%] h-full">
                <img src={regImage} className="w-full h-full object-fill rounded-2xl" alt="" />
            </div>
        </div>
    );
};

export default Register;