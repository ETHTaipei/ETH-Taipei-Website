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

const partnerQuery = gql`query {
  partners: partners${year} (first: 100, where: {show:true, isCommunitySupport:false}) {
    url
    name
    img
  }
}
`;

const mediaPartnerQuery = gql`query {
  partners: mediaPartners${year} (first: 100, where: {show:true}) {
    url
    name
    img
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
  const { data } = useQuery<{ partners: PartnerType[] }>(partnerQuery);

  const partners =
    data?.partners.map((partner) => ({
      ...partner,
      width: PARTNER,
    })) || [];

  return { partners };
};

export const useMediaPartners = () => {
  const { data } = useQuery<{ partners: PartnerType[] }>(mediaPartnerQuery);

  const mediaPartners =
    data?.partners.map((partner) => ({
      ...partner,
      width: PARTNER,
    })) || [];

  return { mediaPartners };
};

export const useCommunityPartners = () => {
  const { data } = useQuery<{ partners: PartnerType[] }>(communityQuery);

  const communityPartners =
    data?.partners.map((partner) => ({
      ...partner,
      width: COMMUNITY_PARTNER,
    })) || [];

  return { communityPartners };
};
