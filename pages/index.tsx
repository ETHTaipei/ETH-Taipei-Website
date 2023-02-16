import React from "react";
import Banner from "@/components/HomePage/Banner";
import Introduction from "@/components/HomePage/Introduction";
import CountdownTimer from "@/components/HomePage/CountDownTimer";
import Activities from "@/components/HomePage/Activities";
import ApplicationForm from "@/components/HomePage/ApplicationForm";
import Venue from "@/components/HomePage/Venue";
import Speakers from "@/components/HomePage/Speakers";
import Sponsors from "@/components/HomePage/Sponsors";
import Organizers from "@/components/HomePage/Organizers";

const Home = () => {
  return (
    <div>
      <Banner />
      <Introduction />
      <CountdownTimer />
      <Activities />
      <ApplicationForm />
      <Venue />
      <Speakers />
      <Sponsors />
      <Organizers />
    </div>
  );
};

export default Home;
