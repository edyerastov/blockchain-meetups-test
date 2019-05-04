import React from 'react';
import cs from './Hero.module.sass';
import NavBar from '../NavBar';

const Hero = ({ cities }) => {
  return (
    <div className={cs.hero}>
      <div className={cs.background} />
      <div className={cs.content}>
        <img src='/img/Logo.svg' alt='logo' />
        <SearchBar />
        <NavBar cities={cities} />
      </div>
    </div>
  );
};

const SearchBar = () => (
  <div className={cs.searchBarWrapper}>
    <span>Find blockchain meetups near you now.</span>
    <div className={cs.searchBar}>
      <img src='/img/SearchBarIcon.svg' alt='icon' />
    </div>
  </div>
);

export default Hero;
