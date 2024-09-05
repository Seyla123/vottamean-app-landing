import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Container } from "@mui/material";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import PricingPage from "./pages/PricingPage";
import FeaturePage from "./pages/FeaturePage";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Container maxWidth="lg">
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/pricing" element={<PricingPage />} />
                    <Route path="/features" element={<FeaturePage />} />
                </Routes>
            </Container>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
