import React from "react";
import Card from "./Card";
import Cakery from "../assets/cakery.svg";
import WeatherApp from "../assets/weather-app.svg";
import Dashboard from "../assets/dashboard.svg";
import SocialMedia from "../assets/social-media.svg";
import LandingPage from "../assets/landingpage.svg";
import Checkout from "../assets/checkout.svg";

const DesCardList = ({ numCards }) => {
  const cards = [
    {
      title: "Home Monitoring Dashboard",
      description: "Figma",
      image: Dashboard,
      url: "https://www.behance.net/gallery/165312305/Home-Monitoring-Dashboard?",
    },
    {
      title: "Social Media App",
      description: "Figma. Flat UI Design",
      image: SocialMedia,
      url: "https://www.behance.net/gallery/159199033/Social-Media-App",
    },
    {
      title: "Weather App",
      description: "Figma, Glassmorphism, Neumorphism",
      image: WeatherApp,
      url: "https://www.behance.net/gallery/159202791/Weather-App-UI",
    },
    {
      title: "Clothing Store Landing Page",
      description: "Figma",
      image: LandingPage,
      url: "https://www.behance.net/gallery/159196381/Clothing-Store-Landing-Page",
    },
    {
      title: "Credit Card Checkout",
      description: "Figma",
      image: Checkout,
      url: "https://www.behance.net/gallery/159202481/Credit-Card-Checkout",
    },
    {
      title: "Cakery - Cake Shop Landing Page",
      description: "Figma",
      image: Cakery,
      url: "https://www.behance.net/gallery/193258893/Cakery-Cake-Shop-Landing-Page",
    },
  ];

  const displayedCards = cards.slice(0, numCards);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {displayedCards.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          description={card.description}
          image={card.image}
          url={card.url}
        />
      ))}
    </div>
  );
};

export default DesCardList;
