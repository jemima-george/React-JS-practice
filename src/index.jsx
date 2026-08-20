// React renders all markup to the div with id=root using react jsx files
import {createRoot} from "react-dom/client"

// Can create own reusable component as a function using JS to render in html
function MainContent () {
    return <h3>React is cool!</h3>
}

const root = createRoot(document.getElementById("root"))
// Render html or js content to the root
root.render(
    <div>
        <h1>Hello, React!</h1>
        < MainContent />
    </div>
)

createRoot(document.querySelector("#list")).render(
    <ul>
        <li>Create root in React </li>
        <li>Render content into root div</li>
    </ul>

)

