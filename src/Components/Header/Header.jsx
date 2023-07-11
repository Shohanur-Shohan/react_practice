import './Header.css';

const Header = (props) => {
    return (
        <div className='header-container'>
            <h2>{props.title}</h2>
        </div>
    );
};

export default Header;