// Use useState when original state changed to re-run page with new state 
import React from "react"
import IngredientsList from "../components/IngredientsList"
import ChefRecipe from "../components/ChefRecipe"

export default function Main (){
    // Have to initialise state and react will re-run when set state changes
    const [ingredients, setIngredients] = React.useState(["all the main spices", "pasta", "ground beef", "tomato paste"])

    const [recipeShown, setRecipeShown] = React.useState(false)

    // Action will send form data
    function addIngredient(formData){
        const newIngredient = formData.get("ingredient")
        // Set new state as a list with previous ingredients and new ingredient
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    function toggleRecipeShown (){
        setRecipeShown(prevRecipeShown => !prevRecipeShown)
    }

    return (
        <main>
            <form action={addIngredient} className="add-ingredient-form">
                <input aria-label="Add Ingredient" placeholder=" E.g: yogurt" name="ingredient"></input>
                <button>+ Add Ingredient</button>
            </form>
            {ingredients.length > 0 && 
                <IngredientsList 
                    ingredients = {ingredients}
                    toggleRecipeShown = {toggleRecipeShown}/>
            }

            {recipeShown && < ChefRecipe /> }
        </main>
    )
}