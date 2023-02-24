import Nav from './nav';
import SideNav from './sideNav';
const Header : React.FC = ( ) => {

	return (
		<>
			<header className='header'>
				<div className="header-div__sidenav">
					<SideNav/>
				</div>
				<div className="header-div__nav">
					<Nav />
				</div>
			</header>
			<p></p>
		</>
    )
}

export default Header;