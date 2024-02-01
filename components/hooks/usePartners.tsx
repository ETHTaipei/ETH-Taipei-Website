// "use client"

import { gql, useQuery } from "@apollo/client";

type PartnerType = {
  name: string;
  url: string;
  img: string;
  height?: number; // heigh overrider
};

const query = gql`query partners {
  partners (first: 100, where: {show:true, isCommunitySupport:false}) {
    url
    name
    img
  }
}
`;

export const usePartners = () => {

  const { data } = useQuery<{partners: PartnerType[]}>(query);

  const partners = data?.partners || [];

  return {  partners };
};