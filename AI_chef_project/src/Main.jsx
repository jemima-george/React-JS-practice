// Use useState when original state changed to re-run page with new state 
import React from "react"

export default function Main (){
    // Have to initialise state and react will re-run when set state changes
    const [ingredients, setIngredients] = React.useState([])

    const ingredientList = ingredients.map((ingredient) => (
        <li key={ingredient}>{ingredient}</li>
    ))

    // Action will send form data
    function addIngredient(formData){
        const newIngredient = formData.get("ingredient")
        // Set new state as a list with previous ingredients and new ingredient
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    return (
        <main>
            <form action={addIngredient} className="add-ingredient-form">
                <input aria-label="Add Ingredient" placeholder=" E.g: yogurt" name="ingredient"></input>
                <button>+ Add Ingredient</button>
            </form>
            <ul>
                {ingredientList}
            </ul>
        </main>
    )
}