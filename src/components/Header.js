import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <header>
      <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
      <NavLink to="/categories" activeClassName="is-active">Categories</NavLink>
      <NavLink to="/sponsors" activeClassName="is-active">Sponsors</NavLink>
    </header>
  );

  export default Header;