// "use client"

import { gql, useQuery } from "@apollo/client";

export type ContributorType = {
  name: string;
  titleAndCompany: string;
  profile: string;
  companyLink: string;
  img: string;
};

const organizerQuery = gql`
  query organizers {
    organizers(first: 40) {
      name
      titleAndCompany
      profile
      companyLink
      img
    }
  }
`;

const pastContributorQuery = gql`
  query contributors {
    contributors(first: 20) {
      name
      titleAndCompany
      profile
      companyLink
      img
    }
  }
`;

export const useOrganizers = () => {
  const { data } = useQuery<{ organizers: ContributorType[] }>(organizerQuery);

  const organizers = data?.organizers || [];

  return { organizers };
};

export const usePastContributors = () => {
  const { data } = useQuery<{ contributors: ContributorType[] }>(
    pastContributorQuery
  );

  const pastContributors = data?.contributors || [];

  return { pastContributors };
};
