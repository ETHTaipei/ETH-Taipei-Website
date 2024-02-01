// "use client"

import { gql, useQuery } from "@apollo/client";

export type SpeakerProps = {
  name: string;
  url: string;
  img: string; // img
  tier: string;
  width: number
  height: number
};

const query = gql`query sponsors {
  sponsors (first: 100, where: {show:true}) {
    url
    name
    img
    tier
    width
  }
}
`;

/**
 * 
 * @description get sponsors
 * 
 */
export const useSponsors= () => {

  const { data } = useQuery<{sponsors: SpeakerProps[]}>(query);

  const all = data?.sponsors || [];

  const goldSponsors = all.filter((sponsor) => sponsor.tier === "gold").map((s) => {return {...s, height: 200}});
  const silverSponsors = all.filter((sponsor) => sponsor.tier === "silver").map((s) => {return {...s, height: 150}});
  const bronzeSponsors = all.filter((sponsor) => sponsor.tier === "bronze").map((s) => {return {...s, height: 100}});

  return {  goldSponsors, silverSponsors, bronzeSponsors }
}