import React from 'react';
import cs from './NavBar.module.sass';
import { Link } from 'react-router-dom';

const NavBar = ({ selected, style }) => {
  return (
    <nav className={cs.navbar} style={style}>
      <ul>
        <li className={cs.miniLogo}>
          <Link to='/'>
            <img src='/img/MiniLogo.svg' alt='mini logo' />
          </Link>
        </li>

        <li className={cs.cities}>
          <span className={cs.cityName}>Seattle</span>
          <span className={cs.cityName}>San Jose</span>
          <Link to='/events'>
            <span className={`${cs.cityName} ${selected ? cs.selected : ''}`}>
              San Francisco
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export const NonHeroNavBar = ({ selected, style }) => {
  return (
    <nav className={`${cs.nonHero}`} style={style}>
      <ul>
        <li className={cs.miniLogo}>
          <Link to='/'>
            <img src='/img/MiniLogo.svg' alt='mini logo' />
          </Link>
        </li>

        <li className={cs.cities}>
          <span className={cs.cityName}>Seattle</span>
          <span className={cs.cityName}>San&nbsp;Jose</span>
          <Link to='/events'>
            <span className={`${cs.cityName} ${selected ? cs.selected : ''}`}>
              San&nbsp;Francisco
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
