import { gql, useQuery } from "@apollo/client";

export type ContributorType = {
  name: string;
  titleAndCompany: string;
  img: string;
  profile: string;
  companyLink?: string;
};

export const ORGANIZER_QUERY = gql`
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

export const PASTCONTRIBUTOR_QUERY = gql`
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
  const { data } = useQuery<{ organizers: ContributorType[] }>(ORGANIZER_QUERY);

  const organizers = data?.organizers || [];

  return { organizers };
};

export const usePastContributors = () => {
  const { data } = useQuery<{ contributors: ContributorType[] }>(
    PASTCONTRIBUTOR_QUERY
  );

  const pastContributors = data?.contributors || [];

  return { pastContributors };
};
