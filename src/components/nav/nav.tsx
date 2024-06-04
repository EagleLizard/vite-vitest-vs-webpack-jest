
import { NavLink } from 'react-router-dom';
import './nav.scss';
import { HOME_PATH } from '../home/home';
import { ABOUT_PATH } from '../about/about';

type NavProps = {

};

export function Nav(props: NavProps) {
  return (
    <div className="nav">
      <div className="nav-items">
        <div className="nav-item">
          nav
        </div>
        <div className="nav-item">
          <NavLink
            to={HOME_PATH}
            className="nav-link"
          >
            Home
          </NavLink>
        </div>
        <div className="nav-item">
          <NavLink 
            to={ABOUT_PATH}
            className="nav-link"
          >
            About
          </NavLink>
        </div>
      </div>
      <div className="divider"/>
    </div>
  );
}
