import Markdown from 'react-markdown'

export default function ChefRecipe (props) {
    return (
        <section className='suggested-recipe-container'>
            <h2 className='suggested-recipe-header'>AI Chef Reccomends:</h2>
            <Markdown>
                {props.recipe}
            </Markdown>
        </section>
    )
}
   