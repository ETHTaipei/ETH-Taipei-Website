import React from "react";
import Banner from "@/components/HomePage/Banner";
import Introduction from "@/components/HomePage/Introduction";
import Activities from "@/components/HomePage/Activities";
import Recap from "@/components/HomePage/Recap";
import Venue from "@/components/HomePage/Venue";
import Speakers from "@/components/HomePage/Speakers";
import Sponsors from "@/components/HomePage/Sponsors";
import Partners from "@/components/HomePage/Partners";
import Organizers from "@/components/HomePage/Organizers";
import CommunitySupport from "@/components/HomePage/CommunitySupport";
import CommunityEvent from "@/components/HomePage/CommunityEvents";

const Home = () => {
  return (
    <div>
      <Banner />
      <Recap />
      <Introduction />
      <Activities />
      
      <Venue />
      <Speakers />
      <Sponsors />
      <Partners />
      <Organizers />
      <CommunitySupport />
      <CommunityEvent />
    </div>
  );
};

export default Home;
