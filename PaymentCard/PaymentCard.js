import React, { useEffect } from "react";
import classes from "./PaymentCard.module.css";
import AOS from "aos";
import "aos/dist/aos.css";

function PaymentCard() {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
  return (
    <div data-aos="fade-left" className={classes["payment--card"]}>
      <div className={classes["paymentcard--left"]}>
        <h3>Spaces Payment Card</h3>
        <span className={classes["payment-span"]}>
          In our bank you can choose a personal plastic card for any purpose and
          at any price: from inexpensive instant cards to Premium class cards.
          An instant payment card is a non-personalized card of international
          class, which is issued in a short time and allows you to conveniently
          and safely use the money on your card account.
        </span>
        <button>Learn More</button>
      </div>
      <div className={classes["paymentcard--right"]}>
        <img
          src="https://res.cloudinary.com/dt9f36crx/image/upload/v1664893628/Portfolio%20Adidas/SpacesCreditCardImages/Spaces_10_lqvsfh.png"
          alt="cards"
        />
      </div>
    </div>
  );
}

export default PaymentCard;
