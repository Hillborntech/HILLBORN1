import React from "react";
import "./App.css";

function App() {
  const cardsData = [
    {
      id: 1,
      title: "ENGLISH",
      imageSrc: require("./image1.jpeg"),
      link1:"https://pages.razorpay.com/Self-Healing",
      link: "https://surveyheart.com/form/644a2ee13bdb09289bc71341",
    },
    {
      id: 2,
      title: "KANNADA",
      imageSrc: require("./image2.jpeg"),
      link1:"https://pages.razorpay.com/Self-Healing",
      link: "https://surveyheart.com/form/644a2ee13bdb09289bc71341",
    },
    {
      id: 3,
      title: "TELUGU",
      imageSrc: require("./image3.jpeg"),
      link1:"https://pages.razorpay.com/Self-Healing",
      link: "https://surveyheart.com/form/644a2ee13bdb09289bc71341",
    },
  ];

  return (
    <div className="App">
      <div className="card-container">
        {cardsData.map((card) => (
          <div className="card" key={card.id}>
            <img src={card.imageSrc} alt={card.title} className="card-image" />
            <h2 className="card-title">{card.title}</h2>
            <a
              className="card-button"
              href={card.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              SURVEY LINK
            </a>
            <a
              className="card-button1"
              href={card.link1}
              target="_blank"
              rel="noopener noreferrer"
            >
              REGISTER NOW
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
