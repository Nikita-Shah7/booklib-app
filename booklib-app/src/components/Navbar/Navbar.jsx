import { Link } from 'react-router-dom';
import './Navbar.css'
import logoImg from '../../images/logo.png'

function Navbar() {
    return (
        <nav className='navbar' id="navbar">
            <div className='container navbar-content flex'>
                <div className='brand-and-toggler flex flex-sb'>
                    <Link to="/" className='navbar-brand flex'>
                        <img src={logoImg} alt="site logo" />
                        <span className='text-uppercase fw-7 fs-24 ls-1'>bookhub</span>
                    </Link>
                </div>

                <div className="navbar-collapse show-navbar-collapse">
                    <ul className="navbar-nav">
                        <li className='nav-item'>
                            <Link to="/" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>Home</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="about" className='nav-link text-uppercase text-white fs-22 fw-6 ls-1'>About</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;