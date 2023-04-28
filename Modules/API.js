//const apiKey = 'fb3745d073744775a9f593b5c7fac4ed';
const apiKey = '4fa051d563264d8bac24cbfdfa54b300';
const url = `https://api.spoonacular.com/recipes/random?apiKey=${apiKey}&number=1`;

async function getRecipe() {
    try {
        const response = await fetch(url);
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
    }
}

export { getRecipe }