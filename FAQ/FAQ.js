import React, { useState } from "react";

import { AiFillCaretDown, AiFillCaretRight } from "react-icons/ai";

import "./Faq.css";

function FAQ({ faq }) {
  const [display, setdisplay] = useState(-1);

  // const [icon, setIcon] = useState(<AiFillCaretDown />);

  const toggleAccordian = (index) => {
    if (display === index) {
      setdisplay(-1);
      return;
    }
    setdisplay(index);
  };
  return (
    <div className="faq" id="faq">
      {faq.map((items, index) => {
        const { question, answer } = items;
        return (
          <section key={index} onClick={() => toggleAccordian(index)}>
            <div className="faq-box">
              <div className="question-box">
                <h5 className={display === index ? "question" : ""}>
                  {question}
                </h5>
                <div className="ease">
                  {display === index ? (
                    <>
                      <span>
                        <AiFillCaretDown />
                      </span>
                    </>
                  ) : (
                    <>
                      <span>
                        <AiFillCaretRight />
                      </span>
                    </>
                  )}
                </div>
              </div>
              <p className={display === index ? "active" : "inactive"}>
                {answer}
              </p>
            </div>
          </section>
        );
      })}
    </div>
  );
}

export default FAQ;
