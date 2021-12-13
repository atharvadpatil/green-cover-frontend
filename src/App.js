import Navbar from './components/navbar'
import React from 'react';
import { Route, Routes } from "react-router-dom";
import NotFound from './components/notFound';
import Home from './components/home';
import Vegetation from './components/vegetation';
import Timelapse from './components/timelapse';

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} exact />
                <Route path="/vegetation" element={<Vegetation />} exact />
                <Route path="/timelapse" element={<Timelapse />} exact />

                {/* <Route path="/path" element={component} exact /> */}

                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
}

export default App;
