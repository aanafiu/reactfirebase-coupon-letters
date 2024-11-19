import { Link } from "react-router-dom";
import logo from "../../assets/logo.png"
import { FaGithub } from "react-icons/fa";
import { TiSocialFacebook,TiSocialLinkedin } from "react-icons/ti";

const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center bg-navBg border-t-2 text-primary-content p-10">
                <aside>
                   <img src={logo} alt=""  className="h-[150px]"/>
                    <p className="font-bold text-xl">
                        Discover the Best Coupons, Delivered Daily.
                    </p>
                </aside>
                <nav className="w-full flex justify-between">
                    <p className="text-lg">Copyright © {new Date().getFullYear()} - All right reserved By Nafiu</p>
                    <div className="grid grid-flow-col gap-4 text-3xl text-navText">
                        <Link target="_blank" to="https://github.com/aanafiu" className="rounded-badge border-2 border-purple-500"><FaGithub /></Link>
                        <Link target="_blank" to="https://www.linkedin.com/in/aanafiu/" className="rounded-badge border-2 border-purple-500"><TiSocialFacebook /></Link>
                        <Link target="_blank" to="https://www.linkedin.com/in/aanafiu/" className="rounded-badge border-2 border-purple-500"><TiSocialLinkedin /></Link>
                        
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;