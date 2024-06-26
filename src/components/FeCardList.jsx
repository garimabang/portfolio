import React from "react";
import Card from "./Card";
import YoutubeClone from "../assets/youtube-clone.svg";
import CodepenClone from "../assets/codepen-clone.svg";
import LandingPage from "../assets/landing-page.svg";

const FeCardList = ({ numCards }) => {
  const cards = [
    {
      title: "YouTube Clone",
      description: "ReactJs, HTML, Styled Components , JavaScript",
      image: YoutubeClone,
      url: "https://github.com/garimabang/yt-clone",
    },
    {
      title: "CodePen Clone",
      description: "ReactJs, HTML, CSS, JavaScript",
      image: CodepenClone,
      url: "https://github.com/garimabang/codepen-clone",
    },
    {
      title: "Landing Page",
      description: "ReactJs, HTML, Tailwind CSS , JavaScript",
      image: LandingPage,
      url: "https://github.com/garimabang/landing-page",
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

export default FeCardList;
