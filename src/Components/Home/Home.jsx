
import Banner from '../Header/Banner';
import Latest from '../Latest/Latest';
import { Outlet } from 'react-router-dom';

const Home = () => {
    return (
        <div className='w-full'>
                        <Banner></Banner>
                        <Latest></Latest>
                        <Outlet></Outlet>
        </div>
    );
};

export default Home;