import { NavLink } from "react-router-dom"; const SideNav = () =>
<nav className="sidenavheader">
	<ul style={{width:'100%'}} >
		<li ><NavLink to = '/fakelandia' className='sidenavheader__link'>FAKELANDIA</NavLink></li>
		<li><NavLink to = '/justice' className='sidenavheader__link'>JUSTICE</NavLink></li>
		<li><NavLink to = '/department' className='sidenavheader__link'>DEPARTMENT</NavLink></li>
	</ul>
</nav>;
export default SideNav;