import { year } from "@/public/constant/content";
import { gql, useQuery } from "@apollo/client";
import { ContributorType } from "./useContributors";

export type SpeakerType = Omit<ContributorType, "titleAndCompany"> & {
  company: string;
  keynote: boolean;
};

export const SPEAKER_QUERY = gql`query {
  speakers: speakers${year} (first: 100, where: { show: true }) {
    name
    company
    companyLink
    img
    profile
    createdAt
    id
    publishedAt
    updatedAt
    keynote
  }
}
`;

/**
 *
 * @description fetch speakers with GraphQL
 *
 */
export const useSpeakers = () => {
  const { data } = useQuery<{ speakers: SpeakerType[] }>(SPEAKER_QUERY);

  const all = data?.speakers || [];

  const keynoteSpeakers = all.filter((speaker) => speaker.keynote);

  const unsortedSpeakers = all.filter((speaker) => !speaker.keynote);
  const speakers = unsortedSpeakers.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return { speakers, keynoteSpeakers };
};
