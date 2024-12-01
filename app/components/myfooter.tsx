import React from "react";
import Image from "next/image";
import { Roboto } from "next/font/google";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const Myfooter = () => {
  const footerLinks = [
    { title: "Courses", links: ["Business", "Development", "Technology", "Design", "Programming"] },
    { title: "Resources", links: ["Career", "Resume", "Learning", "Interview Preparation", "Jobs"] },
    { title: "About Us", links: ["Contact", "Help/Support", "FAQ", "Terms and Conditions", "Partners"] },
  ];

  const socialIcons = [
    { href: "#", icon: <FaFacebookF size={20} aria-label="Facebook" /> },
    { href: "#", icon: <IoLogoLinkedin size={20} aria-label="LinkedIn" /> },
    { href: "#", icon: <FaTwitter size={20} aria-label="Twitter" /> },
    { href: "#", icon: <FaInstagram size={20} aria-label="Instagram" /> },
  ];

  return (
    <div>
      <div className="flex flex-wrap justify-between px-4 py-8 md:px-16">
        {/* Logo */}
        <div className="w-full sm:w-[150px] md:w-[120px] mb-6 md:mb-0">
          <Image src="/logo.png" alt="logo" width={100} height={100} className="w-full h-auto" />
        </div>

        {/* Footer Links */}
        <div className="w-full sm:w-1/2 md:w-auto flex justify-between gap-8 flex-wrap md:flex-nowrap">
          {footerLinks.map((section, index) => (
            <ul key={index} className="mb-6 sm:mb-0">
              <li className={`${roboto.className} text-[16px] font-semibold py-3`}>{section.title}</li>
              {section.links.map((link, idx) => (
                <li key={idx} className={`${roboto.className} text-[14px] font-normal`}>{link}</li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      <hr className="border-t border-gray-300 my-8" />

      {/* Bottom Section - Copyright & Social Links */}
      <div className="flex justify-center items-center flex-col md:flex-row gap-6 md:gap-12 px-4">
        {/* Copyright */}
        <h1 className={`${roboto.className} text-center md:text-left text-[14px] sm:text-[16px] md:flex-1`}>
          2023 Ddsgnr. All rights reserved.
        </h1>

        {/* Privacy & Terms Links */}
        <div className="flex justify-center items-center gap-9 md:flex-1">
          <ul className="flex gap-9 flex-wrap justify-center md:justify-start">
            <li className={`${roboto.className} text-[14px] font-normal`}>Privacy Policy</li>
            <li className={`${roboto.className} text-[14px] font-normal`}>Terms of Service</li>
            <li className={`${roboto.className} text-[14px] font-normal`}>Cookies Settings</li>
          </ul>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center items-center gap-6 md:flex-1">
          {socialIcons.map((social, idx) => (
            <a key={idx} href={social.href} aria-label={social.icon.props["aria-label"]} className="text-[#000000]">
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Myfooter;
