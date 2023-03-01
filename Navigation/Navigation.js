import React, { useState } from "react";
import classes from "./Navigation.module.css";
import { Link } from "react-scroll";
import { VscMenu, VscChromeClose } from "react-icons/vsc";
import "./Navigation.css";

function Navigation() {
  const [dropdown, setDropDown] = useState(false);

  const dropdownEventHandler = () => {
    setDropDown(!dropdown);
  };
  return (
    <>
      <div className={classes["nav-section"]}>
        <img
          className={classes["nav-img"]}
          src="https://res.cloudinary.com/dt9f36crx/image/upload/v1664910241/Portfolio%20Adidas/SpacesCreditCardImages/Spaces_Gold_2_g8574o.png"
          alt="dd"
        />

        <nav>
          <li></li>
          <li>
            <Link
              to="features"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Features
            </Link>
          </li>
          <li>
            <Link
              to="dashboard"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
            >
              DashBoard
            </Link>
          </li>

          <li>
            <Link
              to="bankonline"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Online Banking
            </Link>
          </li>
          <li>
            <Link
              to="faq"
              spy={true}
              smooth={true}
              offset={-120}
              duration={500}
            >
              FAQ
            </Link>
          </li>
          <li>Contact Us</li>
        </nav>
        <div>
          <button className={classes["nav-btn"]}>Get A Card</button>
        </div>
      </div>
      <div className={classes["mobile-nav"]}>
        <img
          className={classes["nav-img"]}
          src="https://res.cloudinary.com/dt9f36crx/image/upload/v1664910241/Portfolio%20Adidas/SpacesCreditCardImages/Spaces_Gold_2_g8574o.png"
          alt="dd"
        />
        <div className={classes["mobilenavicon---btn"]}>
          <div>
            <button className={classes["nav-btn"]}>Get A Card</button>
          </div>
          <div
            onClick={dropdownEventHandler}
            className={classes["mobilenav-icon"]}

            // className={dropdown === true ? <VscMenu /> : <VscChromeClose />}
          >
            <span>
              {dropdown === false ? (
                <VscMenu size={32} />
              ) : (
                <VscChromeClose size={32} />
              )}
            </span>
          </div>
        </div>
      </div>
      <div className={dropdown === true ? "activelist" : "inactivelist"}>
        <li>
          <Link
            to="features"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Features
          </Link>
        </li>
        <li>
          <Link
            to="dashboard"
            spy={true}
            smooth={true}
            offset={-90}
            duration={500}
          >
            DashBoard
          </Link>
        </li>

        <li>
          <Link
            to="bankonline"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            Online Banking
          </Link>
        </li>
        <li>
          <Link to="faq" spy={true} smooth={true} offset={-120} duration={500}>
            FAQ
          </Link>
        </li>
        <li>Contact Us</li>
      </div>
    </>
  );
}

export default Navigation;
