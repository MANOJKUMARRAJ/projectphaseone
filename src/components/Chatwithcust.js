import React from 'react'
import { useState, useRef } from "react";
import ReactTooltip from "react-tooltip";
import image from './tech.jfif'
import './Chat.css'

function Chatwithcust() {
  const humanMessage = useRef();
  const botmessage = useRef();
  const input = useRef();

  const date = new Date();
 
  const day = date.getDay();
  const month = date.getMonth();
  const year = date.getFullYear();

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  
  const [dateTime, ] = useState(
    `${days[day]}, ${months[month]} ${year}`
  ); //using the useState hook to get the data from the local date and set it to the dateTime variable

  const checkStatus = (e) => {
    let isActive = true;
    if (dateTime === "Thursday, Aug 29 2022") {
      //if the dateTime is Thursday, 13 Aug 2022, the bot will be inactive
      isActive = false;
    }
    const status = document.querySelector(".status");
    // selecting the status class
    if (isActive === true) {
      //if the bot is active
      status.innerHTML = "Active";
      status.style.color = "green";
    } else {
      status.innerHTML = "Not Active";
      status.style.color = "red";
    }
  };
  const handleInput = () => {
    
    const inputRef = input.current;
    const getHumanMessage = humanMessage.current;
    const getBotMessage = botmessage.current;

    let badwords = ["fuck|bad|stupid|useless|bitch|crazy|nonsense|asshole|ASSHOLE|iamasshole|youareasshole|chutiya|Chutiya|Bhenchood|bhenchood|Fucker|fucker"];
    let words = new RegExp(badwords);
    if (words.test(document.querySelector("#input").value)) {
      // if the input contains bad words
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = "Please do not use bad words"; // display the message
        inputRef.value = ""; // clear the input
      }, 2000);
    }
    let welcome = [
      "hi|hello|Hello|hey|sup|yo|wassup|whats up|howdy|greetings|good morning|good afternoon|good evening",
    ];
    let words2 = new RegExp(welcome);
    if (words2.test(document.querySelector("#input").value)) {
      const status = document.querySelector(".status");
      // if the input contains welcome words
      getBotMessage.innerText = "Typing...75th year of india ";
      setTimeout(() => {
        getBotMessage.innerText = "Hello There how are you doing today?"; // display the message
        status.innerText = "Active";
        status.style.color = "green";
        inputRef.value = ""; // clear the input
      }, 2000);
    }
    let bye = ["bye|Bye|goodbye|see you later|cya|goodnight|goodbye|BYE"];
    let words3 = new RegExp(bye);
    if (words3.test(document.querySelector("#input").value)) {
      const status = document.querySelector(".status");
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = "Bye, have a nice day";
        inputRef.value = ""; // clear the input
      }, 2000);
      setTimeout(() => {
        status.innerText = "Not active";
        status.style.color = "red";
      }, 1000);
    }
    let thanks = [
      "Thanks|thanks|thank you|thank you very much|Thank you very much|thank|Thank",
    ];
    let words4 = new RegExp(thanks);
    if (words4.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = "You are welcome";
        inputRef.value = ""; // clear the input
      }, 2000);
    }
    let how = [
      "How are you|how are you doing|how are you doing today|how are you doing today|How are you|how are you",
    ];
    let words5 = new RegExp(how);
    if (words5.test(document.querySelector("#input").value)) {
      const status = document.querySelector(".status");
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = "I am fine, thank you";
        status.innerText = "Active";
        status.style.color = "green";
        inputRef.value = ""; // clear the input
      }, 2000);
    }
    let good = [
      "That's good|Sound nice|that sounds awesome|that sounds great|Great|great|sounds great|that's sounds good|Nice|nice",
    ];
    let words6 = new RegExp(good);
    if (words6.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = "Than Q";
        inputRef.value = ""; // clear the input
      }, 1000);
    }

    let response = [
      "I'm fine|I am fine|I am fine today|I am fine today|i'm fine|i'm great|I'm fine|I'm great|I'm good|i'm good|great|Great|iamfine|i am fine",
    ];
    let words7 = new RegExp(response);
    if (words7.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = "That is good";
        inputRef.value = ""; // clear the input
      }, 2000);
    }

    let nameAsk = [
      "What's your name|what's your name|What is your name|what is your name|name",
    ];
    let words8 = new RegExp(nameAsk);
    if (words8.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = "My name is Bot";
        inputRef.value = ""; // clear the input
      }, 2000);
    }

    let owner = [
      "Who is the owner|who is the owner|Who is the owner of this bot|who is the owner of this bot|Who made you|who made you|Who is your maker|Who made you|who is your maker|who is your owner|Who is your owner",
    ];
    let words9 = new RegExp(owner);
    if (words9.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = "The owner of this bot is Manoj Kumar";
        inputRef.value = ""; // clear the input
      }, 2000);
    }

    let owner2 = [
      "Who's Treasure|who's Treasure|Who is Treasure|who is Treasure",
    ];
    let words10 = new RegExp(owner2);
    if (words10.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText =
          "Manoj kumar";
        inputRef.value = ""; // clear the input
      }, 2000);
    }

    let ageAsk = [
      "What's your age|what's your age|What is your age|what is your age|How old are you|how old are you",
    ]; //adding the age-question
    let words11 = new RegExp(ageAsk);
    if (words11.test(document.querySelector("#input").value)) {
      // if the input contains some question
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText = "I am 1 year old";
        inputRef.value = ""; // clear the input
      }, 2000);
    };
    let products = [
      "how many products in your website|products|Products|products in your website|products in your website|products website"
    ];
    let words12 = new RegExp(products);
    if (words12.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText =
          "100 products in our website from products.json";
        inputRef.value = ""; // clear the input
      }, 2000);
    }
    let categories = [
      "how many categories in your website|categories|Categoriess|categoriess in your website|categoriess in your website|categoriess website"
    ];
    let words13 = new RegExp(categories);
    if (words13.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText =
          "Many Categories for both men & women .....Still Adding";
        inputRef.value = ""; // clear the input
      }, 2000);
    }
    let ownerma = [
      "who is  owner of your website|owner|Owner|OWNER|Head |Ceo|CEO|ceo"
    ];
    let words14 = new RegExp(ownerma);
    if (words14.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText =
          "Manoj Kumar Raja.....Just for Fun";
        inputRef.value = ""; // clear the input
      }, 2000);
      setTimeout(() => {
        getBotMessage.innerText =
          "Ranjith Ayinala";
        inputRef.value = ""; // clear the input
      }, 4000)
    }
    let baselocc = [
      "baser location of this website|baselocation|Base location|Base Location|Address|address|Head Office|head office|headoffice|Location|location"
    ];
    let words15 = new RegExp(baselocc);
    if (words15.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText =
          "Techmojo Solutions PVT ltd,Capella block,International Tech Park";
        inputRef.value = ""; // clear the input
      }, 2000);
    }
    let rohane = [
      "Rohan|rohan|Rohan Kesarkar|rohan kesarkar|rohan here|my employee id is 3440|3440"
    ];
    let words16 = new RegExp(rohane);
    if (words16.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText =
          "Namaskar Rohan Kesarkar  tu kasa ahes  marathi mulaga";
        inputRef.value = ""; // clear the input
      }, 2000);
    }
    let chandane = [
      "Chandan Das|chandan das|i am chandan das|I am chandan|chandan here|my employee id is 3438|3438|chandan"
    ];
    let words17 = new RegExp(chandane);
    if (words17.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText =
          "Nomoskar Chandan Das  Apni kemon achen  bengali chele";
        inputRef.value = ""; // clear the input
      }, 2000);
    }
    let sarathe = [
      "Sarath Surendran|sarath surendran|i am sarath surendran|I am sarath surendran|sarath here|Sarath here|my employee id is 3436|3436"
    ];
    let words18 = new RegExp(sarathe);
    if (words18.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText =
          "hay sarath surendran Nigalku sukhamano malyalam ankutti";
        inputRef.value = ""; // clear the input
      }, 2000);
    }
    let meeee = [
      "name|Name|About me|What is my name|what is my name|About me|do you know my name|about me|askurname|whatismyname|myname"
    ];
    let words19 = new RegExp(meeee);
    if (words19.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText =
          "what is your emp id or name ";
        inputRef.value = ""; // clear the input
      }, 2000);
    }
    let adityae = [
      "aditya verma|Aditya Verma|i am Aditya Verma|I am aditya verma|aditya here|Aditya here|my employee id is 3433|3433|aditya|Aditya|verma|Verma"
    ];
    let words20 = new RegExp(adityae);
    if (words20.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText =
          "Namaste Aditya Verma aap kaise ho up..boy...";
        inputRef.value = ""; // clear the input
      }, 2000);
    }
    let soumye = [
      "Soumyadeep Das|soumyadeep das|i am soumyadeep das|I am soumyadeep das|soumyadeep here|my employee id is 3441|3441|soumyadeep"
    ];
    let words21 = new RegExp(soumye);
    if (words21.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText =
          "Nomoskar Soumyadeep Das  Apni kemon achen  bengali chele";
        inputRef.value = ""; // clear the input
      }, 2000);
    }
    let dwane = [
      "Dhwanit|dhwanit|dhwanit r ranjan|Dhwanit R Ranjan|dhwanit here|my employee id is 3427|3427"
    ];
    let words22 = new RegExp(dwane);
    if (words22.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText =
          "Namaskar Dhwanit R Ranjan tu kasa ahes  marathi mulaga";
        inputRef.value = ""; // clear the input
      }, 2000);
    }
    let dpata = [
      "Past orders|Past Orderts|orders|Orders|delivery date|Delivery date|My Orders|my orders"
    ];
    let words23 = new RegExp(dpata);
    if (words23.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText =
          "Please check the cart for more details";
        inputRef.value = ""; // clear the input
      }, 2000);
    }
    let genu = [
      "Are products genuine|are products genuine|genuine|Genuine|gurantee|Gurantee"
    ];
    let words24 = new RegExp(genu);
    if (words24.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText =
          "100% gurantee on all products...";
        inputRef.value = ""; // clear the input
      }, 2000);
    }let paymo = [
      "payment mode|Payment mode|Payment Mode|payments|Payments|how to make payment|how can i pay"
    ];
    let words25 = new RegExp(paymo);
    if (words25.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText =
          "Any mode COD/Credit card/Debit card/UPI/Emi all modes are Available";
        inputRef.value = ""; // clear the input
      }, 2000);
    }
    let nave = [
      "Naveen Kumar|naveen kumar|i am naveen kumar|I am Naveen Kumar|naveen here|Naveen here|my employee id is 3439|3439|naveen|Naveen"
    ];
    let words26 = new RegExp(nave);
    if (words26.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText =
          "Namaste Naveen Kumar aap kaise ho Jharkhand..boy...";
        inputRef.value = ""; // clear the input
      }, 2000);
    }
    let codda = [
      "COD|COD ?|IS COD AVAILABLE |cod|is cod available|cod mode|cod ?"
    ];
    let words27 = new RegExp(codda);
    if (words27.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText =
          "Yes you can - Cash On Delivery";
        inputRef.value = ""; // clear the input
      }, 2000);
    }
    let cata = [
      "Categories available|Categories Available"
    ];
    let words28 = new RegExp(cata);
    if (words28.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText =
          "Womens and Mens Clothing";
        inputRef.value = ""; // clear the input
      }, 2000);
    }
    let branda = [
      "BRAND|which brands are available |brand|BRANDS|Brands|brands"
    ];
    let words29 = new RegExp(branda);
    if (words29.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText =
          "Apple Samsung oppo Lorel Paris.....Many More";
        inputRef.value = ""; // clear the input
      }, 2000);
    }
    let rivalaa = [
      "rivals|Rivals|rival |Rival|Your Rival|your worst friend|Worstfriend"
    ];
    let words30 = new RegExp(rivalaa);
    if (words30.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText =
          "our Rivals are Amazon and Flipkart";
        inputRef.value = ""; // clear the input
      }, 2000);
    }
    let issueea = [
      "damage|Damage|DAMAGE|PRODUCT DAMAGE|Product damage|productdamage"
    ];
    let words31 = new RegExp(issueea);
    if (words31.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText =
          "You can have option Replacement/Refund your full money";
        inputRef.value = ""; // clear the input
      }, 2000);
    }
    let luua = [
      "iloveu|ILOVEU|I LOVE YOU|i love you|ILOVEYOU|letsmakelove|lets make love|iloveubot|iloveuchatbot"
    ];
    let words32 = new RegExp(luua);
    if (words32.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText =
          "I dont believe in love lets have LIVING RELATIONSHIP";
        inputRef.value = ""; // clear the input
      }, 2000);
    }
    let wase = [
      "Shehbaz Waasi|shehbaz waasi|i am  shehbaz waasi|I am Shehbaz Waasi|waasi here|Shehbaz waasi here|my employee id is 3435|3435|Waasi|waasi"
    ];
    let words33 = new RegExp(wase);
    if (words33.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText =
          "Namaste Shaik Shehbaz Abdul Waasi aap kaise ho Kurnool..boy...";
        inputRef.value = ""; // clear the input
      }, 2000);
    }
    let imgge = [
      "images|IMAGES|Images|about images|images are genuine|Images are genuine"
    ];
    let words34 = new RegExp(imgge);
    if (words34.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText =
          "Images are Pure Representative purpose only";
        inputRef.value = ""; // clear the input
      }, 2000);
    }
    let cusne = [
      "chat|CHAT|CUSTOMERCARE|CUSTOMER CARE NO|CUSTOMERCARENUMBER|Customer care no|HELP|Help|help|mobile no|Mobile no|mobilenumber"
    ];
    let words35= new RegExp(cusne);
    if (words35.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText =
          "Customer Support 24/7  available please contact our toll free no- +91 9876543210";
        inputRef.value = ""; // clear the input
      }, 2000);
    }
    let wherre = [
      "where is my product|Where is my product|whereismyproduct|producttime|Producttime|Productdeliverytime"
    ];
    let words36 = new RegExp(wherre);
    if (words36.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText =
          "Your Product is on the way...it will reach on time...Dont worry";
        inputRef.value = ""; // clear the input
      }, 2000);
    }
    let dtimee = [
      "Delivery|delivery|delivery details|Delivery date|delivery time|Delivery time|deliverytime"
    ];
    let words37 = new RegExp(dtimee);
    if (words37.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText =
          "Every Product will be delivered within 3-5 days";
        inputRef.value = ""; // clear the input
      }, 2000);
    }
    let rate = [
      "pleaseratemyservice|Rate my service|please rate my service from 1-10|rate me|give rating|rate my service"
    ];
    let words38 = new RegExp(rate);
    if (words38.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText =
          "Enter Rating from 0-10";
        inputRef.value = ""; // clear the input
      }, 2000);
    }
    let ratte = [
      "ra|0|1|2|3|4|5|6|7|8|9|10|okk"
    ];
    let words39= new RegExp(ratte);
    if (words39.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText =
          "ThankYou for ur valuable Feedback";
        inputRef.value = ""; // clear the input
      }, 2000);
    }
    let seve = [
      "75|independence|Independence|august 15|15|1947|2022|August 15"
    ];
    let words40 = new RegExp(seve);
    if (words40.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText =
          "Let's Celebrate the 75th Year of INDEPENDENCE";
        inputRef.value = ""; // clear the input
      }, 2000);
    }
    let reven= [
      "revenue|revenueofurwebsite|profitofyourwebsite|profit"
    ];
    let words41 = new RegExp(reven);
    if (words41.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText =
          "I cannot disclose the details ....Income tax may arise...";
        inputRef.value = ""; // clear the input
      }, 2000);
    }
    let mag = [
      "raaj|manojkumar|manoj|raja manoj kumar|Manoj Kumar|3434|dontgiveup|Dontgiveup"
    ];
    let words42 = new RegExp(mag);
    if (words42.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText =
          "Hey manoj kumar waasup";
        inputRef.value = ""; // clear the input
      }, 2000);
    }
    let mug = [
      "Mukesh Rajbanshi|mukesh here|mukeshrajbanshi|Mukesh|mukesh rajbanshi|3432|myidis3432"
    ];
    let words43 = new RegExp(mug);
    if (words43.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText =
          "Tapai kasari ho Mukesh Rajbanshi";
        inputRef.value = ""; // clear the input
      }, 2000);
    }
    let aug = [
      "Arsalan Khan|arsalan here|arsalan khan|Arsalan|my name is arsalan|3431|myidis3431"
    ];
    let words44 = new RegExp(aug);
    if (words44.test(document.querySelector("#input").value)) {
      getBotMessage.innerText = "Typing...";
      setTimeout(() => {
        getBotMessage.innerText =
          "Hi Arsalan Khan i know ur r from Vaishnavi pg for men";
        inputRef.value = ""; // clear the input
      }, 2000);
    }
    // let nog =" ";
    // let words45 = new RegExp(nog);
    // if (words45.test(document.querySelector("#input").value)) {
    //   getBotMessage.innerText = "Typing...";
    //   setTimeout(() => {
    //     getBotMessage.innerText =
    //       "Abhe Bhosidike type Something....Saala";
    //     inputRef.value = ""; // clear the input
    //   }, 2000);
    // }
    getHumanMessage.innerText = inputRef.value; // display the message
  };
  return (
    <div className="Chat" onLoad={checkStatus}>
      <button data-tip data-for="registerTip" id='sido'>
        Sample Questions <br />
        To chat
      </button>

      <ReactTooltip id="registerTip" place="top" effect="solid">

        Hi  Hello<br />
        ask ur name<br/>
        How many products in your website<br />
        how many categories<br />
        owner of this website<br />
        Rival of your website<br />
        Coupon code<br />
        Suggestion/message to me<br />-please enjoy 75th year of independence change your social profile dp with tricolour flag
        can i sort products on my choice<br />
        can i know clear product description<br />
        Base location  of your website<br />
        past orders &nbsp;/ &nbsp;orders&nbsp;/&nbsp;delivery data<br />
        Are products genuine<br />
        payment mode &nbsp;&nbsp;COD?<br />
        categories detailes<br />
        brands names <br />
        Payment issue &nbsp; damage problem<br />
        Revenue &nbsp; &nbsp;Profit of your website<br />
        images are genuine<br />
        Where is my product<br />
        Delivery time<br />
        Rating<br />
        Stock<br />
        is Discount available<br />
        Revenue &nbsp;/&nbsp;Profit of your company<br />
        Thankyou &nbsp;/&nbsp;Bye<br />
        Customer care no<br />
        please rate my service from 1-10






      </ReactTooltip>
      <div className="wrapper">
        <div className="content">
          <div className="header">
            <div className="img">
              <img src={image} alt="" />
            </div>
            <div className="right">
              <div className="name">techmojo</div>
              <div className="statusi">Active</div>
            </div>
          </div>
          <div className="main">
            <div className="main_content">
              <div className="messages">
                <div
                  className="bot-message"
                  id="message1"
                  ref={botmessage}
                ></div>
                <div
                  className="human-message"
                  id="message2"
                  ref={humanMessage}
                ></div>
              </div>
            </div>
          </div>
          <div className="bottom">
            <div className="btm">
              <div className="input">
                <input
                  type="text"
                  id="input"
                  placeholder="Enter your message"
                  ref={input}
                />
              </div>
              <div className="btn">
                <button onClick={handleInput}>
                  <i className="fas fa-paper-plane"></i>Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Chatwithcust