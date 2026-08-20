// Can create own reusable component as a function using JS to render in html
export default function MainContent () {
    return (
        <main className="main-content">
            <h1 className="greeting">Hello, React!</h1>
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