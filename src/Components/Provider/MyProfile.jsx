import { useContext } from "react";
import { UserContext } from "./userProvider";
import { GrValidate } from "react-icons/gr";
import { GoUnverified } from "react-icons/go";

const MyProfile = () => {
    const {user, updateDetails} = useContext(UserContext);
    const {photoURL, displayName,email, emailVerified} =user;
    console.log(user)

    const handleUpdate = (e)=>{

        e.preventDefault();
        let name = e.target.name.value;
        let image = e.target.photo.value;
        let emailU = e.target.email.value;
        if(name === "")
        {
            name = displayName;
        }
        if(emailU !== "")
        {
            emailU = email;
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
        <div className="w-[90%] mx-auto my-10 bg-navText p-5 flex justify-between ">
            <div className="w-fit mx-4 whitespace-nowrap border-r-2 pr-4">
            <img src={photoURL} alt="" className="h-[200] w-[200px] rounded-full" />
            <h1 className="text-2xl font-bold text-navBg">{displayName}</h1>
            <h1 className="text-xl font-semibold text-white">Email: {email}</h1>
            </div>
            <div className="items-start w-[50%] whitespace-nowrap mx-4 border-r-2 pr-4">
                <h1 className="text-2xl font-bold text-navBg underline">My Profile</h1>
                <h1 className="flex items-center gap-2 text-navBg text-xl font-bold">Verified: {emailVerified ? <span className="text-purple-500 text-2xl"><GrValidate /></span> : <span className="text-white text-2xl"><GoUnverified /></span> }</h1>
            </div>

            <div className="w-full">
            <h1 className="text-2xl font-bold text-navBg underline">Update Profile</h1>
            <form onSubmit={handleUpdate} className="w-full flex flex-col gap-4 mt-2">
                <input type="text" placeholder="Name" name="name" className="p-2 rounded-lg bg-navBg text-navText text-lg font-semibold w-[70%]" />
                <input type="text" placeholder="Give Real Photo URL" name="photo" className="p-2 rounded-lg bg-navBg text-navText text-lg font-semibold w-[70%]" />
                <input type="text" placeholder="Email" name="email" className="p-2 rounded-lg bg-navBg text-navText text-lg font-semibold w-[70%]" />
                <button className="w-fit px-4 py-2 bg-navBg text-navText text-xl font-bold hover:text-purple-500">Save</button>
            </form>
            </div>
        </div>
    );
};

export default MyProfile;