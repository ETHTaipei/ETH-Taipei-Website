// "use client"

import { year } from "@/public/constant/content";
import { gql, useQuery } from "@apollo/client";

type PartnerType = {
  name: string;
  url: string;
  img: string;
  height?: number; // height override
};

const query = gql`query {
  partners: partners${year} (first: 100, where: {show:true, isCommunitySupport:false}) {
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
  const { data } = useQuery<{ partners: PartnerType[] }>(query);

  const partners = data?.partners || [];

  return { partners };
};

export const useCommunityPartners = () => {
  const { data } = useQuery<{ partners: PartnerType[] }>(communityQuery);

  const partners = data?.partners || [];

  return { partners };
};
