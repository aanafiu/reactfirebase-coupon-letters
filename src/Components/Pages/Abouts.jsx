import { Link } from "react-router-dom";
import devlogo from "../../assets/devlogo.jpg"
import { SlSocialFacebook, SlSocialInstagram, SlSocialLinkedin } from "react-icons/sl";
import { FaGithub } from "react-icons/fa";

const Abouts = () => {
    return (
        <div className="w-[90%] mx-auto py-10">
            <div className="grid grid-cols-1 md:grid-cols-2  gap-5 ">
                <div className="btn-grads card w-full justify-items-center h-full bg-slate-900 border-2 border-purple-500 p-4 ">
                    <div className="flex justify-center items-center h-full ">
                        <img src={devlogo} alt="" className="border-r-8 border-b-8 border-purple-500 h-[250px] w-[250px] rounded-full  " />
                    </div>
                </div>
                <div className="btn-grads card text-navText w-full justify-items-center h-full bg-slate-900 border-2 border-purple-500 p-4">
                <h1 className="text-2xl font-bold underline text-center">About Me</h1>
                    <div className="text-base font-semibold">
                        <h1>Name: Abdullah Al Nafiu</h1>
                        <h1>Email: Abdullahall.nafiu@gmail.com</h1>
                        <h1>Phone: 01636748351</h1>
                        <h1>Present Address: Dhaka</h1>
                        <h1>Currently Studying At Department Of CSE, National University Of Bangladesh.</h1>
                        <h1>Under: Tejgaon College</h1>
                        <h1>Media Secretary At Programming Club, Tejgaon College</h1>
                    </div>
                </div>
                <div className="btn-grads card text-navTextw-full justify-items-center h-full bg-slate-900 border-2 border-purple-500 p-4">
                <h1 className="text-2xl font-bold underline text-center">Education Qualification</h1>
                    <div className="text-base font-semibold">
                        <h1>University: Bsc In CSE - 6th Semester</h1>
                        <h1>College: Mirpur Cant Public School And College</h1>
                        <h1>School: Ahsania Mission School, Daud Public School And College</h1>
                    </div>
                </div>
                <div className="btn-grads card text-navTextw-full justify-items-center h-full bg-slate-900 border-2 border-purple-500 p-4">
                <h1 className="text-2xl font-bold underline text-center">Languages:</h1>
                    <div className="text-base text-navText font-semibold">
                        <ul className="list-disc ml-10">
                            <li>C/C++</li>
                            <li>JavaScript</li>
                            <li>Html</li>
                            <li>CSS</li>
                            <li>Git</li>
                            <li>React Framework</li>
                            <li>Tailwind</li>

                        </ul>
                    </div>
                </div>
                <div className="btn-grads card text-navTextw-full justify-items-center h-full bg-slate-900 border-2 border-purple-500 p-4">
                <h1 className="text-2xl font-bold underline text-center">Certificates:</h1>
                    <div className="text-base text-navText font-semibold">
                        <ul className="list-disc ml-5">
                            <li>Participant On ICPC Preliminary Contest</li>
                            <li>Completed Competitive Programming- Beginner Course From DevSkill </li>
                            <li>Completed Google Python Course From Coursera</li>
                            <li>Completed Basic Resposive Web Development, Graphic Design And Digital Marketing From Trend Up Institute, Dhaka</li>
                            <li>500+ Problem Solving on CodeForces & on Multiple Sites </li>

                        </ul>
                    </div>
                </div>
                <div className="btn-grads card text-navTextw-full justify-items-center h-full bg-slate-900 border-2 border-purple-500">
                <h1 className="text-2xl font-bold underline text-center">Social Links:</h1>
                    <div className="text-base text-navText font-semibold ">
                            <div className="flex gap-4 my-4 justify-center items-center ">
                                    <Link to="https://facebook.com" target="_blank" className="text-blue-600 text-4xl hover:scale-110">
                                    <SlSocialFacebook />
                                    </Link>
                                    <Link to="https://twitter.com" target="_blank" className="text-blue-400 text-4xl hover:scale-110">
                                    <SlSocialInstagram />
                                    </Link>
                                    <Link to="https://instagram.com" target="_blank" className="text-pink-500 text-4xl hover:scale-110">
                                    <SlSocialLinkedin />
                                    </Link>
                                    <Link to="https://linkedin.com" target="_blank" className="text-blue-700 text-4xl hover:scale-110">
                                    <FaGithub />
                                    </Link>
                                </div>

                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Abouts;