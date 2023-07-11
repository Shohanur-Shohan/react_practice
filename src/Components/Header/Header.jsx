import './Header.css';

const Header = () => {
    return (
        <div className='header-container'>
            <h2>{document.title}</h2>
        </div>
    );
};

export default Header;