export default function Header () {
    return (
        <header className="header">
            <img src="/src/react-logo.png" className="nav-logo" alt="React Logo"></img>
            <nav>
                <ul className="nav-list">
                    <li className="nav-list-item">Home</li>
                    <li className="nav-list-item">About</li>
                    <li className="nav-list-item">Contact</li>
                </ul>
            </nav>
        </header>
    )
}