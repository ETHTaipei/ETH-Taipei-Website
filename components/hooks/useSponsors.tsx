// "use client"

import { year } from "@/public/constant/content";
import { gql, useQuery } from "@apollo/client";

export type SponsorProps = {
  name: string;
  url: string;
  img: string;
  tier: string;
  width: number;
  height: number;
  highlightDescription: string;
  highlightLink: string;
};

const query = gql`query {
  sponsors: sponsors${year} (first: 100, where: {show:true}) {
    url
    name
    img
    tier
    width
    highlightDescription
    highlightLink
  }
}
`;

/**
 * 
 * @description get sponsors
 * 
 */
export const useSponsors= () => {

  const { data } = useQuery<{sponsors: SponsorProps[]}>(query);

  const all = data?.sponsors || [];

  const goldSponsors = all.filter((sponsor) => sponsor.tier === "gold").map((s) => {return {...s, height: 200}});
  const silverSponsors = all.filter((sponsor) => sponsor.tier === "silver").map((s) => {return {...s, height: 150}});
  const bronzeSponsors = all.filter((sponsor) => sponsor.tier === "bronze").map((s) => {return {...s, height: 100}});

  return {  goldSponsors, silverSponsors, bronzeSponsors }
}