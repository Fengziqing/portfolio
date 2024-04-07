import './index.scss';
import SideBar from '../Siderbar/index';
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