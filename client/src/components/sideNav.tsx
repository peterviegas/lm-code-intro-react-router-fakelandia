import { NavLink } from "react-router-dom"; const SideNav = () =>
<nav className="header-sidenav">
	<ul style={{width:'100%'}} >
		<li ><NavLink to = '/fakelandia' className='header-sidenav__link'>FAKELANDIA</NavLink></li>
		<li><NavLink to = '/justice' className='header-sidenav__link'>JUSTICE</NavLink></li>
		<li><NavLink to = '/department' className='header-sidenav__link'>DEPARTMENT</NavLink></li>
	</ul>
</nav>;
export default SideNav;