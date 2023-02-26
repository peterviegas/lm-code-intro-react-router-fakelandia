import { useEffect, useState } from "react";
/*
//Custom hook
export const UsePost = (url:string) => {

	const [data, setData] = useState(null);

	//Post
	const [config, setConfig] = useState(null);
	const [method, setMethod] = useState(null);
	const [callFech, setCallFetch] = useState(false);

	const httpConfig = (data, method){
		if(method === "POST"){
			setConfig({
				method: ,
				headers: {
					"Content-type": "apllication/json"
				},
				body: JSON.stringify(data)
			})
		}
	}

	useEffect(() => {

		const fetchData = async () =>{

			const res = await fetch(url);
	
			const json = await res.json();

			setData(json);
		}

		fetchData();

	},[url, callFech])

	//Refactoring the post
	useEffect(() => {
		const httpRequest = async () =>{
			let fetchOptions = [url, config]

			const res = await fetch(...fetchOptions)

			const json = await res.json()

			setCallFetch(json);
		}

	}, [config])

	return {data};
};*/