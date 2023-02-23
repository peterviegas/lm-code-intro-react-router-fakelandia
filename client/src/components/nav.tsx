import { NavLink } from "react-router-dom";

const Nav = () => 
<nav className="is-flex is-flex-grow-1">
	<ul style={{width:'100%'}}>
		<li><NavLink to= '/'>Home</NavLink></li>
		<li><NavLink to= '/about'>About</NavLink></li>
		<li><NavLink to= '/footer'>Footer</NavLink></li>
	</ul>

</nav>;
export default Nav;