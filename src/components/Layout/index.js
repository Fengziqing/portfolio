import './index.scss';
import SideBar from '../Siderbar/index';
// import Home from '../Home/index';
// import Cv from '../CvPage/index';
// import Contact from '../Contact/index';
import { Outlet } from 'react-router-dom';

const Layout = () => (
    <>
        <SideBar/>
        <div className='container'>
            <Outlet />
        </div>
    </>
)

export default Layout;