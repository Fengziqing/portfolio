import './index.scss';
import wrong_page from '../../assets/404-page.svg';

const NoPage = () => (
    <div className='page'>
        <img src={wrong_page} alt="404page"></img>
    </div>
)

export default NoPage