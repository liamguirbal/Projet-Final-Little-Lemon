//Fichier du Header
function Nav() {
    return (
        <nav className="nav-list">
            {/* On ajoute une classe à la liste complète */}
            <ul className="nav-list">
                <li><a href="#">Accueil</a></li>
                <li><a href="#">A Propos</a></li>
                <li><a href="#">Menu</a></li>
                <li><a href="#">Reservations</a></li>
                <li><a href="#">Commander en ligne</a></li>
                <li><a href="#">Se connecter</a></li>
            </ul>
        </nav>
    )
}

export default Nav