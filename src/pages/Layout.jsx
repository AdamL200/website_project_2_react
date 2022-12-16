
import { Outlet,Link } from "react-router-dom";

const Layout = () => {
    return (
      <>
        <nav className="Navbar">
          <ul>
            <li className="Nav-link">
              <Link to="/">Home</Link>
            </li>
            <li className="Nav-link" id='formout'>
              <Link to="/Formout">Formout</Link>
            </li>
            <li className="Nav-link" >
              <Link to="/NoPage">Contact</Link>
            </li >
          </ul>
        </nav>
  
        <Outlet />
      </>
    )
  };
  
  export default Layout;