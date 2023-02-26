//const Home : React.FC = () => <>Home!</>;

/*export interface HomeProps{
	id: string;
	type: string;
	speciesName: string;
	onChangeSpeciesName: (speciesName: string) => void;
}*/

const About : React.FC = ( ) => {

	
	return (
		<>
		<div className="about-div__text">
			 <h2>About this Site</h2>
			 <p>The faraway country of Fakelandia has decided to modernise their justice system with a fancy new technology: "websites".</p>
			 <p>Fakelandia is a happy place with a low crime rate, but it's important to each citizen that justice is seen to be served, so they'd like a website to keep abreast of the latest justice developments - and they've specifically asked for YOU to help out.</p>
			 <p>Your job is to create a React app which meets their requirements.</p>
			 <p>This lab won't lead you step-by-step through each line of code, but it will lead you through all of the stages of building the app.</p>
			 <p>You're going to be building the app entirely from scratch, so you'll get to use your own creativity to decide what a good solution looks like as you bring the designs to life.</p>
			 <p>This is your chance to show off everything you've learned about building React applications, so feel free to be creative and have some fun.</p>
			 <p>Remember the importance of:</p>
			 <li>Writing tests for your components</li>
			 <li>Using BEM/OOCSS to write scalable, reusable CSS</li>
			 <li>Keeping your components small and refactoring them into sub-components where necessary</li>
			 <li>Using hooks to store state, make API calls, and pass data down to sub-components through contexts</li>
		</div>
		
		</>
    )
}

export default About;