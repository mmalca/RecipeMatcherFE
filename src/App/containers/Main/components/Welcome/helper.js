import axios from 'axios';

export const getAvailableIngredients = async () => {
    try {
        const res = await axios.get("http://193.106.55.98:80/getAvailableIngredients");
        if(!res.data) throw("")
        return res.data.reduce((acc, ingredient) =>
                ({...acc, [ingredient._id]: ingredient})
            , {});
    } catch (error) {
        console.error(error);
        alert("An error occurred, please refresh the page.");
    }

}
