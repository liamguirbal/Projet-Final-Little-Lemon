import { useState } from 'react'
import Footer from './Footer'
import Nav from './Nav'
import Header from './Header'
import Body from './Body'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <Header/>
            <Nav/>
            {/* Contient le main, le Body c'est tout le HTML (Le nom était pris) */}
            <Body/>
            <Footer/>
        </>
    )
}

export default App