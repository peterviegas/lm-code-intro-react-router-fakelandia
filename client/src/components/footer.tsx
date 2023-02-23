import git from "../git.svg"
const Footer : React.FC = ( ) => {

	
	return (
		<>
		<footer className="footer">
            <nav className="footer-nav">
                <p className="footer-paragraph"> © 2023 Peter Viegas</p>
                <a  href="https://github.com/peterviegas/lm-code-intro-react-router-fakelandia/" target="blank"><img className ="footer-img" src={git} alt="Github"></img></a>
                <a className ="main-contents-articlesubtitle-anchor" href="mailto:peterviegas@outlook.com">Send e-mail</a>
            </nav>
        </footer>
		</>
    )
}

export default Footer;