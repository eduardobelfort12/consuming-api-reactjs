import React from 'react'
import {Routes, Route} from 'react-router-dom'

import HomePage from './pages/homepage/homepage'
import ContatoPage from './pages/contatopage/contatopage'

export default function MainRoutes(){
    return (
        <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path="/contato" element={<ContatoPage/>} />
        </Routes>
    )

}