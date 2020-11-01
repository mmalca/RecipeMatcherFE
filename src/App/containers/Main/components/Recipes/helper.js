import axios from 'axios';

const MOCK = [
    {
        "directions": ["שלב ראשון", "שלב שני", "שלב שלישי"],
        "ingredients": [{_id: 1, name: "עגבניה", amount: "2 יחידות"},
            {_id: 2, name: "שמן", amount: "1 כוסות"}],
        "pictureName": "cake.jpg",
        "name": "Cake",
        "score": 200
    },
    {
        "directions": ["שלב ראשון", "שלב שני", "שלב שלישי"],
        "ingredients": [{_id: 1, name: "עגבניה", amount: "2 יחידות"},
            {_id: 2, name: "שמן", amount: "1 כוסות"}],
        "pictureName": "cake2.jpg",
        "name": "Cake2",
        "score": 100
    },
];

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
