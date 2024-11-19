import { Link } from "react-router-dom";
import logo from "../../assets/logo.png"
import { useContext } from "react";
import { UserContext } from "../Provider/userProvider";
const Header = () => {
    const {user, signOutUser} = useContext(UserContext);
    const name = user?.displayName.split(" ")[0];
    return (
        <div className="flex justify-between items-center w-[90%] mx-auto whitespace-nowrap">
            <Link to="/" className="w-full object-fill whitespace-nowrap"><img src={logo} alt="" className=" h-[80px] w-fit" /></Link>
            <div className="w-full flex justify-center items-center gap-4 font-semibold whitespace-nowrap">
                { user &&
                <Link to="/myprofile" className=" p-2 text-clip">Welcome,<span className="text-purple-500 text-lg font-bold">{name}</span></Link>
                }
                <Link to="/home" className="hover:bg-white p-2">Home</Link>
                <Link to="/brands" className="hover:bg-white p-2">Brands</Link>
                {user && <Link to="/my-profile" className="hover:bg-white p-2">My Profile</Link>}
                <Link to="/about" className="hover:bg-white p-2">About Dev</Link>
            </div>

            <div className="flex w-full justify-end ">
            {
                        user ? 
                        <Link onClick={signOutUser} className="flex gap-3 border-2 border-purple-500 p-3 rounded-badge hover:border-white hover:text-purple-500 hover:bg-white">
                            <div><img className="w-[50px] h-[50px] rounded-badge" src={user?.photoURL} alt="" /></div>
                            <div className="flex flex-col justify-center items-center">
                                <h1>{user.email}</h1>
                                <Link onClick={signOutUser} className="text-lg font-bold ">Log Out</Link>
                            </div>
                        </Link>:
                                        <div className="w-fit flex gap-1 text-center border-2 rounded-lg border-white overflow-hidden">
                                        <Link to="/user/login" className="w-fit btn btn-ghost hover:bg-purple-600 font-bold hover:text-white">Login</Link>
                                        <Link to="/user/register" className="w-fit btn btn-ghost hover:bg-purple-600 font-bold hover:text-white">Registration</Link>
                                    </div>
                        
                    }

            </div>
        </div>
    );
};

export default Header;