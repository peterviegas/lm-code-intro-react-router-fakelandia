import { NavLink } from "react-router-dom";

const NotFound : React.FC = ( ) => {

	//analytics.sendEvent('404, useLocatin().pathname')

	
	return (
		<>
		<div className="notFound-div__error">
			<p>Error 404!</p>
		</div>
		<div className="notFound-div__ops">
			<p>Ops! The page you are</p>
			<p>looking for could not</p>
			<p>be found.</p>
		</div>
		<div className="notFound-div__button">
		
			<button className="fakelandia-button" ><NavLink to = '/' className='notFoundButton__link'>Return to the home</NavLink></button>
		</div>
		</>
    )
}

export default NotFound;