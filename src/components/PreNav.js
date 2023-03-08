import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logos/logo2.jpg";
import { GoLocation } from "react-icons/go";
import { MdLocationPin } from "react-icons/md";
import {
  BsTwitter,
  BsFacebook,
  BsInstagram,
  BsFillTelephoneFill,
} from "react-icons/bs";
import { SiTiktok } from "react-icons/si";
import { HiMail } from "react-icons/hi";

const PreNav = () => {
  return (
    <section className="pre-nav">
      <div className="center">
        {/* <p>
          <GoLocation />
        </p> */}
        <div className="contacts">
          <div className="item">
            <span>
              <HiMail />
            </span>
            <div className="text">
              {/* <p className="head">For Enquiries</p> */}
              <p className="desc">enquiries@sagedsl.com</p>
            </div>
          </div>
          {/* <div className="item">
            <span><BsFillTelephoneFill/></span>
            <div className="text">
              <p className="head">Emergency Help</p>
              <p className="desc">+234 701 784 1325</p>
            </div>
          </div> */}
          <div className="item">
            <span>
              <BsFillTelephoneFill />
            </span>
            <div className="text">
              {/* <p className="head">Customer Care</p> */}
              <p className="desc">08139289067</p>
            </div>
          </div>
          <div className="item location">
            <span>
              {/* <BsClock /> */}
              <MdLocationPin />
            </span>
            <div className="text">
              {/* <p className="head">We Are Open 24 Hours</p> */}
              <p className="desc ">
                Plot 10, Fola Osibo Street (by road 15 junction), Lekki Phase 1,
                Lagos{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="socials">
            <BsTwitter />
            <BsFacebook />
            <BsInstagram />
            <SiTiktok />
          </div>
          <a href="#">
            <button>Test Results</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PreNav;
