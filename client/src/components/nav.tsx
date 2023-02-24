import { NavLink } from "react-router-dom";

const Nav = () => 
<nav className="header-nav">
	<ul style={{width:'100%'}} >
		<li><NavLink to = '/' className='header-nav__link'>Home</NavLink></li>
		<li><NavLink to = '/about' className='header-nav__link'>About</NavLink></li>
		<li><NavLink to = '/footer' className='header-nav__link'>Footer</NavLink></li>
	</ul>

</nav>;
export default Nav;