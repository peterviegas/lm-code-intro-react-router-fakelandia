import { useState } from 'react';
import Select from 'react-select';
import {EmojiMisdemeanour} from '../types/emoji-misdemeanours.types'

const ConfessToUs : React.FC = ( ) => {
	const [subject, setSubject] = useState ("");
	const [details, setDetails] = useState ("");

	const [filter, setFilter] = useState();

	function confessSend(){
		console.log("Cheguei aqui")
	}

	const handSelectChange = ({value}:any) => {
		setFilter(value)
	}

	return (
		<>
		<div className="confessToUs-div__text">
				<p>It´s very difficult to catch people commiting misdemeanours so we appreciate it when citizens confess to us directly.</p>
				<p>However, if you're just having a hard day and need to vent then you're welcome to contact us here too. Up to you!</p>
			</div>
		<div className="confesstoUs-form">
			<form className="confessToUs-div">
				<div className="confessToUs-div__label--subject">
					<label >Subject: </label>
					<input  type="text" value = {subject} onChange={(e)=>setSubject(e.target.value)}></input>
				</div>
				<div className='confessToUs-div__reason'>
					<div className="confessToUs-div__reason--label">
						<label >Reason for contact: </label>
					</div>
					<div className='confessToUs-div__reason--select'>
						<Select 
							defaultValue = {{label:'Select', value:'Select'}}
							options={EmojiMisdemeanour}
							onChange = {handSelectChange}
						/>
					</div>
				</div>
				<div>
					<textarea value={details} onChange={(e)=>setDetails(e.target.value)} rows={6} cols={60}>
					</textarea>
				</div>
				<div className="confessToUs-div__button">
					<button className="fakelandia-button" onClick={confessSend}>
						Confess
					</button>
				</div>
			</form>
		</div>
		
		</>
    )
}
export default ConfessToUs;