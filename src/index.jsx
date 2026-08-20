// React renders all markup to the div with id=root using react jsx files
import {createRoot} from "react-dom/client"

const root = createRoot(document.getElementById("root"))
// Render html or js content to the root
root.render(
    < Page />
)

function Header () {
    return (
        <header>
            <img src="/src/react-logo.png" alt="React Logo"></img>
            <h1>Hello, React!</h1>
        </header>
    )
}

// Can create own reusable component as a function using JS to render in html
function MainContent () {
    return (
        <main>
            <h3>React is cool!</h3>
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
        </main>

    )
}

function Footer () {
    return (
        <footer>~ Created by Orion Black</footer>
    )
}

// Custom Component
function Page () {
    return (
        <>
            < Header />
            < MainContent /> 
            < Footer />
        </>
    )
}

