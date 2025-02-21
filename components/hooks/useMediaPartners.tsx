// "use client"

import { gql, useQuery } from "@apollo/client";

type MediaPartnerProps = {
  name: string;
  url: string;
  img: string;
  height?: number; // heigh overrider
};
const schema = "medias2025"
const query = gql`query partners {
  ${schema} (first: 100, where: {show:true}) {
    url
    name
    img
  }
}
`;

export const useMediaPartners = () => {

  const { data } = useQuery<{ mediaPartner: MediaPartnerProps[] }>(query);
  const mediaPartners = data?.[schema] || [];
  return { mediaPartners };
};