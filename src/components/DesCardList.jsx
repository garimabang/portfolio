import React from "react";
import Card from "./Card";

const DesCardList = ({ numCards }) => {
  const cards = [
    {
      title: "Home Monitoring Dashboard",
      description: "Figma",
      image: "https://via.placeholder.com/300x200",
      url: "https://www.behance.net/gallery/165312305/Home-Monitoring-Dashboard?",
    },
    {
      title: "Social Media App",
      description: "Figma. Flat UI Design",
      image: "https://via.placeholder.com/300x200",
      url: "https://www.behance.net/gallery/159199033/Social-Media-App",
    },
    {
      title: "Weather App",
      description: "Figma, Glassmorphism, Neumorphism",
      image: "https://via.placeholder.com/300x200",
      url: "https://www.behance.net/gallery/159202791/Weather-App-UI",
    },
    {
      title: "Clothing Store Landing Page",
      description: "Figma",
      image: "https://via.placeholder.com/300x200",
      url: "https://www.behance.net/gallery/159196381/Clothing-Store-Landing-Page",
    },
    {
      title: "Credit Card Checkout",
      description: "Figma",
      image: "https://via.placeholder.com/150",
      url: "https://www.behance.net/gallery/159202481/Credit-Card-Checkout",
    },
    {
      title: "Cakery - Cake Shop Landing Page",
      description: "Figma",
      image: "https://via.placeholder.com/150",
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
