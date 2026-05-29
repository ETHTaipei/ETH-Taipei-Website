import { year } from "@/public/constant/content";
import { gql, useQuery } from "@apollo/client";
import { FLAGS } from "@/public/constant/flags";
import { PLATINUM, GOLD, SILVER, BRONZE } from "@/public/constant/logo_width";

export type SponsorProps = {
  name: string;
  url: string;
  img: string;
  tier: string;
  width: number;
};

export const SPONSOR_QUERY = gql`query {
  sponsors: sponsors${year} (first: 100, where: {show:true}) {
    url
    name
    img
    tier
  }
}
`;

export const useSponsors = () => {
  // The query references the year-templated collection (e.g. sponsors2026)
  // which Hygraph 400s on until the schema is seeded. Skip until the section
  // is launched to avoid console errors and wasted requests.
  const { data } = useQuery<{ sponsors: SponsorProps[] }>(SPONSOR_QUERY, {
    skip: !FLAGS.showSponsors,
  });

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
