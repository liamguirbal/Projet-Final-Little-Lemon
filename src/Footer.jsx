function Footer() {
    return (
        <footer className="footer-container">
            <div className="footer-logo">
                <img src="/Logo.png" alt="Little Lemon Logo" />
            </div>

            <div className="footer-column">
                <h3>Liens :</h3>
                <ul>
                    <li><a href="#">Accueil</a></li>
                    <li><a href="#">A propos</a></li>
                    <li><a href="#">Menu</a></li>
                    <li><a href="#">Reservations</a></li>
                    <li><a href="#">Commander en ligne</a></li>
                    <li><a href="#">Se connecter</a></li>
                </ul>
            </div>

            <div className="footer-column">
                <h3>Contact :</h3>
                <ul>
                    <li>Adresse</li>
                    <li>Numéro de téléphone</li>
                    <li>Adresse Email</li>
                </ul>
            </div>

            <div className="footer-column">
                <h3>Liens vers les réseaux :</h3>
                <ul>
                    <li><a href="#">Instagram</a></li>
                    <li><a href="#">FaceBook</a></li>
                    <li><a href="#">TikTok</a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer