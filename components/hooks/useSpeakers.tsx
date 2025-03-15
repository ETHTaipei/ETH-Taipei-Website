// "use client"

import { year } from "@/public/constant/content";
import { gql, useQuery } from "@apollo/client";

export type SpeakerProps = {
  name: string;
  company: string;
  img: string;
  profile?: string;
  companyLink?: string;
  keynote: boolean;
};

const query = gql`query {
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
  const { data } = useQuery<{ speakers: SpeakerProps[] }>(query);

  const all = data?.speakers || [];

  const keynoteSpeakers = all.filter((speaker) => speaker.keynote);

  const unsortedSpeakers = all.filter((speaker) => !speaker.keynote);
  const speakers = unsortedSpeakers.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return { speakers, keynoteSpeakers };
};
