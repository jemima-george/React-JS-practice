export default function IngredientList (props) {
    const ingredientListItems = props.ingredients.map((ingredient) => (
        <li key={ingredient}>{ingredient}</li>
    ))

    return (
        <section className="ingredients-container">
            <h2>Your Ingredients:</h2>
            <ul className="ingredients-list">
                {ingredientListItems}
            </ul>
            {props.ingredients.length > 3 && <div className="get-recipe-container">
                <span>
                    <h3>Build Your Recipe?</h3>
                    <p>Generate a personalised recipe from your list of ingredients.</p>
                </span>
                <button onClick={props.toggleRecipeShown}>Generate a Recipe</button>
            </div>}
        </section>
    )
}