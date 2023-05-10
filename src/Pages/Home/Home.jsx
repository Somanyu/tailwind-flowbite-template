import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import HeroSection from "../../components/HeroSection/HeroSection";
import CTA from "../../components/CTA/CTA";
import Feature from "../../components/Feature/Feature";

const Home = () => {
	return (
		<div>
			<Header />
			<HeroSection />
			<CTA />
			<Feature />
			<Footer />
		</div>
	);
};

export default Home;