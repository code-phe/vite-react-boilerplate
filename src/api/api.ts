const BASE_URL = "https://pokeapi.co/api/v2";

// Function to handle API requests
async function fetchData(endpoint: string): Promise<any> {
	try {
		const response = await fetch(`${BASE_URL}${endpoint}`);
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
		return await response.json();
	} catch (error) {
		console.error("Error fetching data:", error);
		throw error;
	}
}

// Get a list of Pokemon
export const getPokemonList = (limit = 20, offset = 0): Promise<any> => {
	return fetchData(`/pokemon?limit=${limit}&offset=${offset}`);
};

// Get details of a specific Pokemon
export const getPokemonDetails = (nameOrId: string): Promise<any> => {
	return fetchData(`/pokemon/${nameOrId}`);
};

// Get a list of Pokemon types
export const getPokemonTypes = (): Promise<any> => {
	return fetchData("/type");
};

// Get a list of abilities
export const getAbilities = (limit = 20, offset = 0): Promise<any> => {
	return fetchData(`/ability?limit=${limit}&offset=${offset}`);
};

// Get details of a specific ability
export const getAbilityDetails = (nameOrId: string): Promise<any> => {
	return fetchData(`/ability/${nameOrId}`);
};

// Get a list of moves
export const getMoves = (limit = 20, offset = 0): Promise<any> => {
	return fetchData(`/move?limit=${limit}&offset=${offset}`);
};

// Get details of a specific move
export const getMoveDetails = (nameOrId: string): Promise<any> => {
	return fetchData(`/move/${nameOrId}`);
};

// Get a list of items
export const getItems = (limit = 20, offset = 0): Promise<any> => {
	return fetchData(`/item?limit=${limit}&offset=${offset}`);
};

// Get details of a specific item
export const getItemDetails = (nameOrId: string): Promise<any> => {
	return fetchData(`/item/${nameOrId}`);
};
