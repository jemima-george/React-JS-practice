// React renders all markup to the div with id=root using react jsx files
import {createRoot} from "react-dom/client"
import Header from "./Header.jsx"
import MainContent from "./MainContent.jsx"
import Footer from "./Footer.jsx"

const root = createRoot(document.getElementById("root"))

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

// Render html or js content to the root
root.render(
    < Page />
)

