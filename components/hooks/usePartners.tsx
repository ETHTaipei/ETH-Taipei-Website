// "use client"

import { year } from "@/public/constant/content";
import { gql, useQuery } from "@apollo/client";
import { COMMUNITY_PARTNER, PARTNER } from "@/public/constant/logo_width";

export type PartnerType = {
  name: string;
  url: string;
  img: string;
  width: number;
};

type MediaPartnerType = PartnerType & {
  tier?: number;
};

const partnerQuery = gql`query {
  partners: partners${year} (first: 100, where: {show:true, isCommunitySupport:false}) {
    url
    name
    img
  }
}
`;

const mediaPartnerQuery = gql`
  query {
    partners: mediaPartners${year}(
      first: 100, 
      where: { show: true }
    ) {
      url
      name
      img
      tier
    }
  }
`;

const communityQuery = gql`
  query {
    partners: partners(
      first: 20
      where: { show: true, isCommunitySupport: true }
    ) {
      url
      name
      img
    }
  }
`;

export const usePartners = () => {
  const { data } = useQuery<{ partners: PartnerType[] }>(PARTNER_QUERY);

  const partners =
    data?.partners.map((partner) => ({
      ...partner,
      width: PARTNER,
    })) || [];

  return { partners };
};

export const useMediaPartners = () => {
  const { data } = useQuery<{ partners: MediaPartnerType[] }>(
    MEDIAPARTNER_QUERY
  );

  const mediaPartners =
    data?.partners.map((partner) => ({
      ...partner,
      width: PARTNER,
      tier: partner.tier || 1, // Default to tier 1 if not specified
    })) || [];

  // tier: 3 ~ 1, with 3 being the highest importance
  mediaPartners.sort((a, b) => b.tier - a.tier);

  return { mediaPartners };
};

export const useCommunityPartners = () => {
  const { data } = useQuery<{ partners: PartnerType[] }>(COMMUNITY_QUERY);

  const communityPartners =
    data?.partners.map((partner) => ({
      ...partner,
      width: COMMUNITY_PARTNER,
    })) || [];

  return { communityPartners };
};
