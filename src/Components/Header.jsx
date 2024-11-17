
//Nav link
import { NavLink } from 'react-router-dom';
// import AppIcon from "../assets/images/AppIcon.svg"

export const Title = () => (
    <div>
      <a href="/">
        <img className="logo" src={""} alt="logo" />
      </a>
    </div>
  );

const Header = () => {
    const getActiveLink = ({ isActive, isPending }) => ({
        margin: '1rem 0',
        color: isActive ? 'yellow' : isPending ? 'pending' : 'cornsilk',
      });

   return (
    <>   
    <div className="header">
         <Title/>
    <nav className="Nav link ">
      <h1>APPU</h1>
        <NavLink style={getActiveLink} to="/">
        <a className="fa fa-home container"> Home  </a>
        </NavLink>
        <NavLink style={getActiveLink} to="/login">
          <a className="fa fa-sign-in container" > Login</a>
        </NavLink>
        <NavLink style={getActiveLink} to="/wish">
        <a className="fa fa-heart container"> Wishlist</a>
        </NavLink>
        <NavLink style={getActiveLink} to="/cart">
        <a className="fa fa-cart-arrow-down container"> Cart</a>
        </NavLink>
      </nav>
    </div>
    </>
   )
}

export default Header;