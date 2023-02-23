//const Home : React.FC = () => <>Home!</>;

/*export interface HomeProps{
	id: string;
	type: string;
	speciesName: string;
	onChangeSpeciesName: (speciesName: string) => void;
}*/

const Home : React.FC = ( ) => {

	
	return (
		<>
		 <main className="main-contents">
			<div className="main-contents-div">
				<p className="main-contents-div-title">Untick this to disable flashing and moving elements</p>
			</div>
			<div>
				<article className="main-contents-article">
					<h3 className="main-contents-article-title">Accessibility Features: Easy Win</h3>
					<h4 className="main-contents-articlesubtitle">Handy tips on how to create accessible websites for everyone</h4>
					<a className="main-contents-articlesubtitle-anchor" href="mailto:jimmy.eggs@hotmail.com">Send e-mail for Jim Eggs</a>
					<p className="main-contents-articlesubtitle-paragraph"><b> 04-08-2021</b></p>
				</article>
			</div>
			<div className="main-contents-article-div1">
			</div>
			<div className="main-contents-article-div2">
				<h3 className="main-contents-article-div2-title">Introduction</h3>
				<p className="main-contents-article-div2-title-paragraph">Tim Berners Lee dreamt of a World Wide Web that would be free and accessible to everyone. Sadly, the modern web is littered with poorly designed websites and difficult to navigate code (for both developers and users). This often comes down
					to a lack of understanding around different user needs. </p>
				<p className="main-contents-article-div2-title-paragraph">Designing pages that are accessible for everyone shouldn’t be too difficult. The developers at Tech Returners News have collated an ‘easy wins' checklist for Web page accessibility. </p>
				<p className="main-contents-article-div2-title-paragraph"> Keep this guide handy… When creating your own websites you can check these criteria off the list! </p>
				<a className="main-contents-article-div2-title-anchor" href="#accessible">
					<p className="main-contents-article-div2-title-paragraph">What would a truly accessible city look like? Read more.. </p>
				</a>
			</div>
			<div className="div-acessible">
				<h3 className="div-acessible-title">Accessibility Checks:</h3>
				<ul>
					<li className="div-acessible-title-li">Heading elements & Page Titles: HTML heading elements have been used to represent page structure, supporting assistive technologies that allow page navigation from heading to heading. </li>
					<li className="div-acessible-title-li">Re-size Text: You can vary text size by using your browser's text resize settings (through Options or Preferences), text-only zoom, page zoom (which also zooms images, buttons etc) without incurring styling issues / text over-lapping or
						being cut off the page.</li>
					<li className="div-acessible-title-li">Alternative text for images: All images have been given appropriate alternative text. </li>
					<li className="div-acessible-title-li">Link text: All hyperlinks should make sense when read out of context, and hyperlinks are clearly presented in a different text style from normal body text. If a link opens in a new browser page, it has been labelled as doing so. </li>
					<li className="div-acessible-title-li">JavaScript independence: Where JavaScript or other scripts are used for navigation or functionality, an alternative mechanism has been put in place in case your browser does not support these scripts.</li>
					<li className="div-acessible-title-li">Colour contrast: has been checked for text and background colour combinations to ensure that the contrast is sufficient and I have also ensured that information is not referenced by colour alone. </li>
					<li className="div-acessible-title-li">Style sheets: If style sheets are not supported or are turned off, information on the site can still be accessed and read.</li>
					<li className="div-acessible-title-li">Forms: forms are marked up correctly so people can interact with them using only the keyboard, voice input or screen readers. The form labels themselves are clickable, increasing the target area and making it easier to select small radio
						buttons of checkboxes.</li>
				</ul>
				<p className="div-acessible-title-paragraph"><b> For more information on Web Accessibility view:</b>
				</p>
			</div>
			<div className="div-conclusion">
				<h3 className="div-conclusion-title">Conclusion</h3>
				<ul>
					<li className="div-conclusion-li">By spending just a little more time on getting the building blocks of the web right, developers can help create an Internet that works for ever yone. </li>
				</ul>
				<a className="div-conclusion-anchor" href="#moreStore">More stories . . .</a>
			</div>
			<div className="div-moreStore">
				<h3 className="div-moreStore-title">More stories </h3>
				<ol>
					<li className="div-moreStore-li"><a href="https://olympics.com/en/news/great-britain-tokyo-2020-olympics-medals" target="blank">Tokyo Olympics: gold for Great Britain!</a></li>
					<li className="div-moreStore-li"><a href="https://en.wikipedia.org/wiki/A_Day_in_the_Life" target="blank">A day in the life of</a></li>
					<li className="div-moreStore-li"><a href="https://www.theguardian.com/business/2021/aug/03/call-for-action-as-uk-driver-shortage-hits-supermarket-shelves#:~:text=Gaps%20on%20supermarket%20shelves%20are,haulage%20firms%2C%20suppliers%20have%20warned." target="blank">Call for action as UK driver shortage hits supermarkets</a></li>
					<li className="div-moreStore-li"><a href="https://www.thedailymash.co.uk/sport/the-six-worst-school-sports-memories-of-your-childhood-20210803210796" target="blank">The six worst school sports memories of your childhood</a></li>
					<li className="div-moreStore-li"><a href="https://metro.co.uk/2018/12/05/clairvoyant-night-cancelled-due-unforeseen-circumstances-8210416/" target="blank">Clairvoyants evening cancelled from unforeseen circumstances</a></li>
					<li className="div-moreStore-li"><a href="https://safetymeetingoutlines.com/articles/accident-prevention" target="blank">Safety meeting ends in accident</a></li>
					<li className="div-moreStore-li"><a href="https://news.sky.com/story/russian-traffic-officer-with-golden-toilet-is-arrested-after-police-uncover-massive-bribery-scheme-12359123#:~:text=Data%20%26%20Forensics-,Russian%20traffic%20officer%20with%20golden%20toilet%20is%20arrested%20after%20police,in%20bribes%20from%20cargo%20transporters."
							target="blank">Russian traffic officer with golden toilet is arrested after police uncover massive bribery scheme</a></li>
					<li className="div-moreStore-li"><a href="https://www.dailymail.co.uk/sciencetech/article-2462895/Jellyfish-Armageddon-Experts-claim-creatures-taking-seas--late-stop-them.html" target="blank">Jellyfish apocalypse is coming claim scientists</a></li>
				</ol>
			</div>
   		 </main>
		</>
    )
}

export default Home;