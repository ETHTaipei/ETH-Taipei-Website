// "use client"

import { year } from "@/public/constant/content";
import { gql, useQuery } from "@apollo/client";

type MediaPartnerProps = {
  name: string;
  url: string;
  img: string;
  height?: number; // heigh overrider
};

const query = gql`query {
  mediaPartner: mediaPartners${year} (first: 100, where: {show:true}) {
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