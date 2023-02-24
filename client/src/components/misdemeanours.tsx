import { useEffect, useState } from "react";
import { Misdemeanour } from "./misdemeanours.types";

const Midemeanours : React.FC = ( ) => {

	const [misdemeanour, setMisdemeanour] = useState<Array<Misdemeanour>>([]);
	const [currentPage, setCurrentPage] = useState<number>(10);
  	const [errorMessage, setErrorMessage ] = useState<string | undefined>();

	useEffect(() => {
	getMisdemeanour(currentPage);
	}, [currentPage]);

	const getMisdemeanour = async (pageNumber : number) => {
		try{
			const apiResponse = await fetch(`http://localhost:8080/api/misdemeanours/${pageNumber}`);
			console.log("apiResponse.status",apiResponse.status)

			switch (apiResponse.status)
			{
				case 200: {
					console.log("Chegou aqui antes do json")
					const json = await apiResponse.json() as { misdemeanours: Misdemeanour[] };
					//const jsonPage = await apiResponse.json() as { data: Page[] };
					setMisdemeanour(json.misdemeanours);
					console.log("Chegou aqui depois do json")
					console.log("Entrou no 200 Valor encontrado:", json.misdemeanours[0].date)
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

	

	return (
		<>
		<div>
			<h1>Midemeanours</h1>
			<table>
				<thead>
					<tr>
					<th>Citizen ID</th>
					<th>Date</th>
					<th>Misdemeanour</th>
					<th>Punish Idea</th>
					</tr>
				</thead>
			</table>
			 {misdemeanour.map((itens) => {
				 return(
					 <div className="misd-div" key={ itens.citizenId }>
						<table>
							<tbody>
								<tr>
								<td>{itens.citizenId}</td>
								<td>{itens.date}</td>
								<td>{itens.misdemeanour}</td>
								<td> <img className ="misd-div__img" src='https://picsum.photos/30/30' alt="Foto Picsum"></img></td>
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