import Nav from './nav';
import { NavLink } from 'react-router-dom';
import SideNav from './sideNav';
const Header : React.FC = ( ) => {


	
	return (
		<>
			<div className="div--nav">
				<SideNav/>
			</div>
			<div className="div--header">
				<header className="header">
					<Nav />
				</header>
			</div>
		
		</>
    )
}

export default Header;