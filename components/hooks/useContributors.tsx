// "use client"

import { gql, useQuery } from "@apollo/client";

export type ContributorType = {
  name: string;
  titleAndCompany: string;
  profile: string;
  companyLink: string;
  img: string;
};

const query = gql`
  query organizers {
    contributors(first: 20) {
      name
      titleAndCompany
      profile
      companyLink
      img
    }
  }
`;

export const usePastContributors = () => {
  const { data } = useQuery<{ contributors: ContributorType[] }>(query);

  const pastContributors = data?.contributors || [];

  return { pastContributors };
};
