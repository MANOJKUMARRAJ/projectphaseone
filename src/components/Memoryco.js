
import React, { useEffect, useState } from "react";

import flagf from '../images/flag.jfif'
import './memoryco.css'
import aphone from '../images/iphone.jpg'
import lapp from '../images/laptop.jpg'
import perf from'../images/perfume.jpg'
import gls from '../images/glasses.jpg'
import ooo from '../images/ov.jpg'
import shir from '../images/tshirt.jpg'

const dataOne = [
    {
        img: aphone,
    },
    {
        img: lapp,
    },
   
    {
        img: perf,
    },
    {
        img: gls,
    },
    {
        img: ooo,

    },
    {
        img: shir,
    },
];
const dataTwo = [
    {
        img: aphone,
    },
    {
        img: lapp,
    },
    
    {
        img: perf,
    },
    {
        img: gls,
    },
    {
        img: ooo,

    },
    {
        img: shir,
    },
];

const Memoryco = () => {
  const [matchedCard, setMatchedCard] = useState(0);
  const [cardOne, setCardOne] = useState();
  const [cardTwo, setCardTwo] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [imageTwo, setImageTwo] = useState([]);
  const [imageOne, setImageOne] = useState([]);
  const [coupo,setCoupo]=useState('')
  useEffect(() => {
    setImageOne(dataOne);
    setImageTwo(dataTwo);
  }, []);
  useEffect(() => {
    if (cardOne && cardTwo) {
      let cardOneImg = cardOne.querySelector(".back-view img").src;
      let cardTwoImg = cardTwo.querySelector(".back-view img").src;
      matchCards(cardOneImg, cardTwoImg);
    }
  }, [isLoading]);
  useEffect(() => {
    if (matchedCard === 6) {
      setCoupo('Coupon code for 35% OFF on All Products is =>  INDIA 75 ')
      shuffleCard();
      dataOneHanlder();
      dataTwoHanlder();
    }
  }, [matchedCard]);
  const flipCard = ({ target: clickedCard }) => {
    setIsLoading(true);
    if (clickedCard !== cardOne) {
      clickedCard.classList.add("flip");
      if (!cardOne) {
        return setCardOne(clickedCard);
      }
      setCardTwo(clickedCard);
      setIsLoading(false);
    }
  };
  const matchCards = (img1, img2) => {
    if (img1 === img2) {
      setMatchedCard(matchedCard + 1);
      if (matchedCard === 6) {
        return;
      } else {
        setCardOne();
        setCardTwo();
      }
    } else {
      setTimeout(() => {
        cardOne.classList.add("shake");
        cardTwo.classList.add("shake");
      }, 400);
      setTimeout(() => {
        cardOne.classList.remove("shake", "flip");
        cardTwo.classList.remove("shake", "flip");
        setCardOne();
        setCardTwo();
      }, 600);
    }
  };
  const shuffleCard = () => {
    setMatchedCard(0);
    setCardOne();
    setCardTwo();
    const cards = document.querySelectorAll(".card");
    cards.forEach((card) => {
      card.classList.remove("flip");
    });
  };
  const dataOneHanlder = () => {
    let currentIndex = dataOne.length,
      randomIndex;
    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      console.log(randomIndex);
      [dataOne[currentIndex], dataOne[randomIndex]] = [
        dataOne[randomIndex],
        dataOne[currentIndex],
      ];
    }
    setImageOne(dataOne);
  };
  const dataTwoHanlder = () => {
    let currentIndex = dataTwo.length,
      randomIndex;
    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      console.log(randomIndex);
      [dataTwo[currentIndex], dataTwo[randomIndex]] = [
        dataTwo[randomIndex],
        dataTwo[currentIndex],
      ];
    }
    setImageTwo(dataTwo);
  };

  return (
    <div className="ma">
      <div className="wrapper">
        <ul className="cards">
          {imageOne.map((item, index) => (
            <li className="card" onClick={flipCard} key={index}>
              <div className="view front-view">
              <img src={flagf} alt='' />
              </div>
              <div className="view back-view">
                <img src={item.img} alt="card-img" height='80px' />
              </div>
            </li>
          ))}
          {imageTwo.map((item, index) => (
            <li className="card" onClick={flipCard} key={index}>
              <div className="view front-view">
              <img src={flagf} alt='' />
              </div>
              <div className="view back-view">
                <img src={item.img} alt="card-img"  height='80px'/>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p className="cougr">{coupo}</p>
      </div>
    </div>
  );
};

export default Memoryco;
