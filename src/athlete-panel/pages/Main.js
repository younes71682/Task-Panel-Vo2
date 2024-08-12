import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from '../components/Layout'
import Home from './Home'
import Tanstackproviders from '../../Providers/Tanstackproviders'
const Main = () => {
    return (
        <Router>
            <Tanstackproviders >
                <Layout>
                    <Routes>
                        <Route path='/' element={<Home />} />
                    </Routes>
                </Layout>
            </Tanstackproviders>
        </Router>
    )
}

export default Main
