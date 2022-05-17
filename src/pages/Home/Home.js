import React from "react";
import Footer from "../../shared/Footer";
import Banner from "./Banner";
import Info from "./Info/Info";
import MakeAppointment from "./MakeAppointment";
import Services from "./Services/Services";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Info></Info>
      <Services></Services>
      <MakeAppointment></MakeAppointment>
      <Testimonials></Testimonials>
      <Footer></Footer>
    </div>
  );
};

export default Home;
