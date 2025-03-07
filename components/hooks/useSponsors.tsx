// "use client"

import { year } from "@/public/constant/content";
import { gql, useQuery } from "@apollo/client";
import { PLATINUM, GOLD, SILVER, BRONZE } from "@/public/constant/logo_width";

export type SponsorProps = {
  name: string;
  url: string;
  img: string;
  tier: string;
  width: number;
};

const query = gql`query {
  sponsors: sponsors${year} (first: 100, where: {show:true}) {
    url
    name
    img
    tier
  }
}
`;

export const useSponsors = () => {
  const { data } = useQuery<{ sponsors: SponsorProps[] }>(query);

  const all = data?.sponsors || [];

  const filterSponsorByTier = (tier: string): SponsorProps[] => {
    const width =
      {
        platinum: PLATINUM,
        gold: GOLD,
        silver: SILVER,
      }[tier] || BRONZE;

    return all
      .filter((sponsor) => sponsor.tier === tier)
      .map((s) => ({ ...s, width }));
  };

  const platinumSponsors = filterSponsorByTier("platinum");
  const goldSponsors = filterSponsorByTier("gold");
  const silverSponsors = filterSponsorByTier("silver");
  const bronzeSponsors = filterSponsorByTier("bronze");

  return { platinumSponsors, goldSponsors, silverSponsors, bronzeSponsors };
};
