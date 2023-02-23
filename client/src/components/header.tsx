const Header : React.FC = ( ) => {

	
	return (
		<>
		<div className="div--header__main">
			<div className="div--nav">
				<nav className="header-nav">
					<a className="header-nav-item" href="https://www.bbc.co.uk/news" target="blank">News</a>
					<a className="header-nav-item" href="https://www.bbc.co.uk/news" target="blank">News</a>
					<a className="header-nav-item" href="https://www.bbc.co.uk/news" target="blank">News</a>
				</nav>
			</div>
			<div className="div--header">
				<header className="header">
					<a href="https://github.com/peterviegas/lm-code-intro-react-router-fakelandia/" target="blank"></a>
					
					<h1 className="header-title">Home</h1>
					<h1 className="header-title">Misdemeanours</h1>
					<h1 className="header-title">Confess To Us</h1>
				</header>
			</div>
			<br />
		</div>
		</>
    )
}

export default Header;