import Nav from './Nav'

function Header() {
    return (
        <header className="topbar">
            <img src="/Logo.png" alt="Little Lemon Logo" className="logo" />
            
            <Nav />
        </header>
    )
}

export default Header