
import Banner from '../Header/Banner';
import Latest from '../Latest/Latest';
import { Outlet, ScrollRestoration } from 'react-router-dom';
import ContactUS from './ContactUS';
import Abouts from '../Pages/Abouts';
import AboutUs from './AboutUs';

const Home = () => {
    return (
        <div className='w-full'>
                        <Banner></Banner>
                        <Latest></Latest>
                        <Outlet></Outlet>
                        <AboutUs></AboutUs>
                        <ContactUS></ContactUS>
        </div>  
    );
};

export default Home;