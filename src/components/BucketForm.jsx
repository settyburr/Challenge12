import { NavLink } from 'react-router-dom';
import './Navigation.css'; // Optional: Add styles for active links

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/about" activeClassName="active-link">
            About Me
          </NavLink>
        </li>
        <li>
          <NavLink to="/portfolio" activeClassName="active-link">
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName="active-link">
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to="/resume" activeClassName="active-link">
            Resume
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
