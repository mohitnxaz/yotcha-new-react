import React from "react";
import yotchaIcon from "../../../../../../public/icons/YotchaLogo.svg";
import FacebookIcon from "../../../../../../public/icons/Facebook.svg";
import TwitterIcon from "../../../../../../public/icons/Twitter Circled.svg";
import InstagramIcon from "../../../../../../public/icons/Instagram Circle.svg";
import YoutubeIcon from "../../../../../../public/icons/YouTube.svg";
import addressIcon from "../../../../../../public/icons/Home Address.svg";
import phoneIcon from "../../../../../../public/icons/Phone.svg";
import emailIcon from "../../../../../../public/icons/Composing Mail.svg";
import { Link } from "react-router-dom";

interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
  const socialIcons = [
    { icon: FacebookIcon, link: "https://www.facebook.com/" },
    { icon: TwitterIcon, link: "https://twitter.com/" },
    { icon: InstagramIcon, link: "https://www.instagram.com/" },
    { icon: YoutubeIcon, link: "https://www.youtube.com/" },
  ];
  return (
    <div className="flex flex-col bg-[#06112A]">
      <div className="sm:px-[150px] px-[20px] sm:pt-[117px] pt-[70px] sm:pb-[107px] pb-[50px] bg-[url('/footerBg.svg')] ">
        <div className="flex flex-col sm:flex-row gap-y-[44px] sm:justify-between">
          <div className="flex flex-col gap-[20px] sm:w-[30%]">
            <Link to="/">
              <img src={yotchaIcon} alt={""} />
            </Link>
            <div className="text-white-body text-[18px] font-[400]">
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia.
            </div>
            <div className="flex">
              {socialIcons.map((social, index) => (
                <Link key={index} to={social.link} target="_blank">
                  <img
                    src={social.icon}
                    alt={`Social Icon ${index + 1}`}
                    width={40}
                    height={40}
                    className="cursor-pointer transition duration-300 transform hover:scale-110"
                  />
                </Link>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-y-[23px]">
            <div className="text-white text-[24px] font-[500]">Offers</div>
            <div className="flex flex-col gap-y-[8px]">
              <div className="text-white-body text-[18px] leading-[24px] font-[400]">
                Properties
              </div>
              <div className="text-white-body text-[18px] leading-[24px] font-[400]">
                Agents
              </div>
              <div className="text-white-body text-[18px] leading-[24px] font-[400]">
                addresss
              </div>
              <div className="text-white-body text-[18px] leading-[24px] font-[400]">
                Clients Support
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-[23px]">
            <div className="text-white text-[24px] font-[500]">Company</div>
            <div className="flex flex-col gap-y-[8px]">
              <Link to="/">
                <div className="text-white-body text-[18px] leading-[24px] font-[400] cursor-pointer hover:text-white">
                  Home
                </div>
              </Link>
              <Link to="/about">
                <div className="text-white-body text-[18px] leading-[24px] font-[400] cursor-pointer hover:text-white">
                  About
                </div>
              </Link>
              <Link to="/blog">
                <div className="text-white-body text-[18px] leading-[24px] font-[400] cursor-pointer hover:text-white">
                  Blog
                </div>
              </Link>
              <Link to="/contact">
                <div className="text-white-body text-[18px] leading-[24px] font-[400] cursor-pointer hover:text-white">
                  Contact Us
                </div>
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-y-[23px]">
            <div className="text-white text-[24px] font-[500]">
              Have a Question?
            </div>
            <div className="flex flex-col gap-y-[8px]">
              <Link
                to="https://maps.app.goo.gl/CddjRqQW9BLPTQ1y7"
                target="_blank"
              >
                <div className="flex items-center gap-x-[4px]">
                  <img src={addressIcon} alt={""} />
                  <div className="text-white-body text-[18px] leading-[24px] font-[400] cursor-pointer hover:text-white">
                    203 Fake St. Mountain View, Newton, Singapore
                  </div>
                </div>
              </Link>
              <Link to="tel:+2 392 3929 210">
                <div className="flex items-center gap-x-[4px]">
                  <img src={phoneIcon} alt={""} />
                  <div className="text-white-body text-[18px] leading-[24px] font-[400] cursor-pointer hover:text-white">
                    +2 392 3929 210
                  </div>
                </div>
              </Link>
              <Link to="mailto:info@yotcha.com">
                <div className="flex items-center gap-x-[4px]">
                  <img src={emailIcon} alt={""} />
                  <div className="text-white-body text-[18px] leading-[24px] font-[400] cursor-pointer hover:text-white">
                    info@yotcha.com
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="text-white text-[#16px] font-[400] text-center py-[23px]">
        Copyright ©2023 All rights reserved
      </div>
    </div>
  );
};

export default Footer;
