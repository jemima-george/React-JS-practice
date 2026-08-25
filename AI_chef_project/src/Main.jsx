// Use useState when original state changed to re-run page with new state 
import React from "react"

export default function Main (){
    // Have to initialise state and react will re-run when set state changes
    const [ingredients, setIngredients] = React.useState(["all the main spices", "pasta", "ground beef", "tomato paste"])

    const [recipeShown, setRecipeShown] = React.useState(false)

    const ingredientList = ingredients.map((ingredient) => (
        <li key={ingredient}>{ingredient}</li>
    ))

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
            {ingredientList.length > 0 && <section className="ingredients-container">
                <h2>Your Ingredients:</h2>
                <ul className="ingredients-list">
                    {ingredientList}
                </ul>
                {ingredientList.length > 3 && <div className="get-recipe-container">
                    <span>
                        <h3>Build Your Recipe?</h3>
                        <p>Generate a personalised recipe from your list of ingredients.</p>
                    </span>
                    <button onClick={toggleRecipeShown}>Generate a Recipe</button>
                </div>}
            </section>}

            {recipeShown && <section>
                <h2 className="suggested-recipe-header">AI Chef Recommends:</h2>
                <article className="suggested-recipe-container" aria-live="polite">
                    <p>Based on the ingredients you have available, I would recommend making a simple a delicious <strong>Beef Bolognese Pasta</strong>. Here is the recipe:</p>
                    <h3>Beef Bolognese Pasta</h3>
                    <strong>Ingredients:</strong>
                    <ul>
                        <li>1 lb. ground beef</li>
                        <li>1 onion, diced</li>
                        <li>3 cloves garlic, minced</li>
                        <li>2 tablespoons tomato paste</li>
                        <li>1 (28 oz) can crushed tomatoes</li>
                        <li>1 cup beef broth</li>
                        <li>1 teaspoon dried oregano</li>
                        <li>1 teaspoon dried basil</li>
                        <li>Salt and pepper to taste</li>
                        <li>8 oz pasta of your choice (e.g., spaghetti, penne, or linguine)</li>
                    </ul>
                    <strong>Instructions:</strong>
                    <ol>
                        <li>Bring a large pot of salted water to a boil for the pasta.</li>
                        <li>In a large skillet or Dutch oven, cook the ground beef over medium-high heat, breaking it up with a wooden spoon, until browned and cooked through, about 5-7 minutes.</li>
                        <li>Add the diced onion and minced garlic to the skillet and cook for 2-3 minutes, until the onion is translucent.</li>
                        <li>Stir in the tomato paste and cook for 1 minute.</li>
                        <li>Add the crushed tomatoes, beef broth, oregano, and basil. Season with salt and pepper to taste.</li>
                        <li>Reduce the heat to low and let the sauce simmer for 15-20 minutes, stirring occasionally, to allow the flavors to meld.</li>
                        <li>While the sauce is simmering, cook the pasta according to the package instructions. Drain the pasta and return it to the pot.</li>
                        <li>Add the Bolognese sauce to the cooked pasta and toss to combine.</li>
                        <li>Serve hot, garnished with additional fresh basil or grated Parmesan cheese if desired.</li>
                    </ol>
                </article>
            </section>}
        </main>
    )
}