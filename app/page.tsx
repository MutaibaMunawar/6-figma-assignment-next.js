import React from "react";
import Header from "./components/header";
import Hero from "./components/hero";
import Logo from "./components/logo";
import Courses from "./components/courses";
import Achievement from "./components/achievment";
import Mycourses from "./components/mycourses";
import Ourteam from "./components/ourteam";
import Customer from "./components/customer";
import Footer from "./components/footer";
import Myfooter from "./components/myfooter";

const Page = () => {
  return (
  <div>
      <Header />
      <Hero />
      <Logo />
      <Achievement />
      <Customer />
      <Mycourses />
      <Ourteam />
      <Courses />
      <Footer />
      <Myfooter />
      </div>
  );
};

export default Page;