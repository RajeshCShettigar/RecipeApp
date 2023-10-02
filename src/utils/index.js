const appID ="e8d76da9";
const apiKey ="687c1c84b5dd00d7c84105dc323b0291";


export async function fetchRecipes (filter){
    const {query, limit} = filter;

    const url = `https://api.edamam.com/search?q=${query}&app_id=${appID}&app_key=${apiKey}&from=0&to=${limit}&`;


    const response = await fetch(url)

    const data = await response.json();
    console.log(data);
    return data?.hits;
}



export async function fetchRecipe(id){
const url = `https://api.edamam.com/search?r=http://www.edamam.com/ontologies/edamam.owl%23${id}&app_id=${appID}&app_key=${apiKey}`

const response = await fetch(url)

const data = await response.json();
console.log(data);
return data[0];
}