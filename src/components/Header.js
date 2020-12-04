import logo from './logo-1.svg';

const Header = () => {
    return(
        <header className="app-header">
            <h1>Unit Converter App</h1>
            <figure className="logo">
                <img className="logo-svg" src={logo} alt="AWD-logo"/>
            </figure>
        </header>
    )
}

export default Header;