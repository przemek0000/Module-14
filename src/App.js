import { Link, Outlet } from "react-router-dom";

export default function App() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to={`zadania`}>Zadania</Link>
                </li>
                <li>
                    <Link to={`autor`}>O autorze</Link>
                </li>
            </ul>
            <div>
                <Outlet />
            </div>
        </nav>

    )
}

