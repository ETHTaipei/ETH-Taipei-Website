import { usePastContributors } from "@/components/hooks/useContributors";
import PeopleLink from "./PeopleLink";
import PeopleSection from "./PeopleSection";

const PastContributors = () => {
  const { pastContributors } = usePastContributors();

  return (
    <PeopleSection
      title="Past Contributors"
      subtitle="ETHTaipei won't be possible without you <3"
      iconSrc="/images/icons/contributors.svg"
      iconWidth={46}
      iconHeight={46}
      paddingStyle={{
        default: "0px 40px 120px 40px",
        mobile: "0px 24px 60px 24px",
      }}
    >
      {pastContributors.map((contributor, index) => (
        <PeopleLink person={contributor} key={index} />
      ))}
    </PeopleSection>
  );
};

export default PastContributors;
