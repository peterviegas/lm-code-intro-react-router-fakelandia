import { useState } from 'react';
import Select from 'react-select';
import {EmojiMisdemeanour} from '../types/emoji-misdemeanours.types'
//import { UsePost } from '../hook/usePost';

const ConfessToUs : React.FC = ( ) => {
	const [subject, setSubject] = useState ("");
	const [details, setDetails] = useState ("");
	const [reason, setReason] = useState();
	const emojiJustTalked = [
		{label: 'just-talk 😀', value: 'just-talk'},
	]

	const emojiActual = [...EmojiMisdemeanour, ...emojiJustTalked];

	const handSelectChange = ({value}:any) => {
		setReason(value)
	}

	async function handleSend(){
		console.log("Cheguei aqui")

		if(subject === '' || details === '' || reason === ''){
			alert("Preencha os campos")
			return;
		}

		const data = {
			subject,
			reason,
			details
		}
		console.log(data);
		alert("verificar")

		fetch(`http://localhost:8080/api/confess`, {
			method: 'Post',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify(data),
		}).then((resp) => resp.json())
		.then((data) => {
			console.log("Vamos ver o que retornou", data)
			alert("verificar")

			//real confession
			if(data.success === true){
				if (data.justTalked === false){
					//insert
					console.log("it's a real :", data.success, " - data.justTalked ", data.justTalked)
					alert("Misdemeanours received successfully 😀")
				}
			}else{
				console.log("Deu merda")
				alert("Error in sending the information")
			}

			//ConfessServices(data);
		})
		.catch(err => console.log(err))

		//const url = `http://localhost:8080/api/confess`;
		//const {dataConfess} = await UsePost(url,data );

		//console.log("resposta vinda do servidor????????????: ", dataConfess)
		//alert("verificar")
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
							options={emojiActual}
							onChange = {handSelectChange}
						/>
					</div>
				</div>
				<div>
					<textarea value={details} onChange={(e)=>setDetails(e.target.value)} rows={6} cols={60}>
					</textarea>
				</div>
				<div className="confessToUs-div__button">
					<button className="fakelandia-button"  onClick={handleSend}>
						Confess
					</button>
				</div>
			</form>
		</div>
		
		</>
    )
}
export default ConfessToUs;