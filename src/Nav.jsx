import { Link } from 'react-router-dom'

function Nav() {
    return (
        <nav>
            <ul className="nav-list">
                <li><Link to="/">Accueil</Link></li>
                <li><a href="#">A propos</a></li>
                <li><a href="#">Menu</a></li>
                <li><Link to="/booking">Reservations</Link></li>
                <li><a href="#">Commander en ligne</a></li>
                <li><a href="#">Se connecter</a></li>
            </ul>
        </nav>
    )
}

export default Nav