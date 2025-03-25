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

export const PARTNER_QUERY = gql`query {
  partners: partners${year} (first: 100, where: {show:true, isCommunitySupport:false}) {
    url
    name
    img
  }
}
`;

export const MEDIAPARTNER_QUERY = gql`query {
  partners: mediaPartners${year} (first: 100, where: {show:true}) {
    url
    name
    img
    tier
  }
}
`;

export const COMMUNITY_QUERY = gql`
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
      tier: partner.tier || 3, // Default to tier 3 if not specified
    })) || [];

  // tier: 1 ~ 3, with 1 being the highest importance
  mediaPartners.sort((a, b) => a.tier - b.tier);

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
