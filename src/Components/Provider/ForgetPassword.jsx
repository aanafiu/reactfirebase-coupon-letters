import { useContext } from "react";
import { UserContext } from "./UserProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const ForgetPassword = () => {
    const navigate = useNavigate();
        const { resetPassword} = useContext(UserContext);
    const handleReset =(e)=>{
        e.preventDefault();
        const email = e.target.email.value;
        resetPassword(email)
        .then(()=>{
            Swal.fire({
                title: `Reset Email Sent`,
                text: "Check Your Email Address ",
                icon: "success",
                confirmButtonText: "Go to Home ",
                allowOutsideClick: false, 
              }).then((result) => {
                if (result.isConfirmed) {
                  // Navigate when "OK" is clicked
                  navigate("/");
                }
              });
        })
    }
    return (
        <div className="flex w-full flex-col justify-center items-center py-5 gap-6">
            <h1 className="text-4xl font-extrabold text-navBg">Want To Reset Your Password</h1>
            <form onSubmit={handleReset} className="flex flex-col w-[60%] gap-2">      
            <input type="email" placeholder="Enter Your Email Address" name="email" className="text-xl p-3 rounded-lg w-full outline-none focus:outline-purple-500"  />
            <button className="p-2 rounded-lg bg-navBg text-navText text-xl hover:border-purple-500 hover:text-purple-500 border-2 " >Send Reset Email</button>
            </form>
        </div>
    );
};

export default ForgetPassword;