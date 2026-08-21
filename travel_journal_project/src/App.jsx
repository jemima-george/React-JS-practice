import Header from "../components/Header"
import Entry from "../components/Entry"
import data from "./data" 

export default function App () {
    // Map each entry in data and send data as props to Entry func 
    // Each new element mapped in React needs a key to identify them seperately
    const entryElements = data.map((entry) => {
        return (
            <Entry 
                key = {entry.id}
                img = {entry.img}
                title = {entry.title}
                country = {entry.country}
                googleMapsLink = {entry.googleMapsLink}
                dates = {entry.dates}
                text = {entry.text}
            />
        )
    }) 

    return (
        <>
            < Header /> 
            <main className="container">
                {entryElements}
            </main>
        </>
    )
}