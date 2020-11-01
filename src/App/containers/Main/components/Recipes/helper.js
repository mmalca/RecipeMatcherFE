import axios from 'axios';

export const getRecipe = async (ingredients) => {
    try {
        const res = await axios.get("http://193.106.55.98:80/getRecipe", {params: {ingredients}})
        if(!res.data) throw("Error");
        return res.data;

    } catch (error) {
        console.error(error);
        alert("An error occurred, please refresh the page. ");
    }
}
