const token = import.meta.env.VITE_DATO_KEY;

const fetchDato = async <RespType>(gqlQueryString: string): Promise<RespType> => {
	console.log(token);
	const resp: Response = await fetch('https://graphql.datocms.com/', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json',
			Authorization: `Bearer ${token}`
		},
		body: JSON.stringify({
			query: gqlQueryString
		})
	});
	const json: { data: RespType } = await resp.json();
	const data: RespType = json.data;
	return data;
};

export default fetchDato;
