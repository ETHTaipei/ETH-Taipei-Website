// "use client"

import { gql, useQuery } from "@apollo/client";

type MediaPartnerProps = {
  name: string;
  url: string;
  img: string;
  height?: number; // heigh overrider
};

const query = gql`query partners {
  mediaPartner (first: 100, where: {show:true}) {
    url
    name
    img
  }
}
`;

export const useMediaPartners = () => {

  const { data } = useQuery<{mediaPartner: MediaPartnerProps[]}>(query);

  const mediaPartners = data?.mediaPartner || [];

  return {  mediaPartners };
};