import React from "react";
import "./style.css";

export default function Footer() {
  return (
    <>
      <section className="footerSection-container">
        <div className="column">
          <h4>BUR-HAN Garden and Lawn Care</h4>
          <ul>
            <li>
              MAILING ADDRESS: Suite #314 1641 Lonsdale Ave, North Vancouver,
              BC, V7M 2J5
            </li>
            <li>SHOP ADDRESS: 2110 Front St, North Vancouver, BC, V7H 1A3</li>
            <li>
              PHONE:
              <a href="tel:604-983-2687"> (604) 983-2687</a>
            </li>
            <li>
              EMAIL:
              <a href="mailto:gardenandlawncare@bur-han.ca">
                {" "}
                gardenandlawncare@bur-han.ca
              </a>
            </li>
          </ul>
        </div>
        <div className="column ">
          <h4>Our Services</h4>
          <ul>
            <li>
              <a href="/services/landscape-maintenance">Landscape Maintenance</a>
            </li>
            <li>
              <a href="/services/residential-lawn-care">Residential Lawn Care</a>
            </li>
            <li>
              <a href="/services/hardscape-installs-maintenance">
                Hardscape Installs/Maintenance
              </a>
            </li>
            <li>
              <a href="/services/softscape-installs-maintenance">
                {" "}
                Softscape Installs/Maintenance
              </a>
            </li>
            <li>
              <a href="/services/design-and-modelling">Designs and Modelling</a>
            </li>
            <li>
              <a href="/services/snow-management">Snow Management</a>
            </li>
          </ul>
        </div>

        <div className="column ">
          <h4>Working Hours</h4>
          <ul>
            <li>Monday: 8:30 AM-4:30 PM</li>
            <li>Tuesday: 8:30 AM-4:30 PM</li>
            <li>Wednesday: 8:30 AM-4:30 PM</li>
            <li>Thursday: 8:30 AM-4:30 PM</li>
            <li>Friday: 8:30 AM-4:30 PM</li>
            <li>Saturday: Closed</li>
            <li>Sunday: Closed</li>
          </ul>
        </div>

        <div className="column4 ">
          <h4>Follow Us</h4>
          <div className="social-links d-flex ">
            <a
              href="https://www.facebook.com/bhgardenandlawncare"
              className="facebook"
            >
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a
              href="https://www.instagram.com/bhgardenandlawncare"
              className="instagram"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a
              href="https://www.youtube.com/user/readyforvideo"
              className="youtube"
            >
              <i className="fa-brands fa-youtube"></i>
            </a>
            <a
              href="https://www.pinterest.ca/bhgardenandlawn"
              className="pinterest"
            >
              <i className="fa-brands fa-pinterest"></i>
            </a>
          </div>

          <h4 className="pt-4 ">Service Areas</h4>
          <div className="areas">
            <a href="/service-area/vancouver">Vancouver |</a>
            <a href="/service-area/north-vancouver">North Vancouver |</a>
            <a href="/service-area/port-moody">Port Moody |</a>
            <a href="/service-area/west-vancouver">West Vancouver |</a>
            <a href="/service-area/burnaby">Burnaby |</a>
            <a href="/service-area/port-coquitlam">Port Coquitlam |</a>
            <a href="/service-area/new-westminister"> New Westminster |</a>
            <a href="/service-area/coquitlam"> Coquitlam |</a>
            <a href="/service-area/richmond"> Richmond |</a>
            <a href="/service-area/maple-ridge"> Maple Ridge |</a>
            <a href="/service-area/delta"> Delta |</a>
            <a href="/service-area/surrey"> Surrey |</a>
            <a href="/service-area/white-rock"> White Rock</a>
          </div>
        </div>
      </section>

      <footer className="container-fluid footer_section">
        <p>
          &copy; 2024
            BUR-HAN Garden & Lawn Care. All Rights Reserved
        </p>
        <button className="cta-button">
          {" "}
          <a className="quotea" href="/contact-us">
            {" "}
            GET A QUOTE
          </a>
        </button>
      </footer>
    </>
  );
}
