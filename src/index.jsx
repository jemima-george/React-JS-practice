// React renders all markup to the div with id=root using react jsx files
import {createRoot} from "react-dom/client"

const root = createRoot(document.getElementById("root"))
// Render html or js content to the root
root.render(
    < Page />
)

// Can create own reusable component as a function using JS to render in html
function MainContent () {
    return <h3>React is cool!</h3>
}

// Custom Component
function Page () {
    return (
        <main>
            <img src="/src/react-logo.png" alt="React Logo"></img>
            <h1 className="header">Hello, React!</h1>
            < MainContent /> 
            <ul>
                <li>Create root in React </li>
                <li>Render content into root div</li>
            </ul>
            <h3>Why is React cool?</h3>
            <ol>
                <li>It is Declarative</li>
                <li>Can Create Reusable Components</li>
                <li>Easy to Use</li>
                <li>Popular Library used in Frontend development</li>
            </ol>
            <footer>~ Created by Orion Black</footer>
        </main>
    )
}

