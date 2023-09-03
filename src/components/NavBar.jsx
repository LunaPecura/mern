import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {
	return (
		<nav>
			<Link to="/cycle">Cycle 93</Link>&nbsp; | &nbsp;
			<Link to="/cycle/members">Members</Link>
		</nav>
	)
}

export default NavBar
