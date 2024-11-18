import { Link } from "react-router-dom";
import logo from "../../assets/logo.png"
import { useContext } from "react";
import { UserContext } from "../Provider/userProvider";
const Header = () => {
    const {user} = useContext(UserContext);
    console.log("Header" , user)
    return (
        <div className=" flex justify-between items-center w-[90%] mx-auto whitespace-nowrap">
            <div className="object-fill whitespace-nowrap"><img src={logo} alt="" className=" h-[80px] w-fit" /></div>
            <div className="flex gap-4 font-semibold whitespace-nowrap">
                <Link to="/myprofile" className=" p-2 text-clip">Welcome,<span className="text-purple-600 text-lg font-bold">{user?.displayName.split(" ")[0]}</span></Link>
                <Link to="/" className="hover:bg-purple-600 p-2">Home</Link>
                <Link to="/brands" className="hover:bg-purple-600 p-2">Brands</Link>
                <Link to="/my-profile" className="hover:bg-purple-600 p-2">My Profile</Link>
                <Link to="/about" className="hover:bg-purple-600 p-2">About Dev</Link>
            </div>

            <div>
                <div className="w-[150px] text-center overflow-hidden border-2 rounded-lg border-white">
                    <Link to="/user/login" className="w-full btn btn-ghost hover:bg-purple-600 hover:font-bold">Login <br /> Registration</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;