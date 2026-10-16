import Hero from './Hero';

export default function HomePage() {
    return (
        <div className="homepage">
            {/* Ton composant Hero d'origine */}
            <Hero />

            {/* Section Spécialités de la semaine */}
            <section className="specials-section" style={{ maxWidth: '1100px', margin: '0 auto', padding: '4rem 2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
                    <h2>Spécialités de la semaine !</h2>
                    <button style={{ backgroundColor: '#F4CE14', padding: '12px 28px', border: 'none', borderRadius: '16px', fontWeight: 'bold', cursor: 'pointer' }}>
                        Menu en ligne
                    </button>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    <article style={{ backgroundColor: '#EDEFEE', borderRadius: '16px', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                        <img src="/greek-salad.jpg" alt="Salade grecque" style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
                        <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                                <h3 style={{ margin: 0 }}>Salade grecque</h3>
                                <span style={{ color: '#EE9972', fontWeight: 'bold' }}>$10.00</span>
                            </div>
                            <p style={{ color: '#495E57', marginBottom: '2rem', lineHeight: '1.5' }}>
                                La célèbre salade grecque composée de laitue croquante, poivrons, olives et notre fromage feta façon Chicago, garnie de croûtons croustillants à l'ail et au romarin.
                            </p>
                            <a href="#" style={{ marginTop: 'auto', fontWeight: 'bold', textDecoration: 'none', color: '#333' }}>Commander une livraison 🛵</a>
                        </div>
                    </article>

                    <article style={{ backgroundColor: '#EDEFEE', borderRadius: '16px', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                        <img src="/bruchetta.png" alt="Bruschetta" style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
                        <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                                <h3 style={{ margin: 0 }}>Bruschetta</h3>
                                <span style={{ color: '#EE9972', fontWeight: 'bold' }}>$6.79</span>
                            </div>
                            <p style={{ color: '#495E57', marginBottom: '2rem', lineHeight: '1.5' }}>
                                Notre Bruschetta est faite de pain grillé frotté à l'ail et assaisonné avec du sel et de l'huile d'olive.
                            </p>
                            <a href="#" style={{ marginTop: 'auto', fontWeight: 'bold', textDecoration: 'none', color: '#333' }}>Commander une livraison 🛵</a>
                        </div>
                    </article>

                    <article style={{ backgroundColor: '#EDEFEE', borderRadius: '16px', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
                        <img src="/lemon dessert.jpg" alt="Dessert au citron" style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
                        <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                                <h3 style={{ margin: 0 }}>Dessert au citron</h3>
                                <span style={{ color: '#EE9972', fontWeight: 'bold' }}>$8.50</span>
                            </div>
                            <p style={{ color: '#495E57', marginBottom: '2rem', lineHeight: '1.5' }}>
                                Directement tiré du livre de recettes de grand-mère, le moindre ingrédient a été soigneusement sélectionné pour être aussi authentique que possible.
                            </p>
                            <a href="#" style={{ marginTop: 'auto', fontWeight: 'bold', textDecoration: 'none', color: '#333' }}>Commander une livraison 🛵</a>
                        </div>
                    </article>
                </div>
            </section>
        </div>
    );
}