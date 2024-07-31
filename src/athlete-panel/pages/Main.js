import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from '../components/Layout'
import Home from './Home'
const Main = () => {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path='/' element={<Home />} />
                </Routes>
            </Layout>
        </Router>
    )
}

export default Main
