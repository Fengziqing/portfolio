import './index.scss';
import SideBar from '../Siderbar/index';
// import Home from '../Home/index';
// import Cv from '../CvPage/index';
// import Contact from '../Contact/index';
import { Outlet } from 'react-router-dom';

const Layout = () => (
    <div className='base'>
        <SideBar/>
        <div className='container'>
            <Outlet />
        </div>
    </div>
)

export default Layout;