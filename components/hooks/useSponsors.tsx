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

export const useSponsors = () => {
  const { data } = useQuery<{ sponsors: SponsorProps[] }>(query);

  const all = data?.sponsors || [];

  const getSponsors = (tier: string) => {
    const height = (() => {
      switch (tier) {
        case "platinum":
          return 250;
        case "gold":
          return 200;
        case "silver":
          return 150;
        default:
          return 100;
      }
    })();

    return all
      .filter((sponsor) => sponsor.tier === tier)
      .map((s) => ({ ...s, height }));
  };

  const platinumSponsors = getSponsors("platinum");
  const goldSponsors = getSponsors("gold");
  const silverSponsors = getSponsors("silver");
  const bronzeSponsors = getSponsors("bronze");

  return { platinumSponsors, goldSponsors, silverSponsors, bronzeSponsors };
};
