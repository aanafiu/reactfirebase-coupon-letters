import { useContext} from "react";
import { UserContext } from "./userProvider";
import { GrValidate } from "react-icons/gr";
import { GoUnverified } from "react-icons/go";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { TiSocialFacebook,TiSocialLinkedin } from "react-icons/ti";


const MyProfile = () => {
    const {user, updateDetails} = useContext(UserContext);
    const {photoURL, displayName,email, emailVerified} =user;
    console.log(user)

    const handleUpdate = (e)=>{

        e.preventDefault();
        let name = e.target.name.value;
        let image = e.target.photo.value;

        if(name === "")
        {
            name = displayName;
        }
        if(image === "")
        {
           image = photoURL;
        }
        updateDetails(name,image)
        .then(()=>{
        });


    }

    return (
        <div data-aos="fade-right" className="card w-[90%] mx-auto my-10 bg-navText p-5 flex justify-center items-center ">
            <div className="w-fit flex items-center justify-start flex-col gap-6 mx-4 whitespace-nowrap pr-4">
                <img src={photoURL} alt="" className="flex justify-center items-center h-[250px] w-[250px] rounded-full border-4 border-purple-500" />
                <div className="grid grid-flow-row justify-items-center md:grid-flow-col gap-4 text-4xl text-navBg">
                            <h1 className="text-navBg font-bold ">Social Link:</h1>
                            <Link target="_blank" to="https://github.com/aanafiu" className="rounded-badge border-2 border-purple-500 hover:text-navText hover:bg-purple-500"><FaGithub /></Link>
                            <Link target="_blank" to="https://www.linkedin.com/in/aanafiu/" className="rounded-badge border-2 border-purple-500 hover:text-navText hover:bg-purple-500"><TiSocialFacebook /></Link>
                            <Link target="_blank" to="https://www.linkedin.com/in/aanafiu/" className="rounded-badge border-2 border-purple-500 hover:text-navText hover:bg-purple-500"><TiSocialLinkedin /></Link>
                            
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-start items-center w-full whitespace-nowrap mx-4 py-5">
                <div className="w-full">

                        <h1 className="text-2xl font-bold underline btn-grads text-navText rounded-r-badge border-l-4 border-b-4  border-purple-500 w-fit p-2 mb-2">My Profile</h1>
                        <h1 className="text-2xl font-bold btn-grads text-navText w-fit border-l-4 border-purple-500 mb-2 p-2">{displayName}</h1>
                        <h1 className="flex items-center gap-2 w-fit text-xl font-bold border-l-4 border-purple-500 p-2 btn-grads text-navText">Verified: {emailVerified ? <span className="text-purple-500 text-2xl"><GrValidate /></span> : <span className="text-white text-2xl"><GoUnverified /></span> }</h1>
                        <h1 className="text-2xl font-semibold border-l-4 border-purple-500 my-3 p-2 w-fit btn-grads text-navText ">Email: {email}</h1>



                </div>

                <div className="h-[5px] w-full bg-navBg mb-2 md:hidden">
                    
                </div>
                {/* Update */}
                <div className="w-full ">
                        <h1 className="text-2xl font-bold btn-grads text-navText underline  rounded-r-badge w-fit p-2 border-l-4 border-b-4 border-purple-500">Update Profile</h1>
                        <form onSubmit={handleUpdate} className="w-full flex flex-col gap-4 mt-2">
                            <input type="text" placeholder="Name" name="name" className="p-2 rounded-lg bg-navBg text-navText text-lg font-semibold w-[80%]  outline-none focus:outline-purple-500" />
                            <input type="text" placeholder="Give Real Photo URL" name="photo" className="p-2 rounded-lg bg-navBg text-navText text-lg font-semibold w-[80%] outline-none focus:outline-purple-500" />
                            <button className="w-fit px-6 py-2 bg-navBg btn-grad text-navText text-xl font-bold hover:text-purple-500 card">Update</button>
                        </form>
                    </div>
            </div>

        </div>
    );
};

export default MyProfile;