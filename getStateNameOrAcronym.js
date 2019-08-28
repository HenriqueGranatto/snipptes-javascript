const getStateNameOrAcronym = (state, option) => 
{
	let estados = 
	{
		AC: 'ACRE',
		AL: 'ALAGOAS',
		AP: 'AMAPÁ',
		AM: 'AMAZONAS',
		BA: 'BAHIA',
		CE: 'CEARÁ',
		DF: 'DISTRITO FEDERAL',
		ES: 'ESPÍRITO SANTO',
		GO: 'GOIÁS',
		MA: 'MARANHÃO',
		MT: 'MATO GROSSO',
		MS: 'MATO GROSSO DO SUL',
		MG: 'MINAS GERAIS',
		PA: 'PARÁ',
		PB: 'PARAÍBA',
		PR: 'PARANÁ',
		PE: 'PERNAMBUCO',
		PI: 'PIAUÍ',
		RJ: 'RIO DE JANEIRO',
		RN: 'RIO GRANDE DO NORTE',
		RS: 'RIO GRANDE DO SUL',
		RO: 'RONDÔNIA',
		RR: 'RORAIMA',
		SC: 'SANTA CATARINA',
		SP: 'SÃO PAULO',
		SE: 'SERGIPE',
		TO: 'TOCANTINS',
	}

	switch(option)
	{
		case 'name':
			response = Object.keys(estados).map((item) => { if(item == state.toUpperCase()){ return estados[item] } } ).filter(Boolean)[0]
			return response == undefined ? false : response
		break

		case 'acronym':
			response = Object.keys(estados).map((item) => { if(estados[item] == state.toUpperCase()){ return item } }).filter(Boolean)[0]
			return response == undefined ? false : response
		break

		default:
			return false
		break
	}
}