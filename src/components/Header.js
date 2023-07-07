import logoPath from '../images/logo.svg';

function Header() {
return (
    <header className="header">
      <img src={logoPath} alt="Логотип Mesto" classNameName="logo"/>
    </header>
);
}

export default Header;