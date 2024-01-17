// "use client"

import { gql, useQuery } from "@apollo/client";

export type SpeakerProps = {
  name: string;
  company: string;
  img: string; // img
  profile?: string; // link to profile
  companyLink?: string;
  show: boolean;
  keynote: boolean;
};

const query = gql`query Speakers {
  speakers (where: { show: true }) {
    name
    company
    companyLink
    img
    profile
    createdAt
    id
    publishedAt
    show
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

  const { data } = useQuery<{speakers: SpeakerProps[]}>(query);

  const all = data?.speakers || [];

  const keynoteSpeakers = all.filter((speaker) => speaker.keynote);

  const speakers = all.filter((speaker) => !speaker.keynote);

  return {  speakers, keynoteSpeakers };
};