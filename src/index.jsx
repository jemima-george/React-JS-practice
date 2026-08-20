// React renders all markup to the div with id=root using react jsx files
import {createRoot} from "react-dom/client"

const root = createRoot(document.getElementById("root"))
// Render html or js content to the root
root.render(<h1>Hello, React!</h1>)