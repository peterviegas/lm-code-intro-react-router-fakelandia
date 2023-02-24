import { useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";

const NotFound : React.FC = ( ) => {

	//analytics.sendEvent('404, useLocatin().pathname')

	
	return (
		<>
		<div className="div--notFound__error">
			<p>Error 404!</p>
		</div>
		<div className="div--notFound__ops">
			<p>Ops! The page you are</p>
			<p>looking for could not</p>
			<p>be found.</p>
		</div>
		<div className="div--notFound__button">
		
			<button className="notFound__button" ><NavLink to = '/' className='notFoundButton__link'>Return to the home</NavLink></button>
		</div>
		</>
    )
}

export default NotFound;