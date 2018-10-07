import React from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../Assets/imgs/logo.png';

const header = (props) => {
	return(
		<header className="navbar navbar-dark navbar-expand-md bg-dark sticky-top d-flex">
			<span className="nav-drawer text-light"><i className="fas fa-bars"></i></span>
			<div className="d-inline-block ml-4 navbar-brand logo">
				<img src={logo} className="d-inline-block mr-2 align-top" alt={props.title} />{props.title}
			</div>
			<nav className="to-flex ml-4">
				<ul className="navbar-nav mr-auto">
			      <li className="nav-item">
			        <NavLink className="nav-link" to="/" exact>Home <span className="sr-only">(current)</span></NavLink>
			      </li>
			      <li className="nav-item">
			        <NavLink className="nav-link" to="/orders">Orders</NavLink>
			      </li>
		      	</ul>
			</nav>
		</header>
	);
}
export default header;