import { useEffect, useState } from "react";

//Custom hook
export const UseFetch = (url:string) => {

	const [data, setData] = useState(null);

	useEffect(() => {

		const fetchData = async () =>{

			const res = await fetch(url);
	
			const json = await res.json();

			setData(json);
		}

		fetchData();

	},[url])

	return {data};
};