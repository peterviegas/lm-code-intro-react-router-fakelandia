import { useEffect, useState } from "react";
import { Misdemeanour } from "./misdemeanours.types";
import {EmojiMisdemeanour} from '../types/emoji-misdemeanours.types';
import Select from 'react-select';


const Midemeanours : React.FC = ( ) => {

	const [misdemeanour, setMisdemeanour] = useState<Array<Misdemeanour>>([]);
	const [currentPage, setCurrentPage] = useState<number>(8);
  	const [errorMessage, setErrorMessage ] = useState<string | undefined>();
	const emoji = ['rudeness 🤪','lift 🗣','vegetables 🥗','united 😈'];
	const [search, setSearch] = useState("");

	useEffect(() => {
	getMisdemeanour(currentPage);
	}, [currentPage]);

	const getMisdemeanour = async (pageNumber : number) => {
		try{
			const apiResponse = await fetch(`http://localhost:8080/api/misdemeanours/${pageNumber}`);
			switch (apiResponse.status)
			{
				case 200: {
					const json = await apiResponse.json() as { misdemeanours: Misdemeanour[] };
					setMisdemeanour(json.misdemeanours);
					break;
				  }
				  case 418:{
					setErrorMessage("418 I'm a tea pot 🫖, silly");
					break;
				  }
				  case 500:{
					setErrorMessage("Oops... something went wrong, try again 🤕");
					break;
				  }
				  default:{
					setErrorMessage ("Error: "+ apiResponse.status);
					break;
				  }
			}
		}catch(error){
			setErrorMessage ("Error - Execution without return code");
		}
	}

	let misdemeanourFilter = misdemeanour;
	//check the filter
	if (search !==""){
		misdemeanourFilter = misdemeanour.filter((itens) => itens.misdemeanour === search);
	}

	const handSelectChange = ({value}:any) => {
		setSearch(value)
	}

	return (
		<>
		<div className="midemeanours-div">
			<table>
				<thead className="midemeanours-table__thead">
					<tr>
					<th></th>
					<th></th>
					<th>
						<div className='midemeanours-div__reason--select'>
						<Select 
							defaultValue = {{label:'Select', value:'Select'}}
							options={EmojiMisdemeanour}
							onChange = {handSelectChange}
						/>
						</div>
					</th>
					<th></th>
					</tr>
				</thead>
				<thead>
					<tr>
					<th>Citizen ID</th>
					<th>Date</th>
					<th>Misdemeanour</th>
					<th>Punish Idea</th>
					</tr>
				</thead>
			</table>
			 {misdemeanourFilter.map((itens) => {
				 return(
					 <div className="misd-div" key={ itens.citizenId }>
						<table>
							<tbody className="midemeanours-table__tbody">
								<tr>
									<td>{itens.citizenId}</td>
									<td>{itens.date}</td>
									<td >{emoji.find((item)=>{
										let itemaux = item.split(" ");
										if (itens.misdemeanour === itemaux[0]){
											return  item;
										}
									})
									}</td>
									<td> <img className ="misd-div__img" src={`https://picsum.photos/id/${Math.floor(Math.random() * 500)}/40`} alt="Foto Picsum"></img></td>
								</tr>
							</tbody>
						</table>
					 </div>
				 )
			 })}
		</div>
		
		</>
    )
}
export default Midemeanours;