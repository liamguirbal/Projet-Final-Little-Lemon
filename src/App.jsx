import { useState } from 'react'

import Footer from './Footer'
import Header from './Header'
import Body from './Body'

function App() {

    return (
        <>
            
            <Header/>
            {/* Contient le main, le Body c'est tout le HTML (Le nom était pris) */}
            <Body/>
            <Footer/>
        </>
    )
}

export default App