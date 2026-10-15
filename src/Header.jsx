import Nav from './Nav'

function Header() {
    return (
        <header className="topbar">
            {/* Ton logo à gauche */}
            <img src="/Logo.png" alt="Little Lemon Logo" className="logo" />

            {/* Ta navigation à droite */}
            <Nav />
        </header>
    )
}

export default Header