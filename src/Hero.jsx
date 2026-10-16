function Hero() {
    return (
        <section className="hero-section">
            <div className="hero-content">
                <h1 className="hero-title">Little Lemon</h1>
                <h2 className="hero-subtitle">Chicago</h2>

                <p className="hero-text">
                    Nous sommes un restaurant familial Méditerranéen,
                    focalisé sur des recettes traditionnelles servies avec
                    un twist moderne.
                </p>

                <button className="btn-primary">Reserver une table</button>
            </div>

            <div className="hero-image-container">
                <img src="/Hero.jpg" alt="Plats méditerranéens" className="hero-image" />
            </div>
        </section>
    )
}

export default Hero