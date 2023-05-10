import React from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
// import CTA from "./components/CTA/CTA";
import Feature from "./components/Feature/Feature";

function App() {
	return (
		<div className="">
			<Header />
			<HeroSection />
			{/* <CTA /> */}
			<Feature />
			<Footer />
		</div>
	);
}

export default App;
