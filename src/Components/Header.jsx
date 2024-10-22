// import myImage from './images/my-image.jpg';
import headerImg from '../../images/profile.png'
const Header = () => {
    return (
        <div className='flex justify-between items-center border-b py-4'>
            <h1 className="text-3xl font-bold">Knowledge Kafe</h1>
            <img src={headerImg} alt="" />
        </div>
    );
};

export default Header;