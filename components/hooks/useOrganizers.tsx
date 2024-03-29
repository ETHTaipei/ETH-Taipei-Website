// "use client"

import { gql, useQuery } from "@apollo/client";

export type OrganizerType = {
  name: string;
  titleAndCompany: string;
  profile: string;
  companyLink: string;
  img: string
};

const query = gql`query organizers {
  organizers (first: 20) {
    name
    titleAndCompany
    profile
    companyLink
    img
  }
}
`;

export const useOrganizers = () => {

  const { data } = useQuery<{organizers: OrganizerType[]}>(query);

  const organizers = data?.organizers || [];

  return {  organizers };
};